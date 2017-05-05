package com.fortegroup.model.checkInformation;

/**
 * Created by PC on 04.05.2017.
 */
public class RequestShippingBilling {
    private ShippingBilling billing = new ShippingBilling();
    private ShippingBilling shipping = new ShippingBilling();

    public RequestShippingBilling() {
    }

    public ShippingBilling getBilling() {
        return billing;
    }

    public void setBilling(ShippingBilling billing) {
        this.billing = billing;
    }

    public ShippingBilling getShipping() {
        return shipping;
    }

    public void setShipping(ShippingBilling shipping) {
        this.shipping = shipping;
    }
}
