package com.fortegroup.dao;

import com.fortegroup.model.Product;

/**
 * Created by PC on 21.04.2017.
 */
public interface ProductDetailDao {
    Product getProductById(long id);
//    BaseSKU getBaseSKUByProductId(long id);
//    List<BaseSKU> getBaseSKUsByProductId(long id);
}
