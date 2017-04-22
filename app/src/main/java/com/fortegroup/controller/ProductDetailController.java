package com.fortegroup.controller;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.fortegroup.model.BaseSKU;
import com.fortegroup.model.Product;
import com.fortegroup.service.ProductDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
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
        return ResponseEntity.ok(product);
    }

    @RequestMapping(value = "/getAdditionalInfo", params = "id", method = RequestMethod.GET)
    public ResponseEntity<?> getAdditionalInfo(@RequestParam("id") long productId) {
        List<BaseSKU> SKUs = productDetailService.getBaseSKUsByProductId(productId);
        return ResponseEntity.ok(SKUs);
    }

    @RequestMapping(value = "/getBaseSKU", params = "id", method = RequestMethod.GET)
    public ResponseEntity<?> getBaseSKU(@RequestParam("id") long productId) {
        BaseSKU baseSKU = productDetailService.getBaseSKUByProductId(productId);
        return ResponseEntity.ok(baseSKU);
    }

}
