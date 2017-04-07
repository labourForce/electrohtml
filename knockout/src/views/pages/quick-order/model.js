import ko from 'knockout';
import $ from 'jquery';
import {goToView} from 'common';

export default class QuickOrderVM{
    constructor(state){
        var self = this;
		self.state = state;

		self.quickOrderItems = ko.observableArray([]);
		self.serviceCode = ko.observable('');
		self.errorMessage = ko.observable('');
		self.successMessage = ko.observable('');
		self.warningMessage = ko.observable('');
		self.isCartUpgradeChange = ko.observable('');
		self.cartUpgradeMessage = ko.observable('');

		var QuickOrderItemModel = function(item){
			var self = this;
			self.itemNumber = item || ko.observable('');
			self.autoDeliveryChecked = item || ko.observable(false);
			self.autoDeliveryAvailable = item || ko.observable(false);
			self.quantityDisplayNames = item || ko.observableArray([]);
			self.quantityOptions = item || ko.observableArray([]);
			self.autoDeliveryQuantityOptions = item || ko.observableArray([]);
			self.lastNumberValue = ko.observable('');
			self.skuId = ko.observable('');
			self.productId = ko.observable('');
			self.selected = ko.observable('');
			self.errorMessage = ko.observable('');
			self.quantity = item || ko.observable('');
			self.selectedOption = item || ko.observable('');
			self.isItemUpgraded = item || ko.observable('');
		};

		self.headContent = ko.observableArray();
		self.bottomContent = ko.observableArray();

		$.getJSON("/rest/model/hd/content/ContentActor/getContentItem?contentCollection=/content/Web/QuickOrder/Promo", function(returnedData) {
			if ( returnedData && returnedData.contentItem && returnedData.contentItem.contents && returnedData.contentItem.contents.length > 0) {
				var content = returnedData.contentItem.contents[0];
				self.headContent(content.headContent);
				self.bottomContent(content.bottomContent)
			}
		});

		self.addRow = function(){
			self.quickOrderItems.push(new QuickOrderItemModel());
		};

		self.quickOrderItems.push(new QuickOrderItemModel(null));

		self.checkNumberOfItem = function(element, event){
			if (element.lastNumberValue() !== element.itemNumber()) {
				element.lastNumberValue(element.itemNumber());
				setTimeout(function () {
					if (element.lastNumberValue() === element.itemNumber()){
						self.getItemByNumber(element);
					}
				}, 1000);
			}
		};

		self.processAutoDelivery = function(element, event){
			if (element.autoDeliveryChecked()) {
				self.processADQuantityOptions(element);
			} else {
				self.processQuantityOptions(element);
			}
			return true;
		};

		self.processQuantityOptions = function(element) {
			var option = element.selectedOption();
			var options = element.quantityOptions();
			var quantityNames = [];
			var isSelected = false;
			element.isItemUpgraded(false);

			for (var i = 0; i < options.length; i++){
				if (!isSelected && option != null && option != "") {
					if (options[i].quantity >= option.quantity && options[i].isOriginal) {
						element.quantity(options[i].quantity);
						element.selectedOption(options[i]);
						isSelected = true;
					}
				}
				quantityNames.push(options[i]);
			}
			if (!isSelected) {
				option = options[options.length - 1];
				element.quantity(option.quantity);
				element.selectedOption(option);
			}
			element.quantityDisplayNames(quantityNames);
		};

		self.processADQuantityOptions = function(element) {
			var option = element.selectedOption();
			var options = element.autoDeliveryQuantityOptions();
			var quantityNames = [];
			var isSelected = false;

			for (var i = 0; i < options.length; i++){
				if (!isSelected && option != null && option != "") {
					if (options[i].quantity >= option.quantity && options[i].isOriginal) {
						element.quantity(options[i].quantity);
						element.selectedOption(options[i]);
						isSelected = true;
						if (options[i].mainQuantity > option.mainQuantity) {
							element.isItemUpgraded(true);
						}
					}
				}
				quantityNames.push(options[i]);
			}
			if (!isSelected) {
				option = options[options.length - 1];
				element.quantity(option.quantity);
				element.selectedOption(option);
				element.isItemUpgraded(true);
			}
			element.quantityDisplayNames(quantityNames);
		};

		self.getItemByNumber = function(element, callbackFunction) {
			var data = {
				"number": element.itemNumber()
			};
			$.ajax("/rest/model/hd/commerce/price/ProductInfoActor/productQuickInfo", {
				data: ko.toJSON(data),
				type : "post",
				contentType : "application/json",
				success : function (data) {
					if (data.productInfo != null) {
						var quantityNames = [];
						for (var i = 0; i < data.productInfo.product.quantityOptions.length; i++) {
							quantityNames.push(data.productInfo.product.quantityOptions[i]);
						}
						element.quantityDisplayNames(quantityNames);
						element.quantityOptions(data.productInfo.product.quantityOptions);
						element.autoDeliveryQuantityOptions(data.productInfo.product.autoDeliveryQuantityOptions);
						element.skuId(data.productInfo.skuId);
						element.productId(data.productInfo.productId);
						element.autoDeliveryAvailable(data.productInfo.autoDeliveryAvailable && quantityNames.length > 0);
						if (data.productInfo.newNumber){
							element.errorMessage(data.productInfo.infoMessage);
							element.itemNumber(data.productInfo.newNumber);
						} else {
							element.errorMessage('');
						}
						element.selectedOption(element.quantityOptions()[0]);

						if (callbackFunction && (typeof callbackFunction === 'function')) {
							callbackFunction();
						}
					} else {
						self.eraseElement(element);
						if (data.errorMessage && element.itemNumber() != ''){
							element.errorMessage(data.errorMessage.localizedMessage);
						}
					}
				},
				error: function(data){
					self.eraseElement(element);
					console.log("error!!!!");
				}
			});
		};

		self.eraseElement = function(element){
			element.quantityDisplayNames([]);
			element.quantityOptions([]);
			element.autoDeliveryQuantityOptions([]);
			element.autoDeliveryChecked(false);
			element.autoDeliveryAvailable(false);
			element.skuId('');
			element.productId('');
			element.errorMessage('');
		};

		self.addMultipleToCart = function() {
			var element;

			$.each(self.quickOrderItems(), function( index, item ) {
				if (item.quantity() == undefined && item.itemNumber() != '') {
					element = item;
				}
			});

			if (element == undefined) {
				self.addItemsToCart();
			} else {
				self.getItemByNumber(element, self.addItemsToCart);
			}
		};

		self.addItemsToCart = function(){
			var data = {};
			data.serviceCode = self.serviceCode();
			data.items = [];
			data.itemsEditValue = {};

			for (var i = 0; i < self.quickOrderItems().length; i++) {
				var option = self.getSelectedQtyOption(self.quickOrderItems()[i]);
				if (option != null){
					var mainQuantity = option.mainQuantity.toString();
					var discountedQuantity = (option.quantity - option.mainQuantity).toString();
					var autoDelivery = self.quickOrderItems()[i].autoDeliveryChecked().toString();
					var productId = self.quickOrderItems()[i].productId();

					data.items.push({
						"catalogRefId": self.quickOrderItems()[i].skuId(),
						"productId": productId,
						"quantity" : option.quantity
					});

					data.itemsEditValue[productId] = {
						"mainQuantity" : mainQuantity,
						"discountedQuantity" : discountedQuantity,
						"autoDelivery" : autoDelivery
					};

					if (self.quickOrderItems()[i].isItemUpgraded()) {
						self.isCartUpgradeChange(true);
					}
				}
			}
			data.addItemCount = data.items.length;
			data = ko.toJSON(data);

			if (self.isCartUpgradeChange()) {
				$.ajax("/rest/model/hd/service/MessageUtilsActor/lookupMessage?messageCode=CART_UPGRADE_CHANGE", {
					type: "get",
					contentType: "application/json",
					success: function (data) {
						self.cartUpgradeMessage(data.messageText);
					},
					error: function (data) {
						console.log("Look up message droplet error");
					}
				});
			}

			$.ajax("/rest/model/atg/commerce/order/purchase/CartModifierActor/addMultipleItemsToOrder", {
				type : "post",
				contentType : "application/json",
				data: data,
				success : function (data) {
					if (data.formError){
						self.errorMessage(data.formExceptions[0].localizedMessage);
						self.successMessage('');
					} else {
						self.errorMessage('');
						//self.successMessage(data.responseDetails.info);
						self.state.app.order.getOrder();
						setTimeout(function(){
							self.state.app.order.addedToCartMessage(self.cartUpgradeMessage());
							var navData = getNavAndQuery('cart');
							self.state.app.router.notify(navData.nav, navData.query, '/cart');
						}, 500);
					}
				},
				error: function(data){
				}
			});
		};

		self.getSelectedQtyOption = function(item){
			var options = [];
			if (item.autoDeliveryChecked()){
				options = item.autoDeliveryQuantityOptions();
			} else {
				options = item.quantityOptions();
			}

			if (options.length > 0) {
				var selectedOption = item.selected()[0];
				var lastOption = options[options.length - 1];
				if (selectedOption > lastOption.quantity) {
					return lastOption;
				}
				for (var i = 0; i < options.length; i++){
					var optionValue = options[i].mainQuantity + options[i].discountedQuantity;
					if (optionValue >= selectedOption){
						return options[i];
					}
				}
			}

			return null;
		};

		self.saveOption = function (element, event) {
			var option = self.getSelectedQtyOption(element);
			element.selectedOption(option);
		};

		self.showModal = function(element){
			document.getElementById('howToUseQuickOrderModal').classList.remove('hidden');

			var howToUseQuickOrderModalWidth = '600';
			// var howToUseQuickOrderModalHeight = '450';

			if ($(window).outerWidth() < 500) {
				howToUseQuickOrderModalWidth = '320';
				// howToUseQuickOrderModalHeight = '350';
			}

			$("#howToUseQuickOrderModal").dialog({
				resizable: false,
				modal: true,
				show: 'fade',
				hide: 'fade',
				width: howToUseQuickOrderModalWidth,
				// height: howToUseQuickOrderModalHeight,

				open: function( event, ui ) {
					console.log("quickorder modal opened");
				}
			});
		}

		self.gotoView = function(obj,e) {
			goToView(e, self.state);
		}
    }
}