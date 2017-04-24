package com.fortegroup.controller;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.fortegroup.model.BaseSKU;
import com.fortegroup.model.Product;
import com.fortegroup.service.ProductDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@RestController
@RequestMapping(value = "/rest/product")
public class ProductDetailController {
    @Autowired
    private ProductDetailService productDetailService;

    @RequestMapping(value = "/getProduct", params = "id", method = RequestMethod.GET)
    public ResponseEntity<?> getDetails(@RequestParam("id") long id) {
        Product product = productDetailService.getProductById(id);
        System.out.println(product.getBaseSKUs());
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
