package com.fortegroup.service;

import com.fortegroup.model.BaseSKU;
import com.fortegroup.model.Product;

import java.util.List;

/**
 * Created by PC on 18.04.2017.
 */
public interface ProductDetailService {
    Product getProductById(long id);
    BaseSKU getBaseSKUByProductId(long productId);
    List<BaseSKU> getBaseSKUsByProductId(long productId);

}
