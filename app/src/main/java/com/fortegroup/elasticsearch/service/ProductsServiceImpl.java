package com.fortegroup.elasticsearch.service;

import com.fortegroup.elasticsearch.model.Products;
import com.fortegroup.elasticsearch.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * @author Eugene Pankov
 */

@Service
public class ProductsServiceImpl implements ProductsService {

    @Autowired
    private ProductsRepository productsRepository;

    @Override
    public Page<Products> findById(String id, String category, Pageable pageable) {
        return productsRepository.customFindById(id, category, pageable);
    }

    @Override
    public Page<Products> findByDisplayName(String name, String category, Pageable pageable) {
        return productsRepository.customFindByDisplayName(name, category , pageable);
    }

    @Override
    public Page<Products> findByLongDescription(String description, String category, Pageable pageable) {
        return productsRepository.customFindByLongDescription(description, category, pageable);
    }
}
