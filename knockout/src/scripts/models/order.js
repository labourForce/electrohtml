import ko from 'knockout';
import $ from 'jquery';
import ShippingGroupModel from './shipping-group';
import PaymentGroupModel from './payment-group';
import CommerceItemModel from './commerce-item';

export default class OrderModel {
    constructor(){
        this.orderNumber = ko.observable('');
		this.orderId = ko.observable('');
		this.ebsId = ko.observable('');
		this.autoDelivery = ko.observable('');
		this.status = ko.observable('');
		this.trackingNumber = ko.observable('');

		this.commerceItems = ko.observableArray([]);
		this.firstProdId = ko.pureComputed(() => {
			return this.commerceItems().length ? this.commerceItems()[0].prodId() : null;
		});

		this.shippingGroup = new ShippingGroupModel();
		this.paymentGroup = new PaymentGroupModel();

		this.shippingAddress = {};
		this.shippingMethod = ko.observable('');

		this.addedToCartMessage = ko.observable('');

		// totals
		this.total = ko.observable();
		this.rawSubtotal = ko.observable();
		this.shipping = ko.observable();
		this.rawShipping = ko.observable(0);
		this.tax = ko.observable();

		this.retailPrice = ko.observable();
		this.quantitySavings = ko.observable(0);
		this.adSavings = ko.observable(0);
		this.orderPromoSavings = ko.observable(0);
		this.itemsPromoSavings = ko.observable(0);
		this.shippingPromoSavings = ko.observable(0);
		this.salePriceSavings = ko.observable(0);
		this.rawTotal = ko.observable();
		this.subtotal = ko.observable();

		this.orderCoupons = ko.observableArray([]);
		this.itemsCoupons = ko.observableArray([]);
		this.shippingCoupons = ko.observableArray([]);
		this.orderPromotions = ko.observableArray([]);
		this.itemsPromotions = ko.observableArray([]);
		this.shippingPromotions = ko.observableArray([]);

		this.totalSavingsAmount = ko.observable(0);
		this.totalSavingsPercentage = ko.observable(0);

		this.getOrder = (callbackFunction) => {
			$.ajaxSetup({ cache: false });
			var date = new Date();
			$.ajax('/rest/model/atg/commerce/ShoppingCartActor/fullCartInfo?nocache=' + date.getTime(), {
				type: 'get',
				contentType: 'application/json',
				success: (data) =>  {
					this.fill(data.order, data.addInfo);
					this.fillCommerceItemsPrices(data.commerceItemsPrices);
					this.fillOrderTotal(data.orderTotal);
					if (callbackFunction && (typeof callbackFunction === 'function')) {
						callbackFunction();
					}
				}
			});
		};

		this.fill = (order, addInfo) => {
			if (order) {
				this.orderId(order.id);
				this.orderNumber(order.orderNumber);
				if (order.ebsId) {
					this.ebsId(order.ebsId);
				}
				this.autoDelivery(order.autoDelivery);
				this.status(order.status);
				this.trackingNumber(order.trackingNumber);
				this.fillPriceInfo(order);
				this.fillCommerceItems(order, addInfo);
				this.shippingGroup.fill(order.shippingGroup);
				if (order.token) {
					this.paymentGroup.token = order.token;
				}
				this.paymentGroup.fill(order.paymentGroup);
				this.shippingAddress = order.shippingAddress;
				this.shippingMethod(order.shippingMethod);
			}
		};

		this.fillPriceInfo = (order) => {
			var priceInfo = order.priceInfo;
			if (priceInfo) {
				this.total(priceInfo.total);
				this.rawSubtotal(priceInfo.rawSubtotal * 1);
				this.tax(priceInfo.tax);
				this.shipping(priceInfo.shipping);
			}
		};

		this.fillOrderTotal = (orderTotal) => {
			if (orderTotal) {
				this.retailPrice(orderTotal.retailPrice);
				this.quantitySavings(orderTotal.quantitySavings);
				this.adSavings(orderTotal.adSavings);
				this.rawTotal(orderTotal.rawTotal);
				this.fillCouponsAndPromotions(orderTotal);
				this.subtotal(orderTotal.subtotal);
				this.rawShipping(orderTotal.rawShipping);
				this.totalSavingsAmount(orderTotal.totalSavingsAmount);
				this.totalSavingsPercentage(orderTotal.totalSavingsPercentage);
				this.salePriceSavings(orderTotal.salePriceSavings);
			}
		};

		this.fillCouponsAndPromotions = (orderTotal) => {
			var couponsAndPromotions = orderTotal.couponsAndPromotions;
			if (couponsAndPromotions) {
				this.orderCoupons(couponsAndPromotions.orderCoupons);
				this.orderPromotions(couponsAndPromotions.orderPromotions);
				this.itemsCoupons(couponsAndPromotions.itemsCoupons);
				this.itemsPromotions(couponsAndPromotions.itemsPromotions);
				this.shippingCoupons(couponsAndPromotions.shippingCoupons);
				this.shippingPromotions(couponsAndPromotions.shippingPromotions);
			}
			this.orderPromoSavings(orderTotal.orderPromoSavings);
			this.itemsPromoSavings(orderTotal.itemsPromoSavings);
			this.shippingPromoSavings(orderTotal.shippingPromoSavings);
		};

		this.fillCommerceItems = (order, addInfo) => {
			var commerceItems = order.commerceItems;
			var commerceItemsArray = [];
			if (commerceItems) {
				$.each(commerceItems, function (index, value) {
					var commerceItem = new CommerceItemModel();
					commerceItem.fill(value, addInfo);
					if (order.cartQuantityLimit) {
						commerceItem.cartQuantityLimitFromSite(order.cartQuantityLimit);
					}
					commerceItemsArray.push(commerceItem);
				});
				this.commerceItems(commerceItemsArray);
			} else {
				this.commerceItems([]);
			}
		};

		this.fillCommerceItemsPrices = (commerceItemsPrices) => {
			if (commerceItemsPrices && this.commerceItems) {
				ko.utils.arrayForEach(this.commerceItems(), function (commerceItem) {
					var commerceItemId = commerceItem.repositoryId();
					var commerceItemPrices = commerceItemsPrices[commerceItemId];
					commerceItem.fillPrices(commerceItemPrices);
				});
			}
		};

		this.orderNumberToDisplay = ko.computed(() => {
				if (this.ebsId()) {
					return this.ebsId();
				} else {
					return this.orderId();
				}
			}
		);

		this.printTrackingNumber = ko.pureComputed(() => {
			var trackingNumber = this.trackingNumber();
			if (trackingNumber) {
				return "Tracking: " + trackingNumber;
			}
		}, this);
    }
}