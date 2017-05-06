package com.fortegroup.dao.checkout;

import com.fortegroup.dao.shoppingCart.ShoppingCartDaoImpl;
import com.fortegroup.model.checkout.Order;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CheckoutDaoImpl implements CheckoutDao{

    @Autowired
    private SessionFactory sessionFactory;

    private static final Logger logger = LoggerFactory.getLogger(ShoppingCartDaoImpl.class);

    @Override
    public Order getOrderById(Long id) {
        Order order = (Order) sessionFactory.getCurrentSession()
                .createCriteria(Order.class)
                .add(Restrictions.eq("userId", id))
                .uniqueResult();
        logger.info("Order has been loaded successfully. Order : " + order);
        return order;
    }

    public void createOrder(Order order) {
        Long id = (Long) sessionFactory.getCurrentSession().save(order);
        logger.info("Order has been created successfully. Order id: " + id);
    }

}
