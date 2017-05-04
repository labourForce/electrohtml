package com.fortegroup.dao.shoppingCart;

import com.fortegroup.model.accounts.User;
import com.fortegroup.model.productdetails.BaseSKU;
import com.fortegroup.model.productdetails.ConfOption;
import com.fortegroup.model.productdetails.ConfProperty;
import com.fortegroup.model.productdetails.VariableSKU;
import com.fortegroup.model.shoppingCart.CommerceItem;
import com.fortegroup.model.shoppingCart.CommerceItemProperties;
import com.fortegroup.model.shoppingCart.ShoppingCart;
import com.fortegroup.model.shoppingCart.ShoppingCartProperties;
import org.hibernate.FetchMode;
import org.hibernate.Hibernate;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

public class ShoppingCartDaoImpl implements ShoppingCartDao {

    @Autowired
    private SessionFactory sessionFactory;

    private static final Logger logger = LoggerFactory.getLogger(ShoppingCartDaoImpl.class);

    @Override
    public ShoppingCart getShoppingCartByUserId(Long id) {

        ShoppingCart cart = (ShoppingCart) sessionFactory.getCurrentSession()
                .createCriteria(ShoppingCart.class)
                .add(Restrictions.eq("userId", id))
                .uniqueResult();
        if(cart!=null) {
            for (ShoppingCartProperties property : cart.getCartProperties()) {
                CommerceItem item = property.getItem();
                Hibernate.initialize(item.getSku().getProduct());
                for (CommerceItemProperties commerceItemProperties : item.getCommerceItemProperties()){
                    Hibernate.initialize(commerceItemProperties.getVariableSKU());
                }
            }
        }
        return cart;
    }

    @Override
    public VariableSKU getVariableSkuById(Long varSkuId) {

        VariableSKU variableSKU = (VariableSKU) sessionFactory.getCurrentSession()
                .createCriteria(VariableSKU.class)
                .setFetchMode("commerceItems", FetchMode.JOIN)
                .add(Restrictions.eq("id", varSkuId))
                .uniqueResult();

        return variableSKU;
    }

    public CommerceItem getCommerceItemById(Long id) {

        CommerceItem item = (CommerceItem) sessionFactory.getCurrentSession()
                .createCriteria(CommerceItem.class)
                .add(Restrictions.eq("id", id))
                .uniqueResult();
        Hibernate.initialize(item.getSku().getProduct());
        Hibernate.initialize(item.getCartProperties());
        return item;
    }

    @Override
    public BaseSKU getBaseSkuById(Long id) {
        BaseSKU baseSKU = (BaseSKU) sessionFactory.getCurrentSession()
                .createCriteria(BaseSKU.class)
                .add(Restrictions.eq("id", id))
                .uniqueResult();
        for (ConfProperty prop : baseSKU.getConfProperties()) {
            for (ConfOption option : prop.getConfOptions()) {
                Hibernate.initialize(option);
            }
        }
        Hibernate.initialize(baseSKU.getProduct());
        return baseSKU;
    }

    @Override
    public CommerceItem addItemToShoppingCart(Long[] varSkusId, Long  userId, Long baseSkuId, int quantity) {

        ShoppingCart cart = getShoppingCartByUserId(userId);
        CommerceItem item = new CommerceItem();
        item.setQuantity(quantity);
        item.setBaseSkuId(baseSkuId);
        item.setSku(getBaseSkuById(baseSkuId));
        sessionFactory.getCurrentSession().save(item);
        ShoppingCartProperties shoppingCartProperties = new ShoppingCartProperties();
        for (int i = 0; i < varSkusId.length; i++) {
            CommerceItemProperties commerceItemProperties = new CommerceItemProperties();
            VariableSKU variableSKU = getVariableSkuById(varSkusId[i]);
            commerceItemProperties.setVarialbeSkuId(varSkusId[i]);
            commerceItemProperties.setVariableSKU(variableSKU);
            commerceItemProperties.setCommerceItem(item);
            commerceItemProperties.setCommerceItemId(item.getId());
            item.getCommerceItemProperties().add(commerceItemProperties);
            sessionFactory.getCurrentSession().save(commerceItemProperties);
        }
        shoppingCartProperties.setItem(item);
        shoppingCartProperties.setCommerceItemId(item.getId());
        shoppingCartProperties.setShoppingCart(cart);
        shoppingCartProperties.setShoppingCartId(cart.getId());
        item.getCartProperties().add(shoppingCartProperties);
        sessionFactory.getCurrentSession().save(shoppingCartProperties);

        return item;
    }

    @Override
    public Long createNewShoppingCart(User user) {

        ShoppingCart shoppingCart = new ShoppingCart();
        shoppingCart.setUserId(user.getId());
        shoppingCart.setUser(user);
        Long id = (Long) sessionFactory.getCurrentSession().save(shoppingCart);
        return id;
    }

    @Override
    public CommerceItem deleteCommerceItemById(Long id) {
        CommerceItem item = getCommerceItemById(id);
        sessionFactory.getCurrentSession().delete(item);
        return item;
    }

    @Override
    public CommerceItem updateCommerceItemQuantity(CommerceItem commerceItem, int quantity) {
        commerceItem.setQuantity(quantity);
        sessionFactory.getCurrentSession().saveOrUpdate(commerceItem);
        return null;
    }
}
