import ko from 'knockout';
import $ from 'jquery';
import {goToView, fixPrice} from 'common';

export default class CartVM{
    constructor(state){
        var self = this;
		self.state = state;
		self.fixPrice = fixPrice;

		self.order = self.state.order;
		self.site = self.state.site;

		self.headContent = ko.observableArray();
		self.middleContent = ko.observableArray();
		self.bottomContent = ko.observableArray();
		self.continueShoppingLink = ko.observable();
		self.successMessage = ko.observable();

		self.orderMergeMessages = ko.observableArray([]);

		self.orderMergeMessages(ko.utils.unwrapObservable(self.state.orderMergeMessages));
		self.mergeMessagesShown = function () {
			self.state.orderMergeMessages([]);
		};

		//Order incentives

		self.incentivePromo = ko.observable();
		self.incentiveHtml = ko.observable();
		self.incentiveProductId = ko.observable();
		self.incentiveSkuId = ko.observable();
		self.incentiveAddAutodelivery = ko.observable(false);
		self.selectedIncentive = ko.observable();
		self.mainQuantity = ko.observable(1);
		self.discountedQuantity = ko.observable(0);

		self.checkIncentive = function(){
			self.incentivePromo('');
			self.incentiveHtml('');
			self.incentiveProductId('');
			self.incentiveSkuId('');
			self.incentiveAddAutodelivery(false);
			self.selectedIncentive('');
			self.mainQuantity(1);
			self.discountedQuantity(0);
			var incentiveTimeout;
			clearTimeout(incentiveTimeout);
			var pathname = window.location.pathname;
			if(pathname == '/cart'){
				$.getJSON("/rest/model/atg/commerce/ShoppingCartActor/orderIncentivePromo" , function(returnedData) {
					if ( returnedData != null) {
						if((returnedData.displayTimeout || returnedData.displayTimeout == 0) && (returnedData.promo || (returnedData.productId && returnedData.skuId))){
							self.incentivePromo(returnedData.promo);
							self.incentiveHtml(returnedData.html);
							self.incentiveProductId(returnedData.productId);
							self.incentiveSkuId(returnedData.skuId);
							self.incentiveAddAutodelivery(returnedData.addAutodelivery);
							self.selectedIncentive(returnedData.incentiveId);
							self.mainQuantity(returnedData.mainQuantity);
							self.discountedQuantity(returnedData.discountedQuantity);
							incentiveTimeout = setTimeout(function() {
								if(returnedData.isSlideOut){
									self.showIncentiveFlyout();
								} else {
									self.showIncentiveModal();
								}
							},returnedData.displayTimeout * 1000)
						}
					}
				});
			}
		}

		var cancelIncentive = true;

		self.applyIncentive = function() {

			cancelIncentive = false;
			self.memorizeIncentive(false,true);

			if (self.incentivePromo() && self.incentiveSkuId() && self.incentiveProductId()) {
				self.handleIncentivePromoAndItem();
			} else if (self.incentiveSkuId() && self.incentiveProductId()) {
				self.handleIncentiveItem();
			} else if (self.incentivePromo()) {
				self.handleIncentivePromo();
			} else {
				self.order.getOrder(self.checkIncentive);
			}
		};

		self.handleIncentivePromoAndItem = function() {
			self.applyIncentivePromo().done(function() {
				self.addIncentiveItemToCart().done(function() {
					self.order.getOrder(self.checkIncentive);
				});
			});
		};

		self.handleIncentiveItem = function() {
			self.addIncentiveItemToCart().done(function() {
				self.order.getOrder(self.checkIncentive);
			});
		};

		self.handleIncentivePromo = function() {
			self.applyIncentivePromo().done(function() {
				self.repriceOrder().done(function() {
					self.order.getOrder(self.checkIncentive);
				});
			});
		};

		self.applyIncentivePromo = function(){
			return $.ajax({
				"dataType": "text",
				"type": "POST",
				"url": '/cart;$urlparam$' + self.incentivePromo(),
				"success": function (msg) { },
				"error": function (msg) {
					console.error("applyIncentivePromo.error", msg);
				}
			});
		};

		self.repriceOrder = function() {
			return $.ajax("/rest/model/atg/commerce/order/purchase/CartModifierActor/repriceOrder", {
				type : "get",
				contentType : "application/json",
				success : function(odata) { },
				error : function(edata) {
					console.error("repriceOrder.error", edata);
				}
			});
		};

		self.addIncentiveItemToCart = function() {
			var data = {
				"catalogRefId": self.incentiveSkuId(),
				"productId": self.incentiveProductId(),
				"quantity" : self.mainQuantity() + self.discountedQuantity(),
				"mainQuantity" : self.mainQuantity(),
				"discountedQuantity" : self.discountedQuantity(),
				"autoDelivery" : self.incentiveAddAutodelivery()
			};
			return $.ajax("/rest/model/atg/commerce/order/purchase/CartModifierActor/addItemToOrder", {
				type : "post",
				contentType : "application/json",
				data : ko.toJSON(data),
				success : function (data) { }
			});
		};

		self.showIncentiveModal = function(){
			var triggerWidth = '600';
			if ($(window).outerWidth() < 600) {
				triggerWidth = '320';
			}
			$('#incentiveModal').dialog({
				resizable: false,
				draggable: false,
				modal: true,
				show: 'fade',
				hide: 'fade',
				width: triggerWidth,
				height: 'auto',
				dialogClass: 'remove-incentive-modal',
				open: function(event, ui) {},
				close: function(event, ui) {
					$(this).dialog('close');
					if(cancelIncentive){
						self.memorizeIncentive(true);
					}
					cancelIncentive = true;
				}
			});
		}

		$('.remove-incentive-modal').remove();

		self.closeIncentiveModal = function(){
			$('#incentiveModal').dialog('close')
		}

		self.showIncentiveFlyout = function(){
			openFlyoutForm('#incentiveFlyoutForm');
		}

		self.memorizeIncentive = function(refreshCart, useIncentive){
			var data = {
				"incentive": self.selectedIncentive(),
				"useIncentive": useIncentive
			};
			$.ajax("/rest/model/atg/commerce/ShoppingCartActor/memorizeIncentive", {
				data : ko.toJSON(data),
				type : "post",
				contentType : "application/json",
				success : function(odata) {
					if(refreshCart){
						self.order.getOrder(self.checkIncentive);
					}
				},
				error : function(edata) {
					console.error("memorizeIncentive.error", edata);
				}
			});
		};

		ko.bindingHandlers.initCloseFlyout = {
			init: function (element) {
				$('.closeThisFlyoutAction').on('click', function(event) {
					event.preventDefault();
					$(this).closest('.flyout-form').removeClass('open');
					$(this).closest('.flyout-form-container').find('.dynamic-form-content').removeAttr('style');
					$('.flyout-form-overlay').removeClass('open');
					$('html').removeClass('overlayed');
				});
				$('.flyout-form-overlay').on('click', function(event) {
					event.preventDefault();
					$('.flyout-form-overlay').removeClass('open');
					$('html').removeClass('overlayed');
					$('.flyout-form').removeClass('open');
					$('.flyout-form').find('.dynamic-form-content').removeAttr('style');
					$('.flyout-form').removeAttr('style');
					self.memorizeIncentive(true);
				});
			}
		};

		self.checkIncentive();

		//Order incentives

		self.init =  function () {
			$.ajaxSetup({ cache: false });
			var date = new Date();
			var url = '/rest/model/hd/content/ContentActor/getContentItem?contentCollection=/content/Web/ShoppingCart/Promo&nocache=' + date.getTime();
			$.getJSON(url, function(returnedData) {
				if (returnedData && returnedData.contentItem
					&& returnedData.contentItem.contents && returnedData.contentItem.contents.length > 0) {

					var content = returnedData.contentItem.contents[0];
					self.headContent(content.headContent);
					self.middleContent(content.middleContent);
					self.bottomContent(content.bottomContent);

					// googleAnalytics.triggerCartView(self.order);
					// omniture.triggerCartView(self.order);
					// tealium.triggerCartView(self.order);
				}
			});
		};


		$.getJSON("/rest/model/atg/commerce/ShoppingCartActor/continueShoppingLink", function(returnedData) {
			self.continueShoppingLink(returnedData.link);
		});


		self.addedToCartMessage = ko.computed(function(){
			if (self.successMessage()) {
				return self.successMessage();
			}
			if (self.order && self.order.addedToCartMessage){
				return self.order.addedToCartMessage();
			}
			return '';
		});


		self.changeQuantity =  function (commerceItem, event) {
			commerceItem.selectedOption = self.getSelectedQtyOption(commerceItem);
			if (event.originalEvent) { //user changed
				commerceItem.updateOrderWithNewCommerceItemAmount(function () {
					self.order.getOrder(self.checkIncentive);
				});
			}
		};

		self.getSelectedQtyOption = function(commerceItem){
			var options = commerceItem.qtyOptionsDisplay();
			var selectedQuantity = commerceItem.quantity();

			for (var i = 0; i < options.length; i++){
				var optionValue = options[i].mainQuantity + options[i].discountedQuantity;
				if (optionValue >= selectedQuantity){
					return options[i];
				}
			}
			return null;
		};

		self.removeItem = function (commerceItemId) {
			console.log(commerceItemId);
			var data = {
				"removalCommerceIds": commerceItemId
			};

			var commerceItems = self.order.commerceItems();
			var product = {};
			for (var i = 0; i < commerceItems.length; i++) {
				var item = commerceItems[i];
				if (commerceItemId == item.repositoryId()) {
					product = item.product;
				}
			}

			$.ajax("/rest/model/atg/commerce/order/purchase/CartModifierActor/removeItemFromOrder", {
				type : "post",
				contentType : "application/json",
				data : ko.toJSON(data),
				cache : false,
				success : function (data) {

					self.order.getOrder(self.checkIncentive);

					omniture.triggerProductRemoveFromCart(product);
					omniture.triggerPageview(self.state, 'Shopping Cart', 'cart');
					omniture.triggerCartView(self.order);

				}
			});
		};

		self.removeAllFromOrder = function () {
			$.ajax("/rest/model/atg/commerce/order/purchase/CartModifierActor/removeAllFromOrder", {
				type : "get",
				contentType : "application/json",
				cache : false,
				success : function (data) {
					self.order.getOrder(self.checkIncentive);
				}
			});
		};

		self.handleAutoDelivery =  function (isAutoDelivery, commerceItemModel) {
			commerceItemModel.autoDelivery = ko.observable(isAutoDelivery);
			commerceItemModel.updateOrderWithNewCommerceItemAmount(function () {
				self.order.getOrder(self.checkIncentive);
			});
		};

		self.proceedToPayPal = function() {
			$.ajax('/rest/model/atg/commerce/purchase/PayPalActor/proceedToPayPal', {
				type: 'post',
				contentType: 'application/json',
				cache : false,
				success: function (data) {
					if (data.formError) {
						console.log(data.formExceptions);
					} else if (data.payPalRedirectUrl) {
						window.location.href = data.payPalRedirectUrl;
					}
				},
				error: function (data) {
					console.log(data);
				}
			});
		};

		self.triggerCartView = function(){
			self.checkIncentive();
			omniture.triggerPageview(self.state, 'Shopping Cart', 'cart');
			omniture.triggerCartView(self.order);
		}

		self.removeAutoDelivery = function (dataView) {
			self.processQuantityOptions(dataView);
			var data = {
				"productId" : dataView.prodId(),
				"catalogRefId" : dataView.skuId(),
				"mainQuantity" : dataView.mainQuantity(),
				"discountedQuantity" : dataView.discountedQuantity()
			};
			$.ajax("/rest/model/atg/commerce/order/purchase/CartModifierActor/removeAutoDelivery", {
				data : ko.toJSON(data),
				type : "post",
				contentType : "application/json",
				cache : false,
				success : function(data) {
					self.order.getOrder(self.triggerCartView);
					self.successMessage(data.successMessage);
				}
			});
		};

		self.upgradeAutoDelivery = function (dataView) {
			self.processADQuantityOptions(dataView);
			var data = {
				"productId" : dataView.prodId(),
				"catalogRefId" : dataView.skuId(),
				"mainQuantity" : dataView.mainQuantity(),
				"discountedQuantity" : dataView.discountedQuantity()
			};
			$.ajax("/rest/model/atg/commerce/order/purchase/CartModifierActor/upgradeAutoDelivery", {
				data : ko.toJSON(data),
				type : "post",
				contentType : "application/json",
				cache : false,
				success : function(data) {
					self.order.getOrder(self.triggerCartView);
					self.successMessage(data.successMessage);
				}
			});
		};

		self.processQuantityOptions = function(commerceItem) {
			var selectedQuantity = commerceItem.quantity();
			commerceItem.qtyOptionsDisplay(commerceItem.qtyOptions());
			var options = commerceItem.qtyOptionsDisplay();
			var isSelected = false;
			for (var i = 0; i < options.length; i++){
				if (!isSelected) {
					if (options[i].quantity >= selectedQuantity && options[i].isOriginal) {
						commerceItem.quantity(options[i].quantity);
						commerceItem.mainQuantity(options[i].mainQuantity);
						commerceItem.discountedQuantity(options[i].discountedQuantity);
						isSelected = true;
					}
				}
			}
			if (!isSelected) {
				var option = options[options.length - 1];
				commerceItem.quantity(option.quantity);
				commerceItem.mainQuantity(option.mainQuantity);
				commerceItem.discountedQuantity(option.discountedQuantity);
			}
		};

		self.processADQuantityOptions = function(commerceItem) {
			var selectedQuantity = commerceItem.quantity();
			commerceItem.qtyOptionsDisplay(commerceItem.qtyOptionsAD());
			var options = commerceItem.qtyOptionsDisplay();
			var isSelected = false;
			for (var i = 0; i < options.length; i++){
				if (!isSelected) {
					if (options[i].quantity >= selectedQuantity && options[i].isOriginal) {
						commerceItem.quantity(options[i].quantity);
						commerceItem.mainQuantity(options[i].mainQuantity);
						commerceItem.discountedQuantity(options[i].discountedQuantity);
						isSelected = true;
					}
				}
			}
			if (!isSelected) {
				var option = options[options.length - 1];
				commerceItem.quantity(option.quantity);
				commerceItem.mainQuantity(option.mainQuantity);
				commerceItem.discountedQuantity(option.discountedQuantity);
			}
		};


		self.gotoView = function(obj, e) {
			goToView(e, self.state);
		};

		self.orderHasAutoDeliveryItems = ko.computed(function() {
			return self.order.autoDelivery() == 'true';
		}, self);

		self.showPayPalButton = ko.computed(function(){
			return !self.orderHasAutoDeliveryItems() && self.site.payPalEnabled();
		}, self);

		self.commerceItemsAmount = ko.computed(function () {
			if (self.order && self.order.commerceItems) {
				return self.order.commerceItems().length;
			}
		}, self);

		self.init();
    }
}