package com.fortegroup.service.productdetails;

import com.fortegroup.dao.productdetails.ProductDetailDao;
import com.fortegroup.model.productdetails.BaseSKU;
import com.fortegroup.model.productdetails.Product;
import com.fortegroup.service.productdetails.ProductDetailService;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Set;


/**
 * Created by PC on 21.04.2017.
=======
import java.util.Collection;
import java.util.List;

/**
 * Created by PC on 18.04.2017.
>>>>>>> af2f4485bc749f02524bd5db4fa8d8d354347bd5
 */
@Service(value = "appProductDetailService")
public class ProductDetailServiceImpl implements ProductDetailService {

    @Autowired
    private ProductDetailDao productDetailDao;

    @Transactional
    @Override
    public Product getProductById(long id) {
        Product product = productDetailDao.getProductById(id);
        Hibernate.initialize(product.getBaseSKUs());
        Set<BaseSKU> baseSKUs = product.getBaseSKUs();
        for (BaseSKU baseSKU : baseSKUs) {
            Hibernate.initialize(baseSKU);
            Hibernate.initialize(baseSKU.getVariableSKUs());
        }
        return product;
    }

}
