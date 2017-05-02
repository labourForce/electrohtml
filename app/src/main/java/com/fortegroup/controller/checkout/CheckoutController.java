package com.fortegroup.controller.checkout;

import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fortegroup.model.checkInformation.ResponseError;
import com.fortegroup.model.checkInformation.ShippingBilling;
import com.fortegroup.utill.PropetryFileGenerator;
import com.litle.sdk.LitleOnline;
import com.litle.sdk.generate.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Properties;

@RestController
@RequestMapping(value = "/rest/checkout")
public class CheckoutController {

    @RequestMapping(value = "/payment", method = RequestMethod.POST)
    public ResponseEntity<?> getDetails(@RequestBody String body) {

        Authorization auth = new Authorization();
        auth.setOrderId("1");
        auth.setAmount(10010L);
        auth.setOrderSource(OrderSourceType.ECOMMERCE);
        Contact billToAddress = new Contact();
        billToAddress.setName("John Smith");
        billToAddress.setAddressLine1("1 Main St.");
        billToAddress.setCity("Burlington");
        billToAddress.setState("MA");
        billToAddress.setCountry(CountryTypeEnum.US);
        billToAddress.setZip("01803-3747");
        auth.setBillToAddress(billToAddress);
        CardType card = new CardType();
        card.setNumber("375001010000003");
        card.setExpDate("0112");
        card.setCardValidationNum("349");
        card.setType(MethodOfPaymentTypeEnum.AX);
        auth.setCard(card);

        AuthorizationResponse response = new LitleOnline(PropetryFileGenerator.generate()).authorize(auth);

        System.out.println("_____________________________________");
        System.out.println("Response: " + response.getResponse());
        System.out.println("Message: " + response.getMessage());
        System.out.println("Litle Transaction ID: " + response.getLitleTxnId());
        System.out.println("_____________________________________");


        return ResponseEntity.ok("");
    }
    
}
