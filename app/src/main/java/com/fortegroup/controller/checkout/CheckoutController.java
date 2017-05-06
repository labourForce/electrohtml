package com.fortegroup.controller.checkout;

import com.fortegroup.model.checkout.Request;
import com.fortegroup.model.checkout.Response;
import com.fortegroup.service.checkout.CheckoutService;
import com.fortegroup.utill.PayPal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/rest/checkout")
public class CheckoutController {

    @Autowired
    private CheckoutService checkoutService;

    @RequestMapping(value = "/payment", method = RequestMethod.POST)
    public ResponseEntity<?> getPaymentDetails(@RequestBody Request request) {

        Response response = checkoutService.checkout(request);

        return ResponseEntity.ok(response);
    }

    @RequestMapping(value = "/confirm", method = RequestMethod.POST)
    public ResponseEntity<?> getConfirmationDetails(@RequestBody Request request) {

        Response response = checkoutService.checkout(request);
        if(!response.isGood()) {
            return ResponseEntity.ok(response);
        }



        return ResponseEntity.ok("");
    }
    
}
