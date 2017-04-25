package com.fortegroup.service.search;

import com.fortegroup.model.search.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * @author Eugene Pankov
 */
public interface ProductsService {
    Page<Products> findById(String id, Pageable pageable);
}
