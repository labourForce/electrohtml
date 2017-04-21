package com.fortegroup.dao;

import com.fortegroup.model.BaseSKU;
import com.fortegroup.model.Product;

import java.util.Collection;
import java.util.List;

/**
 *
 */
public interface ProductDetailDao {

    Product getProductById(long id);
    BaseSKU getBaseSKUByProductId(long id);
    List<BaseSKU> getBaseSKUsByProductId(long id);

}
