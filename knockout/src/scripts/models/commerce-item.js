import ko from 'knockout';
import $ from 'jquery';
import ProductModel from './product';

export default class CommerceItemModel{
    constructor(){
        this.repositoryId = ko.observable('');
		this.title = ko.observable('');
		this.listPrice = ko.observable('');
		this.image = ko.observable('');
		this.currentPrice = ko.observable('');
		this.priceForOne = ko.observable('');
		this.prodId = ko.observable('');
		this.skuId = ko.observable('');
		this.quantity = ko.observable('');
		this.total = ko.observable('');
		this.totalRetailPrice = ko.observable('');
		this.rawTotalPrice = ko.observable();
		this.status = ko.observable('');
		this.trackingNumber = ko.observable('');
		this.mainQuantity = ko.observable('');
		this.cartQuantityLimitFromSite = ko.observable('');
		this.autoDelivery = ko.observable('');
		this.frequency = ko.observable('');
		this.visible = ko.observable('');

		this.gwp = ko.observable();
		this.discountedQuantity = ko.observable();
		this.product = new ProductModel();
		
		this.productCanonicalUrl = ko.observable('');
		this.dataId = ko.observable('');
		
		//visibility check-box = available item to reorder
		this.availableToReorder = ko.observable(true);
		//item`s checkbox 
		this.isSelectToReorder = ko.observable(false);

		this.selected = ko.observable('');
		this.selectedOption = ko.observable('');
		this.qtyOptions = ko.observableArray([]);
		this.qtyOptionsAD = ko.observableArray([]);
		this.qtyOptionsDisplay = ko.observableArray([]);

		this.isDiscountedPrice = ko.observable(false);
		this.itemIsFree = ko.observable(false);

		this.fill = (ci, addInfo) => {
			this.repositoryId(ci.id);
			this.title(ci.productDisplayName);
			this.prodId(ci.productId);
			this.visible(ci.visible);
			this.skuId(ci.catalogRefId);
			this.quantity(ci.quantity);
			if(ci.priceInfo){
				this.currentPrice(ci.priceInfo.listPrice);
				this.total(ci.priceInfo.amount);
			}
			this.rawTotalPrice('');
			this.status(ci.status);
			this.trackingNumber(ci.trackingNumber);
			this.mainQuantity(ci.mainQuantity);
			this.autoDelivery(ci.autoDelivery);
			this.frequency(ci.frequency);
			this.gwp(ci.gwp);
			this.discountedQuantity(ci.discountedQuantity);
			this.fillProduct(ci);
			this.productCanonicalUrl(ci.productCanonicalUrl);
			this.dataId('pdp?productId=' + this.prodId());
			this.image(ci.id ? "/assets/images/product-images/small/product-" + ci.id + ".jpg" : "/assets/images/product/product-image-not-available.jpg");
			this.availableToReorder(ci.availableToReorder);

			if (addInfo) {
				var productQuantityOptions = addInfo[this.prodId()];
				this.qtyOptions(productQuantityOptions.product.quantityOptions);
				this.qtyOptionsAD(productQuantityOptions.product.autoDeliveryQuantityOptions);
				if (this.autoDelivery()) {
					this.qtyOptionsDisplay(this.qtyOptionsAD());
				} else {
					this.qtyOptionsDisplay(this.qtyOptions());
				}
			}
		};

		this.fillProduct = (ci) => {
			if (ci.auxiliaryData){
				var product = ci.auxiliaryData.productRef;
				if (product) {
					this.product.fill(product);
				}
			}
		};

		this.fillPrices = (priceDisplayBean) => {
			this.listPrice(priceDisplayBean.nowPrice);
			this.priceForOne(priceDisplayBean.wasPrice);
			this.isDiscountedPrice(priceDisplayBean.discounted);
			if (priceDisplayBean.freeItem) {
				this.itemIsFree(true);
			}
			this.rawTotalPrice(priceDisplayBean.totalPrice);
			this.totalRetailPrice(priceDisplayBean.totalRetailPrice);
		};

		this.showUpgradeToAD = () => {
			var ad = this.autoDelivery();
			var productAd = this.product.isAutoDelivery;
			return !ad && productAd;
		};

		this.updateOrderWithNewCommerceItemAmount = (callbackFunction) => {
			var quantity = this.selectedOption.quantity;
			var mainQuantity = this.selectedOption.mainQuantity;
			var discountedQuantity = this.selectedOption.discountedQuantity;

			var data = {
				"catalogRefId": this.product.getFirstChildSkuId(),
				"productId": this.product.repositoryId(),
				"quantity" : quantity,
				"mainQuantity" : mainQuantity,
				"discountedQuantity" : discountedQuantity,
				"autoDelivery" : this.autoDelivery()
			};
			console.info("Update item data", data);
			$.ajax("/rest/model/atg/commerce/order/purchase/CartModifierActor/updateItem", {
				type : "post",
				contentType : "application/json",
				data : ko.toJSON(data),
				success : (returnedData) => {
					if (callbackFunction && (typeof callbackFunction === 'function')) {
						callbackFunction();
					}
				}
			});
		};

		this.displayQty = ko.computed(() => {
			var discQty = this.quantity() - this.mainQuantity();
			if (discQty > 0) {
				return this.mainQuantity() + " + " + discQty;
			} else {
				return this.quantity;
			}
		});

		this.printTrackingNumber = ko.pureComputed(() => {
			var trackingNumber = this.trackingNumber();
			if (trackingNumber) {
				return "Tracking: " + trackingNumber;
			}
		}, this);
    }

    dispose() {
		//this.quantityOptions.dispose();
		this.isDiscountedPrice.dispose();
	}
}