package com.fortegroup.controller.checkout;

import org.springframework.http.ResponseEntity;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
=======
import org.springframework.web.bind.annotation.*;
>>>>>>> 66c7228fb969db16dbc0b74ba6e75f4f017dc836

@RestController
@RequestMapping(value = "/rest/checkout")
public class CheckoutController {

    @RequestMapping(value = "/payment", method = RequestMethod.POST)
    public ResponseEntity<?> getDetails(@RequestBody String body) {



        String s= "{\"access\":true}";
        return ResponseEntity.ok(s);
    }
    
}
