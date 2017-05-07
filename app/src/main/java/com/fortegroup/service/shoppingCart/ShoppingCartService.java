package com.fortegroup.service.shoppingCart;

import com.fortegroup.model.productdetails.BaseSKU;
import com.fortegroup.model.productdetails.VariableSKU;
import com.fortegroup.model.shoppingCart.CommerceItem;
import com.fortegroup.model.shoppingCart.ShoppingCart;
import com.fortegroup.model.shoppingCart.dto.ShoppingCartDTO;

public interface ShoppingCartService {
    ShoppingCartDTO getShoppingCartByUserId(Long userId);
    CommerceItem addItemToShoppingCart(Long userId, Long[] varSkus, Long baseSkuId, int quantity);
    CommerceItem deleteItemById(Long id, Long userId);
    ShoppingCartDTO updateQuantityById(Long itemId, int quantity, Long userId);
    VariableSKU getVariableSkuById(Long varSkuId);
    CommerceItem getCommerceItemById(Long commerceItemId);
    BaseSKU getBaseSkuById(Long baseSkuId);
    Long createNewShoppingCart(Long userId);


}
