package com.fortegroup.controller.checkout;

import com.fortegroup.model.checkout.Request;
import com.fortegroup.model.checkout.Response;
import com.fortegroup.utill.PayPal;
import com.google.gson.Gson;
import com.google.gson.internal.LinkedTreeMap;
import com.google.gson.reflect.TypeToken;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.TransformerException;
import java.io.IOException;
import java.util.Map;


@RestController
@RequestMapping(value = "/rest/checkout")
public class CheckoutController {

    @RequestMapping(value = "/payment", method = RequestMethod.POST)
    public ResponseEntity<?> getPaymentDetails(@RequestBody Request request) {

        String amount = request.getPay().get("amount");
        String cardName = request.getPay().get("name");
        String cardNumber = request.getPay().get("cardNumber");
        String cardValidationNumber = request.getPay().get("cvv");
        String expirationData = request.getPay().get("date");

        Response response = new Response("Unknown error");

        try {
            response = PayPal.getResponseCode(amount, cardName, cardNumber, cardValidationNumber, expirationData);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (TransformerException e) {
            e.printStackTrace();
        } catch (ParserConfigurationException e) {
            e.printStackTrace();
        }

        return ResponseEntity.ok(response);
    }
    
}
