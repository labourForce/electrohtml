package com.fortegroup.controller.checkout;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fortegroup.model.checkInformation.RequestShippingBilling;
import com.fortegroup.model.checkInformation.ResponseError;
import com.fortegroup.model.checkInformation.ShippingBilling;
import com.fortegroup.service.checkInformation.ShippingBillingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

/**
 * Created by PC on 28.04.2017.
 */
@RestController
@RequestMapping(value = "/rest/checkout")
public class BillingShipping {
    @Autowired
    private ShippingBillingService shippingBillingService;

    @RequestMapping(value = "/billing", method = RequestMethod.POST)
    public ResponseEntity<?> getDetails(@RequestBody String body) {
        ObjectMapper mapper = new ObjectMapper();
        ResponseError name = null;
        try {
           RequestShippingBilling sb = mapper.readValue(body, RequestShippingBilling.class);
           name = shippingBillingService.validateInputData(sb);
        } catch (IOException e) {
            e.printStackTrace();
        }
        String jsonString = "";
        try {
            jsonString = mapper.writeValueAsString(name);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        //String s= "{\"access\":true}";
        return ResponseEntity.ok(jsonString);
    }
}
