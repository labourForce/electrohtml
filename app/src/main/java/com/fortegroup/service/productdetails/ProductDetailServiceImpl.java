package com.fortegroup.service.productdetails;

import com.fortegroup.dao.productdetails.ProductDetailDao;
import com.fortegroup.model.productdetails.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service(value = "appProductDetailService")
public class ProductDetailServiceImpl implements ProductDetailService {

    @Autowired
    private ProductDetailDao productDetailDao;

    @Transactional
    @Override
    public Product getProductById(long id) {
        return productDetailDao.getProductById(id);
    }

}
