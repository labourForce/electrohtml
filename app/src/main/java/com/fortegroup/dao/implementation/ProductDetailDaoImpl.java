package com.fortegroup.dao.implementation;

import com.fortegroup.dao.ProductDetailDao;

import com.fortegroup.model.BaseSKU;
import com.fortegroup.model.Product;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.logging.Logger;

/**
 * Created by PC on 21.04.2017.
 */
public class ProductDetailDaoImpl implements ProductDetailDao {

   // private static final Logger logger = (Logger) LoggerFactory.getLogger(UserDaoImpl.class);

    @Autowired
    private SessionFactory sessionFactory ;

    @Override
    public Product getProductById(long id) {
        Session session = this.sessionFactory.openSession();
        Transaction transaction = null;

        transaction = session.beginTransaction();
        Product product = session.get(Product.class, id);
        System.out.println(product.getBaseSKUs());
        transaction.commit();
        session.close();
        return product;
    }

}
