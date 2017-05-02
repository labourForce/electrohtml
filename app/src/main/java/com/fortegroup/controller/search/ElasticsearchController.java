package com.fortegroup.controller.search;

import com.fortegroup.model.productdetails.Product;
import com.fortegroup.model.search.Products;
import com.fortegroup.model.search.SearchResult;
import com.fortegroup.service.search.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Eugene Pankov
 * @version 1.0
 */

@RestController
@RequestMapping("/rest/search")
public class ElasticsearchController {

    @Autowired
    private ProductsService productsService;

    @RequestMapping(value = "/category", method = RequestMethod.GET)
    public ResponseEntity<?> findByCategory(@RequestParam("searchTerm") String searchTerm,
                                            @RequestParam("category") String categories, Pageable pageRequest) {

        Page<Products> products = productsService.findByCategory(searchTerm, categories, pageRequest);
        int pageCount = products.getTotalPages();

        return ResponseEntity.ok(new SearchResult(pageCount, products.getContent()));
    }
}
