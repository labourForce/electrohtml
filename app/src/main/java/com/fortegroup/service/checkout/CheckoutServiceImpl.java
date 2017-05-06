package com.fortegroup.service.checkout;

import com.fortegroup.model.checkout.Request;
import com.fortegroup.model.checkout.Response;
import com.fortegroup.utill.PayPal;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CheckoutServiceImpl implements CheckoutService{

    @Override
    @Transactional
    public Response checkout(Request request) {
        Response response;
        try {
            String amount = request.getPay().get("amount");
            String cardName = request.getPay().get("name");
            String cardNumber = request.getPay().get("cardNumber");
            String cardValidationNumber = request.getPay().get("cvv");
            String expirationData = request.getPay().get("date");
            response = PayPal.getResponseCode(amount, cardName, cardNumber, cardValidationNumber, expirationData);
        } catch (Exception e) {
            response = new Response("Data is not valid", false);
        }
        return response;
    }

    @Override
    @Transactional
    public void makeOrder() {

    }

}
