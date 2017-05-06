package com.fortegroup.controller.checkout;

import com.fortegroup.model.checkout.ShippingBilling;
import com.fortegroup.model.checkout.Request;
import com.fortegroup.service.checkInformation.ShippingBillingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/rest/checkout")
public class BillingShipping {
    @Autowired
    private ShippingBillingService shippingBillingService;

    @RequestMapping(value = "/billing", method = RequestMethod.POST)
    public ResponseEntity<?> getDetails(@RequestBody Request request) {
        ShippingBilling sb = new ShippingBilling();

        sb.setLastName(request.getBilling().get("firstName"));
        sb.setFirstName(request.getBilling().get("lastName"));
        sb.setCompanyName(request.getBilling().get("companyName"));
        sb.setEmail(request.getBilling().get("email"));
        sb.setPhone(request.getBilling().get("phone"));
        sb.setCountry(request.getBilling().get("country"));
        sb.setAddress(request.getBilling().get("address"));
        sb.setZip(request.getBilling().get("zip"));
        sb.setCity(request.getBilling().get("city"));

        String error = "";
        if(shippingBillingService.validateInputData(sb).isEmpty()){
            error = error +"false";
        }else{
            error = error + "Errors:{";
            error = error + shippingBillingService.validateInputData(sb);
            error = error + "}";
        }

        return ResponseEntity.ok(error);
    }
}