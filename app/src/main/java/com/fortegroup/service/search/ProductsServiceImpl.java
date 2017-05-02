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
 * @version 1.0
 */

@Service
public class ProductsServiceImpl implements ProductsService {

    @Autowired
    private ProductsRepository productsRepository;

    @Override
    public Page<Products> findByCategory(String searchTerm, String categories, Pageable pageable) {
        Page<Products> products;
        if (!categories.isEmpty()) {

            String[] categoryArray = categories.toLowerCase().split(";");
            StringBuilder sb = new StringBuilder();
            for (String category : categoryArray) {
                sb.append("\"" + category + "\", ");
            }

            String tCategory = sb.toString();
            String formattedCategories = tCategory.substring(0, tCategory.length() - 2);

            products = productsRepository.customFindById(searchTerm, formattedCategories, pageable);

            if (products.getContent().isEmpty()) {
                products = productsRepository.customFindByDisplayName(searchTerm.toLowerCase(), formattedCategories, pageable);

                if (products.getContent().isEmpty()) {
                    products = productsRepository.customFindByLongDescription(searchTerm.toLowerCase(), formattedCategories, pageable);
                }
            }
        } else {
            products = productsRepository.customFindByIdAllCategories(searchTerm, pageable);

            if (products.getContent().isEmpty()) {
                products = productsRepository.customFindByDisplayNameAllCategories(searchTerm.toLowerCase(), pageable);

                if (products.getContent().isEmpty()) {
                    products = productsRepository.customFindByLongDescriptionAllCategories(searchTerm.toLowerCase(), pageable);
                }
            }
        }

        return products;
    }
}
