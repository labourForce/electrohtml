package com.fortegroup.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fortegroup.model.Product;
import com.fortegroup.service.ProductDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

/**
 * Created by PC on 21.04.2017.
 */
@RestController
@RequestMapping(value = "/rest/product")
public class ProductDetailController {
    @Autowired
    private ProductDetailService productDetailService;

    @RequestMapping(value = "/getProduct", method = RequestMethod.POST)
    public ResponseEntity<?> getDetails(@RequestBody String id) {
        ObjectMapper objectMapper= new ObjectMapper();
        Product pr = null;
        try {
            pr = objectMapper.readValue(id,Product.class);
        } catch (IOException e) {
            e.printStackTrace();
        }
        Product product = productDetailService.getProductById(pr.getId());
        return ResponseEntity.ok(product);
    }

//    @RequestMapping(value = "/getAdditionalInfo", method = RequestMethod.POST)
//    public ResponseEntity<?> getAdditionalInfo(@RequestBody String productId) {
//        ObjectMapper objectMapper= new ObjectMapper();
//        Product pr = null;
//        try {
//            pr = objectMapper.readValue(productId,Product.class);
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//        List<BaseSKU> SKUs = productDetailService.getBaseSKUsByProductId(pr.getId());
//        return ResponseEntity.ok(SKUs);
//    }
//    @RequestMapping(value = "/getBaseSKU", method = RequestMethod.POST)
//    public ResponseEntity<?> getBaseSKU(@RequestBody String productId) {
//        ObjectMapper objectMapper= new ObjectMapper();
//        BaseSKU bs = null;
//        try {
//            bs = objectMapper.readValue(productId,BaseSKU.class);
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//        BaseSKU baseSKU = productDetailService.getBaseSKUByProductId(bs.getProductId());
//        return ResponseEntity.ok(baseSKU);
//    }
}
