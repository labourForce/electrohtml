package com.fortegroup.controller.checkout;

import com.fortegroup.model.checkout.Request;
import com.fortegroup.model.checkout.Response;
import com.fortegroup.utill.PayPal;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/rest/checkout")
public class CheckoutController {

    @RequestMapping(value = "/payment", method = RequestMethod.POST)
    public ResponseEntity<?> getPaymentDetails(@RequestBody Request request) {

        Response response = new Response("Unknown error");

        try {

            String amount = request.getPay().get("amount");
            String cardName = request.getPay().get("name");
            String cardNumber = request.getPay().get("cardNumber");
            String cardValidationNumber = request.getPay().get("cvv");
            String expirationData = request.getPay().get("date");
            response = PayPal.getResponseCode(amount, cardName, cardNumber, cardValidationNumber, expirationData);
        } catch (Exception e) {
            response = new Response("Data is not valid");
        }
        return ResponseEntity.ok(response);
    }
    
}
