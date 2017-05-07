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
    boolean deleteCommerceItemById(Long itemId,Long userId);
    void deleteAllItemsFromShoppingCart(Long userId);
    BaseSKU getBaseSkuById(Long id);
    CommerceItem addItemToShoppingCart(Long userId,Long[] varSkus, Long baseSkuId, int quantity);
    Long createNewShoppingCart (User user);
    void updateCommerceItemQuantity(CommerceItem item, int quantity);


}
