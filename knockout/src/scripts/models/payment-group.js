import ko from 'knockout';
import AddressModel from './address';
import CreditCardModel from './credit-card';

export default class PaymentGroupModel {
    constructor(){
        this.paymentMethod = ko.observable();
		this.billingAddress = new AddressModel();

		// if applicable
		this.creditCard = new CreditCardModel();
		this.token = "";

		this.fill = (paymentGroup) => {
			if (paymentGroup) {
				var paymentMethod = paymentGroup.paymentMethod;
				this.paymentMethod(paymentMethod);
				this.billingAddress.fill(paymentGroup.billingAddress);
				if (paymentMethod == "creditCard") {
					if (this.token) {
						paymentGroup.token = this.token;
					}
					this.creditCard.fill(paymentGroup);
				}
			}
		};

		this.paymentTypeDisplay = ko.pureComputed(() => {
			if (this.paymentMethod() == 'creditCard') {
				return this.creditCard.printCreditCard();
			} else {
				return this.paymentMethod();
			}
		}, this);
    }
}