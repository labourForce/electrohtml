package com.fortegroup.dao.productdetails;

import com.fortegroup.model.productdetails.BaseSKU;
import com.fortegroup.model.productdetails.ConfOption;
import com.fortegroup.model.productdetails.ConfProperty;
import com.fortegroup.model.productdetails.Product;
import org.hibernate.*;
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
        Hibernate.initialize(product.getCategories());
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

    @Override
    public Product getByDisplayNameAndCategoryId(String displayName, Long categoryId){
        Query query= sessionFactory.getCurrentSession().
                createQuery("select p from Product p join p.categories c where c.id=:categoryId and p.displayName=:displayName");
        query.setParameter("displayName", displayName);
        query.setParameter("categoryId", categoryId);
        Product product = (Product) query.uniqueResult();
        return product;
    }

}
