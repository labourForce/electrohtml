package com.fortegroup.elasticsearch.controller;

import com.fortegroup.elasticsearch.model.Products;
import com.fortegroup.elasticsearch.model.SearchRequest;
import com.fortegroup.elasticsearch.service.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Eugene Pankov
 */

@RestController
@RequestMapping("/rest/search/")
public class ElasticsearchController {

    @Autowired
    private ProductsService productsService;

    @RequestMapping("ById")
    public ResponseEntity<?> getProductsById(@RequestBody SearchRequest request){
        Page<Products> products = productsService.findById(request.getId(),new PageRequest(0,10));
        return ResponseEntity.ok(products.getContent());
    }

}
