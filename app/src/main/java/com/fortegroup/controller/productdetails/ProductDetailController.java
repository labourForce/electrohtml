package com.fortegroup.controller.productdetails;

import com.fortegroup.model.dto.*;
import com.fortegroup.model.productdetails.*;
import com.fortegroup.service.productdetails.ProductDetailService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/rest/product")
public class ProductDetailController {
    @Autowired
    private ProductDetailService productDetailService;

    @RequestMapping(value = "/getProduct", params = "id", method = RequestMethod.GET)
    public ResponseEntity<?> getDetails(@RequestParam("id") String id) {
        Pattern p = Pattern.compile("[\\d]+");
        Matcher m = p.matcher(id);
        if (m.matches()) {
            try {
                ProductDTO product = productDetailService.getProductById(Integer.parseInt(id));
                return ResponseEntity.ok(product);
            } catch (NullPointerException e) {
            }
        }
        return ResponseEntity.badRequest().header("NetworkError: 400 Bad Request - http://192.168.1.207:8181/rest/product/getProduct/" + id).body("400 Bad Request");
    }

    @RequestMapping(value = "/getAdditionalInfo", params = "id", method = RequestMethod.GET)
    public ResponseEntity<?> getAdditionalInfo(@RequestParam("id") String id) {
        Pattern p = Pattern.compile("[\\d]+");
        Matcher m = p.matcher(id);
        if (m.matches()) {
            try {
                ProductDTO product = productDetailService.getProductById(Integer.parseInt(id));
                Set<BaseSKUDTO> SKUs = product.getBaseSKUDTOS();
                return  ResponseEntity.ok(SKUs);
            } catch (NullPointerException e) {}
        }
        return ResponseEntity.badRequest().header("NetworkError: 400 Bad Request - http://192.168.1.207:8181/rest/product/getProduct/" + id).body("400 Bad Request");
    }
}
