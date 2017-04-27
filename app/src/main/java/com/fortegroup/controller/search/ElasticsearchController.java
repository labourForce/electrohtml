package com.fortegroup.controller.search;

import com.fortegroup.model.search.Products;
import com.fortegroup.service.search.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Eugene Pankov
 */

@RestController
@RequestMapping("/rest/search")
public class ElasticsearchController {

    @Autowired
    private ProductsService productsService;

    @RequestMapping(value = "/category", method = RequestMethod.GET)
    public List<Products> findByCategory(@RequestParam("searchTerm") String searchTerm,
                                         @RequestParam("category") String category, Pageable pageRequest) {

        return productsService.findByCategory(searchTerm, category, pageRequest).getContent();
    }
}
