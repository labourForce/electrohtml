package com.fortegroup.dao.productdetails;

import com.fortegroup.model.productdetails.Product;

public interface ProductDetailDao {

    Product getProductById(long id);

    Product getByNameAndCategoryId(String name, Long categoryId);


}
