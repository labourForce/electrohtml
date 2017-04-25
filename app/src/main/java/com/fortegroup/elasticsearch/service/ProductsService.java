package com.fortegroup.elasticsearch.service;

import com.fortegroup.elasticsearch.model.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * @author Eugene Pankov
 */
public interface ProductsService {
    Page<Products> findById(String id, String category, Pageable pageable);

    Page<Products> findByDisplayName(String name, String category, Pageable pageable);

    Page<Products> findByLongDescription(String description, String category, Pageable pageable);
}
