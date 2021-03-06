package com.fortegroup.dao.shoppingCart;

import com.fortegroup.model.accounts.User;
import com.fortegroup.model.productdetails.BaseSKU;
import com.fortegroup.model.productdetails.ConfOption;
import com.fortegroup.model.productdetails.ConfProperty;
import com.fortegroup.model.productdetails.VariableSKU;
import com.fortegroup.model.shoppingCart.CommerceItem;
import com.fortegroup.model.shoppingCart.CommerceItemProperties;
import com.fortegroup.model.shoppingCart.ShoppingCart;
import org.hibernate.FetchMode;
import org.hibernate.Hibernate;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Iterator;

public class ShoppingCartDaoImpl implements ShoppingCartDao {

    @Autowired
    private SessionFactory sessionFactory;

    private static final Logger logger = LoggerFactory.getLogger(ShoppingCartDaoImpl.class);

    @Override
    public ShoppingCart getShoppingCartByUserId(Long userId) {

        ShoppingCart cart = (ShoppingCart) sessionFactory.getCurrentSession()
                .createCriteria(ShoppingCart.class)
                .add(Restrictions.eq("userId", userId))
                .uniqueResult();
        if(cart!=null) {
            for (CommerceItem item : cart.getItems()) {
                Hibernate.initialize(item.getSku());
                for (CommerceItemProperties propeprty : item.getCommerceItemProperties()) {
                    Hibernate.initialize(propeprty.getVariableSKU());
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
        logger.info("Variable SKU has been loaded successfully. Variable SKU : " + variableSKU.getId());
        return variableSKU;
    }

    public CommerceItem getCommerceItemById(Long id) {

        CommerceItem item = (CommerceItem) sessionFactory.getCurrentSession()
                .createCriteria(CommerceItem.class)
                .add(Restrictions.eq("id", id))
                .uniqueResult();
        Hibernate.initialize(item.getSku().getProduct());
        for (CommerceItemProperties property : item.getCommerceItemProperties()){
            Hibernate.initialize(property.getVariableSKU());
        }
//        logger.info("Commerce item  has been loaded successfully. Commerce item : " + item);
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
        logger.info("Base sku has been loaded successfully. Base SKU info: " + baseSKU);
        return baseSKU;
    }

    @Override
    public CommerceItem addItemToShoppingCart(Long  userId, Long[] varSkus, Long baseSkuId, int quantity) {

        ShoppingCart cart = getShoppingCartByUserId(userId);
        CommerceItem item = new CommerceItem();
        item.setQuantity(quantity);
        item.setBaseSkuId(baseSkuId);
        item.setSku(getBaseSkuById(baseSkuId));
        item.setShoppingCart(cart);
        item.setShoppingCartId(cart.getId());
        sessionFactory.getCurrentSession().save(item);
        for (int i = 0; i < varSkus.length; i++) {
            CommerceItemProperties commerceItemProperties = new CommerceItemProperties();
            VariableSKU variableSKU = getVariableSkuById(varSkus[i]);
            commerceItemProperties.setVarialbeSkuId(varSkus[i]);
            commerceItemProperties.setVariableSKU(variableSKU);
            commerceItemProperties.setCommerceItem(item);
            commerceItemProperties.setCommerceItemId(item.getId());
            item.getCommerceItemProperties().add(commerceItemProperties);
            sessionFactory.getCurrentSession().save(commerceItemProperties);
        }
        logger.info("Commerce item has been saved successfully added to shopping cart . Commerce item: " + item);
        return item;
    }

    @Override
    public Long createNewShoppingCart(User user) {

        ShoppingCart shoppingCart = new ShoppingCart();
        shoppingCart.setUserId(user.getId());
        shoppingCart.setUser(user);
        Long id = (Long) sessionFactory.getCurrentSession().save(shoppingCart);
        logger.info("Shopping cart has been created successfully. Shopping cart id: " + id);
        return id;
    }

    @Override
    public boolean deleteCommerceItemById(Long itemId,Long userId) {
        CommerceItem item = getCommerceItemById(itemId);
        ShoppingCart cart = getShoppingCartByUserId(userId);
        boolean result = false;
        for (CommerceItem items : cart.getItems()){
            if(items.getId().equals(item.getId())){
                cart.getItems().remove(item);
                sessionFactory.getCurrentSession().delete(item);
                result = true;
                break;
            }
        }
        return result;
    }

    @Override
    public void updateCommerceItemQuantity(CommerceItem commerceItem, int quantity) {
        commerceItem.setQuantity(quantity);
        sessionFactory.getCurrentSession().saveOrUpdate(commerceItem);
        logger.info("Commerce item quantity has been updated successfully");
    }

    @Override
    public void deleteAllItemsFromShoppingCart(Long userId) {
        ShoppingCart shoppingCart = getShoppingCartByUserId(userId);
        Iterator<CommerceItem> itemIterator = shoppingCart.getItems().iterator();
        while (itemIterator.hasNext()){
            CommerceItem item = itemIterator.next();
            itemIterator.remove();
            sessionFactory.getCurrentSession().delete(item);
        }
    }
}
