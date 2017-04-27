package com.fortegroup.dao.search;

import com.fortegroup.model.search.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.elasticsearch.annotations.Query;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Eugene Pankov
 */

@Repository
public interface ProductsRepository extends ElasticsearchRepository<Products, String> {

    @Query("{\"filtered\": {\"query\": {\"match\": {\"product_id\": \"?0\"}}, " +
            "\"filter\": {\"terms\": {\"path\": [\"?1\"]}}}}")
    Page<Products> customFindById(String id, String category, Pageable pageable);

    @Query("{\"filtered\": {\"query\": {\"wildcard\": {\"display_name\": \"*?0*\"}}, " +
            "\"filter\": {\"terms\": {\"path\": [\"?1\"]}}}}")
    Page<Products> customFindByDisplayName(String name, String category, Pageable pageable);

    @Query("{\"filtered\": {\"query\": {\"match\": {\"long_description\": \"?0\"}}, " +
            "\"filter\": {\"terms\": {\"path\": [\"?1\"]}}}}")
    Page<Products> customFindByLongDescription(String description, String category, Pageable pageable);


    @Query("{\"match\": {\"product_id\": \"?0\"}}")
    Page<Products> customFindByIdAllCategories(String id, Pageable pageable);

    @Query("{\"wildcard\": {\"display_name\": \"*?0*\"}}")
    Page<Products> customFindByDisplayNameAllCategories(String id, Pageable pageable);

    @Query("{\"match\": {\"long_description\": \"?0\"}}")
    Page<Products> customFindByLongDescriptionAllCategories(String id, Pageable pageable);
}


