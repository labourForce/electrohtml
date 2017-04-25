package com.fortegroup.controller.productdetails;

import com.fortegroup.model.productdetails.BaseSKU;
import com.fortegroup.model.productdetails.Product;
import com.fortegroup.service.productdetails.ProductDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping(value = "/rest/product")
public class ProductDetailController {
    @Autowired
    private ProductDetailService productDetailService;

    @RequestMapping(value = "/getProduct", params = "id", method = RequestMethod.GET)
    public ResponseEntity<?> getDetails(@RequestParam("id") long id) {
        Product product = productDetailService.getProductById(id);
        product.setBaseSKUs(null);
        return ResponseEntity.ok(product);
    }

    @RequestMapping(value = "/getAdditionalInfo", params = "id", method = RequestMethod.GET)
    public ResponseEntity<?> getAdditionalInfo(@RequestParam("id") long productId) {
        Product product = productDetailService.getProductById(productId);
        Set<BaseSKU> SKUs = product.getBaseSKUs();
        return new ResponseEntity<>(SKUs, HttpStatus.OK);
    }

}
