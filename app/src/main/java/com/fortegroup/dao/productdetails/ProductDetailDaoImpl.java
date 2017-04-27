package com.fortegroup.dao.productdetails;

import com.fortegroup.model.productdetails.BaseSKU;
import com.fortegroup.model.productdetails.ConfOption;
import com.fortegroup.model.productdetails.ConfProperty;
import com.fortegroup.model.productdetails.Product;
import org.hibernate.Hibernate;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;


public class ProductDetailDaoImpl implements ProductDetailDao {

    @Autowired
    private SessionFactory sessionFactory ;

    @Override
    public Product getProductById(long id) {
        Session session = this.sessionFactory.openSession();
        Transaction transaction = null;

        transaction = session.beginTransaction();
        Product product = session.get(Product.class, id);
        Set<BaseSKU> baseSKUs = product.getBaseSKUs();
        for (BaseSKU baseSKU : baseSKUs) {
            Set<ConfProperty> confProperties = baseSKU.getConfProperties();
            for(ConfProperty confProperty:confProperties) {
                Set<ConfOption> confOptions = confProperty.getConfOptions();
                for(ConfOption confOption:confOptions) {
                    Hibernate.initialize(confOption.getVariableSKU());
                }
            }
        }
        session.close();
        return product;
    }

}
