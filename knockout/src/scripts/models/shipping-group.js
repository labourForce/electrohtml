import ko from 'knockout';
import AddressModel from './address';

export default class ShippingGroupModel {
    constructor(){
        this.shippingMethod = ko.observable();
		this.shippingAddress = new AddressModel();

		this.fill = (shippingGroup) => {
			if (shippingGroup) {
				this.shippingMethod(shippingGroup.shippingMethod);
				this.shippingAddress.fill(shippingGroup.shippingAddress);
			}
		}
    }
}