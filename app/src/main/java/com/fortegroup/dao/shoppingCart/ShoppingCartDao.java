package com.fortegroup.dao.shoppingCart;

import com.fortegroup.model.accounts.User;
import com.fortegroup.model.productdetails.BaseSKU;
import com.fortegroup.model.productdetails.VariableSKU;
import com.fortegroup.model.shoppingCart.CommerceItem;
import com.fortegroup.model.shoppingCart.ShoppingCart;

public interface ShoppingCartDao {

    ShoppingCart getShoppingCartByUserId(Long id);
    VariableSKU getVariableSkuById(Long varSkuId);
    CommerceItem getCommerceItemById(Long id);
    CommerceItem deleteCommerceItemById(Long id);
    BaseSKU getBaseSkuById(Long id);
    CommerceItem addItemToShoppingCart(Long[] varSkusId, Long userId, Long baseSkuId, int quantity);
    Long createNewShoppingCart (User user);
    CommerceItem updateCommerceItemQuantity(CommerceItem item, int quantity);
}
