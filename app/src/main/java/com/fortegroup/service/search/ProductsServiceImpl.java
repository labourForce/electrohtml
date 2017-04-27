package com.fortegroup.service.search;

import com.fortegroup.model.search.Products;
import com.fortegroup.dao.search.ProductsRepository;
import com.fortegroup.service.search.ProductsService;
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
    public Page<Products> findByCategory(String searchTerm, String category, Pageable pageable) {
        Page<Products> products;
        if (!category.isEmpty()) {
            products = productsRepository.customFindById(searchTerm, category, pageable);

            if (products.getContent().isEmpty()) {
                products = productsRepository.customFindByDisplayName(searchTerm, category, pageable);

                if (products.getContent().isEmpty()) {
                    products = productsRepository.customFindByLongDescription(searchTerm, category, pageable);
                }
            }
        } else {
            products = productsRepository.customFindByIdAllCategories(searchTerm, pageable);

            if (products.getContent().isEmpty()) {
                products = productsRepository.customFindByDisplayNameAllCategories(searchTerm, pageable);

                if (products.getContent().isEmpty()) {
                    products = productsRepository.customFindByLongDescriptionAllCategories(searchTerm, pageable);
                }
            }
        }

        return products;
    }
}
