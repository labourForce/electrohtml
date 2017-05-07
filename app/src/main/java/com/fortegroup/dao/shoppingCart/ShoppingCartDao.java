package com.fortegroup.dao.shoppingCart;

import com.fortegroup.model.accounts.User;
import com.fortegroup.model.productdetails.BaseSKU;
import com.fortegroup.model.productdetails.VariableSKU;
import com.fortegroup.model.shoppingCart.CommerceItem;
import com.fortegroup.model.shoppingCart.ShoppingCart;

public interface ShoppingCartDao {

    ShoppingCart getShoppingCartByUserId(Long userID);
    VariableSKU getVariableSkuById(Long varSkuId);
    CommerceItem getCommerceItemById(Long id);
    void deleteCommerceItemById(Long itemId);
    BaseSKU getBaseSkuById(Long id);
    CommerceItem addItemToShoppingCart(Long userId,Long[] varSkus, Long baseSkuId, int quantity);
    Long createNewShoppingCart (User user);
    void updateCommerceItemQuantity(CommerceItem item, int quantity);


}
