package com.fortegroup.controller.productdetails;

import com.fortegroup.model.productdetails.BaseSKU;
import com.fortegroup.model.productdetails.Product;
import com.fortegroup.service.productdetails.ProductDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@RestController
@RequestMapping(value = "/rest/product")
public class ProductDetailController {
    @Autowired
    private ProductDetailService productDetailService;

    @RequestMapping(value = "/getProduct",params = "id", method = RequestMethod.GET)
    public ResponseEntity<?> getDetails(@RequestParam("id") String id) {
        Pattern p = Pattern.compile("[\\d]+");
        Matcher m = p.matcher(id);
        if (m.matches()) {
            try {
                Product product = productDetailService.getProductById(Integer.parseInt(id));
                product.setBaseSKUs(null);
                product.setCategories(null);
                return ResponseEntity.ok(product);
            } catch (NullPointerException e) {
            }
        }
        return ResponseEntity.badRequest().header("NetworkError: 400 Bad Request - http://192.168.1.207:8181/rest/product/getProduct/" + id).body("400 Bad Request");
    }

    @RequestMapping(value = "/getAdditionalInfo",params = "id", method = RequestMethod.GET)
    public ResponseEntity<?> getAdditionalInfo(@RequestParam("id") String id) {
        Pattern p = Pattern.compile("[\\d]+");
        Matcher m = p.matcher(id);
        if (m.matches()) {
            try {
                Product product = productDetailService.getProductById(Integer.parseInt(id));
                Set<BaseSKU> SKUs = product.getBaseSKUs();
                return new ResponseEntity<>(SKUs, HttpStatus.OK);
            } catch (NullPointerException e) {
            }
        }
        return ResponseEntity.badRequest().header("NetworkError: 400 Bad Request - http://192.168.1.207:8181/rest/product/getProduct/" + id).body("400 Bad Request");
    }

}
