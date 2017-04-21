package com.fortegroup.dao.implementation;

import com.fortegroup.dao.ProductDetailDao;
import com.fortegroup.model.BaseSKU;
import com.fortegroup.model.Product;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Collection;
import java.util.List;

public class ProductDetailDaoImpl implements ProductDetailDao {

    private static final Logger logger = LoggerFactory.getLogger(UserDaoImpl.class);

    @Autowired
    private SessionFactory sessionFactory ;

    @Override
    public Product getProductById(long id) {
//        Product product = sessionFactory.getCurrentSession().get(Product.class, id);
//        logger.info("Product has been loaded successfully. Product info: " + product);
//        return product;
        Session session = this.sessionFactory.openSession();
        Transaction transaction = null;

        transaction = session.beginTransaction();
        Product product = session.get(Product.class, id);
        transaction.commit();
        session.close();
        return product;
    }
    @Override
    public BaseSKU getBaseSKUByProductId(long productId) {
        Session session = this.sessionFactory.openSession();
        Transaction transaction = null;

        transaction = session.beginTransaction();
        BaseSKU baseSKU = session.get(BaseSKU.class, productId);
        transaction.commit();
        session.close();
        return baseSKU;
    }
    @Override
    public List<BaseSKU> getBaseSKUsByProductId(long productId) {
        Session session = this.sessionFactory.openSession();
        Transaction transaction = null;

        List<BaseSKU> SKUs;

        transaction = session.beginTransaction();
//        String s = "FROM " + "BaseSKU" + " b where b.product_id = " +productId;
        String s = "from " + BaseSKU.class.getName() + " b where b.product_id = " +productId;
        System.out.println(s);
        SKUs = session.createQuery(s).list();
        System.out.println(SKUs);
/* session.createQuery(s); */
        transaction.commit();
        session.close();
        return SKUs;
    }
}
