package com.fortegroup.elasticsearch.repository;

import com.fortegroup.elasticsearch.model.Products;
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

    @Query("{\"bool\": {\"must\": [{\"match\": {\"test.product_id\": \"?0\"}}]}}")
    Page<Products> findCustomById(String product_id, Pageable pageable);
}


