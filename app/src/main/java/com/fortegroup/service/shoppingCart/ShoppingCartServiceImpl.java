package com.fortegroup.service.shoppingCart;


import com.fortegroup.dao.accounts.UserDao;
import com.fortegroup.dao.shoppingCart.ShoppingCartDao;
import com.fortegroup.model.accounts.User;
import com.fortegroup.model.productdetails.BaseSKU;
import com.fortegroup.model.productdetails.VariableSKU;
import com.fortegroup.model.shoppingCart.CommerceItem;
import com.fortegroup.model.shoppingCart.ShoppingCart;
import com.fortegroup.model.shoppingCart.dto.CommerceItemDTO;
import com.fortegroup.model.shoppingCart.dto.ShoppingCartDTO;
import com.fortegroup.service.search.ProductsService;
import com.fortegroup.utill.mapper.ShoppingCartMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service(value = "appShoppingCartService")
public class ShoppingCartServiceImpl implements ShoppingCartService {

    @Autowired
    private ShoppingCartDao shoppingCartDao;

    @Autowired
    private UserDao userDao;

    @Autowired
    private ProductsService productsService;

    @Override
    @Transactional
    public ShoppingCartDTO getShoppingCartByUserId(Long userId) {
        ShoppingCart cart = shoppingCartDao.getShoppingCartByUserId(userId);
        List<CommerceItemDTO> dtoList = new ArrayList<>();
        if (cart == null) {
            shoppingCartDao.createNewShoppingCart(userDao.get(userId));
        }else{
            for (CommerceItem item : cart.getItems()){

                Long productId = item.getSku().getId();
                String [] path = productsService.findById(productId.toString()).getName_path();
 //               String [] path = {"temp"};
                dtoList.add(new CommerceItemDTO(item,path));
            }
        }
        ShoppingCartDTO shoppingCartDTO = ShoppingCartMapper.createShoppingCartDto(dtoList);

        return shoppingCartDTO;
    }

    @Override
    @Transactional
    public VariableSKU getVariableSkuById(Long varSkuId) {
        VariableSKU variableSKU = shoppingCartDao.getVariableSkuById(varSkuId);
        return variableSKU;
    }

    @Override
    @Transactional
    public CommerceItem getCommerceItemById(Long commerceItemId) {
        CommerceItem item = shoppingCartDao.getCommerceItemById(commerceItemId);
        return item;
    }

    @Override
    @Transactional
    public BaseSKU getBaseSkuById(Long baseSkuId) {
        BaseSKU baseSKU = shoppingCartDao.getBaseSkuById(baseSkuId);
        return baseSKU;
    }

    @Override
    @Transactional
    public Long createNewShoppingCart(Long userId) {

        User user = userDao.get(userId);
        Long id = shoppingCartDao.createNewShoppingCart(user);
        return id;
    }

    @Override
    @Transactional
    public CommerceItem addItemToShoppingCart(Long userId, Long[] varSkus, Long baseSkuId, int quantity) {
        ShoppingCart cart = shoppingCartDao.getShoppingCartByUserId(userId);
        if (cart == null) {
            User user = userDao.get(userId);
            shoppingCartDao.createNewShoppingCart(user);
        }
        CommerceItem item = shoppingCartDao.addItemToShoppingCart(userId, varSkus, baseSkuId, quantity);
        return item;
    }

    @Override
    @Transactional
    public CommerceItem deleteItemById(Long itemId, Long userId) {
        CommerceItem item = shoppingCartDao.getCommerceItemById(itemId);
        if (!shoppingCartDao.deleteCommerceItemById(itemId,userId)){
            throw new RuntimeException("Reject deleting");
        }
        return item;
    }

    @Override
    @Transactional
    public ShoppingCartDTO updateQuantityById(Long itemId, int quantity, Long userId) {
        CommerceItem item = shoppingCartDao.getCommerceItemById(itemId);
        shoppingCartDao.updateCommerceItemQuantity(item, quantity);
        ShoppingCartDTO cart = getShoppingCartByUserId(userId);
        return cart;
    }

}