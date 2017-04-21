package com.fortegroup.service;

import com.fortegroup.model.Product;

/**
 * Created by PC on 21.04.2017.
 */
public interface ProductDetailService {
    Product getProductById(long id);

//    BaseSKU getBaseSKUByProductId(long productId);
//    List<BaseSKU> getBaseSKUsByProductId(long productId);
}
