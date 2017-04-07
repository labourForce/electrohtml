import ko from 'knockout';

export default class ProductModel{
    constructor(){
        this.repositoryId = ko.observable('');
		this.childSKUs = ko.observableArray([]);
		this.ebsId = ko.observable('');
		this.marketingItemNumber = ko.observable('');
		this.available = ko.observable(true);
		this.displayName = ko.observable('');
		this.heading = ko.observable('');
		this.rating = ko.observable('');
		this.thumbnailImageUrl = ko.observable('');
		this.displayLinkInCart = ko.observable(true);

		this.currencyCode = ko.observable('');
		this.cartQuantityLimit = ko.observable('');
		this.quantityOptions = ko.observableArray([]);
		this.autoDeliveryQuantityOptions = ko.observableArray([]);
		this.isAutoDelivery = ko.observable(false); //is AD available
		this.defaultQtyOptionTab = ko.observable('oneTimePurchase');
		this.autoDeliveryDiscount = ko.observable('');
		
		this.defaultQtyOption = ko.observable('');
		this.defaultADQtyOption = ko.observable('');
		this.purchaseOfferId = ko.observable('');

		this.briefDescription = ko.observable('');
		this.longDescription = ko.observable('');
		this.ingredientsDosage = ko.observable('');
		this.scienceQuality = ko.observable('');
		this.relatedMediaContent = ko.observableArray([]);
		this.parentCategories = ko.observableArray([]);
		this.seoUrl = ko.observable('');
		this.mainImageAltText = ko.observable('');
		this.downloadableContent = ko.observable();
		this.availabilityMessage = ko.observable('');
		
		this.badge = ko.observable('');

		this.reviewCount = ko.observable(0);

		this.fill = (json) => {
			if (json) {
				this.repositoryId(json.repositoryId);
				if(json.childSKUs.length > 0){
					this.childSKUs(json.childSKUs);
				}
				this.ebsId(json.ebsId);
				this.marketingItemNumber(json.marketingItemNumber);
				this.available(json.availabilityMessage == '');
				this.availabilityMessage(json.availabilityMessage);
				this.displayName(json.displayName);
				this.heading(json.heading);
				this.rating(json.rating);
				this.thumbnailImageUrl(json.thumbnailImageUrl);
				this.displayLinkInCart(json.displayLinkInCart);
				if(json.isAutoDelivery){
					this.isAutoDelivery(json.isAutoDelivery);
					this.autoDeliveryDiscount(json.autoDeliveryDiscount);
				}
				this.defaultQtyOption(json.defaultQtyOption);
				this.defaultADQtyOption(json.defaultADQtyOption);
				this.currencyCode(json.currencyCode);
				this.cartQuantityLimit(json.cartQuantityLimit);
				this.quantityOptions(json.quantityOptions);
				if(json.autoDeliveryQuantityOptions.length > 0){
					this.autoDeliveryQuantityOptions(json.autoDeliveryQuantityOptions);
				} else {
					this.autoDeliveryQuantityOptions(json.quantityOptions);
				}
				if(json.downloadableContent){
					this.downloadableContent(json.downloadableContent.url);
				}
				this.briefDescription(json.briefDescription);
				this.longDescription(json.longDescription);
				this.ingredientsDosage(json.ingredientsDosage);
				this.scienceQuality(json.scienceQuality);
				this.addLargeImageToRelated(json);
				this.relatedMediaContent(json.relatedMediaContent);
				this.parentCategories(json.parentCategories);
				this.defaultQtyOptionTab(json.defaultQtyOptionTab);
				this.seoUrl(json.seoUrl ? json.seoUrl : "/pdp?productId=" + json.repositoryId);
				if(json.mainImageAltText){
					this.mainImageAltText = json.mainImageAltText;
				}				
				this.badge(json.badge ? json.badge : '');
			}
		};

		this.getFirstChildSkuId = ko.computed(() => {
			if(this.childSKUs().length > 0){
				return this.childSKUs()[0].id;
			}
		}, this);

		this.displayItemNumber = ko.computed(() => {
			if(this.marketingItemNumber())
				return "Item #" + this.marketingItemNumber();
			else if(this.ebsId())
				return "Item #" + this.ebsId();
		}, this);

		this.pdpLink = () => {
			var id = this.repositoryId();
			return "/pdp?productId=" + id;
		};

		this.largeImage = () => {
			var ebsId = this.ebsId();
			return ebsId ? "/assets/images/product-images/large/product-" + ebsId + ".jpg" : "/assets/images/product/product-image-not-available.jpg";
		};

		this.thumbnailImage = () => {
			var ebsId = this.ebsId();
			return ebsId ? "/assets/images/product-images/thumbnail/product-" + ebsId + ".jpg" : "/assets/images/product/product-image-not-available.jpg";
		};

		this.addLargeImageToRelated = (json) => {
			var url = this.largeImage();
			var description = '';
			if(json.mainImageAltText){
				description = json.mainImageAltText;
			}else if(json.displayName){
				description = json.displayName;
			}
			var image = { mediaType:"Image", url:url, description: description };
			json.relatedMediaContent.unshift(image);
		};

		this.isEmpty = () => {
			var result = false;
			if (this.repositoryId() && this.displayName() && this.childSKUs().length) {
				result = true;
			}
			return result;
		};
    }
}