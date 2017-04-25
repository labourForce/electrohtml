package com.fortegroup.dao.productdetails;

import com.fortegroup.model.productdetails.Product;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

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
