package com.fortegroup.service.checkout;

import com.fortegroup.model.checkout.Request;
import com.fortegroup.model.checkout.Response;

public interface CheckoutService {

    public Response checkout(Request request);

}
