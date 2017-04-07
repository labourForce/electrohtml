import ko from 'knockout';
import $ from 'jquery';
import CreditCardModel from './credit-card';
import AddressModel from './address';

export default class ProfileModel {
    constructor(){
        this.firstName = ko.observable('');
		this.lastName = ko.observable('');
		this.email = ko.observable('');
		this.id = ko.observable('');
		this.securityStatus = ko.observable(1);
		this.nickname = ko.observable('');
		this.phoneNumber = ko.observable('');
		this.hasCsrRole = ko.observable(false);
		this.impersonatedByCsr = ko.observable('');
		this.registeredOnCheckout = ko.observable(false);
		this.loggedInOnCheckout = ko.observable(false);

		this.defaultCreditCard = new CreditCardModel();
		this.shippingAddress = new AddressModel();
		this.homeAddress = new AddressModel();

		this.userAcceptConditions = ko.observable(false);

		this.fullName = ko.computed(() => {
			return this.firstName() + " " + this.lastName();
		}, this);

		this.loggedin = ko.computed(() => {
			return this.securityStatus() > 1;
		}, this);

		this.isImpersonationMode = ko.computed(() => {
			if(this.impersonatedByCsr().length > 0){
				return true;
			}else{
				return false;
			}
		}, this);
        
		this.isCSR = ko.computed(() => {
			if(this.hasCsrRole() || this.isImpersonationMode()){
				return true;
			}else{
				return false;
			}
		}, this);

		this.fill = (profile) => {
			if (profile) {
				if(profile.id){
					this.id(profile.id);
				}
				this.firstName(profile.firstName);
				this.lastName(profile.lastName);
				if(profile.nickname){
					this.nickname(profile.nickname);
				}
				this.email(profile.email);
				if(profile.phoneNumber){
					this.phoneNumber(profile.phoneNumber);
				}
				this.securityStatus(profile.securityStatus);
				if(profile.hasCsrRole != null){
					this.hasCsrRole(profile.hasCsrRole);
				}
				if(profile.impersonatedByCsr != null){
					this.impersonatedByCsr(profile.impersonatedByCsr);
				}else{
					this.impersonatedByCsr('');
				}
				this.defaultCreditCard.fill(profile.defaultCreditCard);
				this.shippingAddress.fill(profile.shippingAddress);
				this.homeAddress.fill(profile.homeAddress);
				this.userAcceptConditions(profile.userAcceptConditions);
			}
		};

		this.getProfile = (callbackFunction) => {
			$.ajax('/rest/model/atg/userprofiling/ProfileActor/summary', {
				type : 'post',
				contentType : 'application/json',
				success : (data) => {
					var profile = data.profile;
					if (profile) {
						this.fill(profile);
					}
					this.isImpersonationMode();
					this.isCSR();
					if (callbackFunction && (typeof callbackFunction === 'function')) {
						callbackFunction();
					}
				}
			});
		};

		this.ensureNotAvailable = (value) => {
			return value ? value : "N/A";
		};
    }
}