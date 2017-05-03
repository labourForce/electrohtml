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



        String s= "{\"access\":true}";
        return ResponseEntity.ok(s);
    }
    
}
