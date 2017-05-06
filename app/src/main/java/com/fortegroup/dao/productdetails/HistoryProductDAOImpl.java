package com.fortegroup.dao.productdetails;

import com.fortegroup.dao.category.CategoryDAOImpl;
import com.fortegroup.model.productdetails.Product;
import com.fortegroup.model.productdetails.HistoryProduct;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Eugene Pankov
 * @verson 1.0
 */
public class HistoryProductDAOImpl implements HistoryProductDAO {

    private static final Logger logger = LoggerFactory.getLogger(CategoryDAOImpl.class);

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public Long addHistoryProduct(HistoryProduct historyProduct) {
        Long id = (Long) sessionFactory.getCurrentSession().save(historyProduct);
        logger.info("Product has been added successfully to product history. Product info: " + historyProduct);
        return id;
    }

    @Override
    public HistoryProduct getHistoryProduct(Long userId, Long productId) {
        return (HistoryProduct) sessionFactory.getCurrentSession().createQuery("select c " +
                "from HistoryProduct c where c.user.id=:userId and c.product.id=:productId").
                setParameter("userId", userId).setParameter("productId", productId).uniqueResult();
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<Product> getUserProducts(Long userId) {
        List<Product> products = new ArrayList<>();
        List<HistoryProduct> historyProducts = sessionFactory.getCurrentSession().
                createQuery("select c from HistoryProduct c where c.user.id=:userId").
                setParameter("userId", userId).list();

        historyProducts.forEach(historyProduct -> {
            products.add(historyProduct.getProduct());
        });

        return products;
    }

    @Override
    public void updateHistoryProduct(HistoryProduct historyProduct) {
        historyProduct.setTimestampVisit(new Timestamp(System.currentTimeMillis()));
        sessionFactory.getCurrentSession().update(historyProduct);
        logger.info("Product history has been successfully updated. Product info" + historyProduct);
    }


}
