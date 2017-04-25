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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Eugene Pankov
 */

@RestController
@RequestMapping("/rest/search")
public class ElasticsearchController {

    @Autowired
    private ProductsService productsService;

    @RequestMapping(value = "/category", method = RequestMethod.POST)
    public ResponseEntity<?> getProductsById(@RequestBody SearchRequest request){

        String searchKey = request.getSearchKey().toLowerCase();
        String category = request.getCategory();

        Page<Products> products = productsService.findById(searchKey, category, new PageRequest(0, 10));

        if (products.getContent().isEmpty()) {
            products = productsService.findByDisplayName(searchKey, category, new PageRequest(0, 10));

            if (products.getContent().isEmpty()) {
                products = productsService.findByLongDescription(searchKey, category, new PageRequest(0, 10));
            }
        }

        return ResponseEntity.ok(products.getContent());
    }



}
