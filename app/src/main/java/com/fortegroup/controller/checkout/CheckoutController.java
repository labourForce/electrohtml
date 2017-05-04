package com.fortegroup.controller.checkout;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/rest/checkout")
public class CheckoutController {

    @RequestMapping(value = "/payment", method = RequestMethod.POST)
    public ResponseEntity<?> getDetails(@RequestBody String body) {



        String s= "{\"access\":true}";
        return ResponseEntity.ok(s);
    }
    
}
