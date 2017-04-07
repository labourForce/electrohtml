import ko from 'knockout';
import $ from 'jquery';

export default class SiteModel{
    constructor(){
        this.id = ko.observable();

		this.pdpDefaultTab = ko.observable();
		this.pdpTabsOrder = ko.observable();

		this.cartQuantityLimit = ko.observable();
		this.payPalEnabled = ko.observable(true);
		this.cvvValidationEnabled = ko.observable(true);
		this.allowChangeAdOnOrderReview = ko.observable(true);
		this.reviewBvApiUrl = ko.observable('');
		this.bvStatiscticsUrl = ko.observable('');
		this.symantecVerisignTag = ko.observable('');
		this.brandName = ko.observable('');
		this.dynamicForms = ko.observable([]);

		this.fill = (json) => {
			if (json) {
				this.id(json.id);
				this.pdpDefaultTab(json.pdpDefaultTab);
				this.pdpTabsOrder(json.pdpTabsOrder);
				this.cartQuantityLimit(json.cartQuantityLimit);
				this.payPalEnabled(json.payPalEnabled);
				this.cvvValidationEnabled(json.cvvValidationEnabled);
				this.allowChangeAdOnOrderReview(json.allowChangeAdOnOrderReview);
				this.reviewBvApiUrl(json.reviewBvApiUrl);
				this.bvStatiscticsUrl(json.bvStatiscticsUrl);
				this.symantecVerisignTag(json.symantecVerisignTag);
				this.brandName(json.brandName);
				this.dynamicForms(json.dynamicForms);
			}
		};

		this.getSite = () => {
			$.ajax('/rest/model/hd/site/SiteInfoActor/siteInfo', {
				type : 'get',
				contentType : 'application/json',
				success : (data) => {
					var siteInfo = data.siteInfo;
					if (siteInfo) {
						this.fill(siteInfo);
					}
				}
			});
		};

		this.isEmpty = ko.pureComputed(() => {
			return !this.id();
		}, this);
    }
}