package com.fortegroup.service.search;

import com.fortegroup.model.search.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * @author Eugene Pankov
 * @version 1.0
 */
public interface ProductsService {

    Page<Products> findByCategory(String searchTerm, String categories, Pageable pageable);

    Products findById(String id);

}
