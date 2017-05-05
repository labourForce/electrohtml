package com.fortegroup.model.checkout;

import java.util.Map;

public class Request {

    private Map<String, String> billing;
    private Map<String, String> shipping;
    private Map<String, String> pay;

    public Request() {

    }

    public Request(Map<String, String> billing, Map<String, String> shipping, Map<String, String> pay) {
        this.billing = billing;
        this.shipping = shipping;
        this.pay = pay;
    }

    public Map<String, String> getBilling() {
        return billing;
    }

    public void setBilling(Map<String, String> billing) {
        this.billing = billing;
    }

    public Map<String, String> getShipping() {
        return shipping;
    }

    public void setShipping(Map<String, String> shipping) {
        this.shipping = shipping;
    }

    public Map<String, String> getPay() {
        return pay;
    }

    public void setPay(Map<String, String> pay) {
        this.pay = pay;
    }
}
