package com.fortegroup.service.implementation;

import com.fortegroup.dao.ProductDetailDao;
import com.fortegroup.model.Product;
import com.fortegroup.service.ProductDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

/**
 * Created by PC on 21.04.2017.
 */
@Service(value = "appProductDetailService")
public class ProductDetailServiceImpl implements ProductDetailService {

    @Autowired
    private ProductDetailDao productDetailDao;

    @Transactional
    @Override
    public Product getProductById(long id) {
        return productDetailDao.getProductById(id);
    }

//    @Transactional
//    @Override
//    public BaseSKU getBaseSKUByProductId(long productId) {
//        return productDetailDao.getBaseSKUByProductId(productId);
//    }
//
//    @Transactional
//    @Override
//    public List<BaseSKU> getBaseSKUsByProductId(long productId) {
//        return productDetailDao.getBaseSKUsByProductId(productId);
//    }
}
