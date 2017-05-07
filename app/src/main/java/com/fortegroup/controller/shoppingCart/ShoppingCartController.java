package com.fortegroup.controller.shoppingCart;


import com.fortegroup.model.shoppingCart.CommerceItem;
import com.fortegroup.model.shoppingCart.dto.ItemInsertDTO;
import com.fortegroup.model.shoppingCart.dto.ShoppingCartDTO;
import com.fortegroup.service.shoppingCart.ShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping(value = "/rest")
public class ShoppingCartController {

    @Autowired
    private ShoppingCartService service;

    @RequestMapping(value = "/cart", method = RequestMethod.GET)
    public ResponseEntity<?> getCartByUserId(HttpServletRequest request) {

        ShoppingCartDTO cartDTO = service.getShoppingCartByUserId((Long)(request.getAttribute("id")));
        return ResponseEntity.ok(cartDTO);
    }

    @RequestMapping(value = "/cart", method = RequestMethod.PUT)
    public ResponseEntity<?> addNewItemToShoppingCart(@RequestBody ItemInsertDTO itemInsertDTO, HttpServletRequest servletRequest) {

        Long userId = Long.parseLong(servletRequest.getAttribute("id").toString());
        CommerceItem item = service.addItemToShoppingCart(userId, itemInsertDTO.getVarSkus(), itemInsertDTO.getBaseSkuId(), itemInsertDTO.getQuantity());
        return ResponseEntity.ok(item);


    }

    @RequestMapping(value = "/cart", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteItemById(@RequestParam("itemId") String id, HttpServletRequest request) {

        Long userId = (Long) request.getAttribute("id");
        service.deleteItemById(Long.parseLong(id), userId);
        ShoppingCartDTO cartDTO = service.getShoppingCartByUserId(userId);
        return ResponseEntity.ok(cartDTO);

    }


    @RequestMapping(value = "/cart", method = RequestMethod.POST)
    public ResponseEntity<?> updateItemQuantity(@RequestBody ItemInsertDTO itemDTO, HttpServletRequest servletRequest) {

        Long userId = Long.parseLong(servletRequest.getAttribute("id").toString());
        ShoppingCartDTO cartDTO = service.updateQuantityById(itemDTO.getItemId(), itemDTO.getQuantity(), userId);
        return ResponseEntity.ok(cartDTO);
    }

//    @RequestMapping (value = "/vs", method = RequestMethod.GET)
//    public ResponseEntity<?> getVarSkuById (@RequestParam("id") String id ){
//        VariableSKU variableSKU = service.getVariableSkuById(Long.parseLong(id));
//        return ResponseEntity.ok(variableSKU);
//    }
//
//    @RequestMapping (value = "/ci", method = RequestMethod.GET)
//    public ResponseEntity <?> getCommerceItemByID (@RequestParam("id") String id){
//        CommerceItem item = service.getCommerceItemById(Long.parseLong(id));
//        return ResponseEntity.ok(item);
//    }
//
//    @RequestMapping (value = "/bs", method = RequestMethod.GET)
//    public ResponseEntity<?> getBaseSkuById (@RequestParam("id") String id){
//        BaseSKU baseSKU = service.getBaseSkuById(Long.parseLong(id));
//        return ResponseEntity.ok(baseSKU);
//    }
//
//    @RequestMapping (value = "/savesc", method = RequestMethod.POST)
//    public ResponseEntity<?> createNewShoppingCart (@RequestParam("userid") String userid){
//        Long id = service.createNewShoppingCart(Long.parseLong(userid));
//        return ResponseEntity.ok(id);
//    }
//
//    @RequestMapping (value = "/sc", method = RequestMethod.GET)
//    public ResponseEntity<?> getShoppingCartByUserId (@RequestParam("userId") Long userId){
//        ShoppingCartDTO cart = service.getShoppingCartByUserId(userId);
//        return ResponseEntity.ok(cart);
//    }
//
//    @RequestMapping(value = "/sc", method = RequestMethod.DELETE)
//    public ResponseEntity<?> deleteItemByItemId(@RequestParam("itemId") Long itemId,@RequestParam("userId")Long userId){
//        service.deleteAdvancedCommerceItemByItemId(itemId);
//        ShoppingCartDTO cartDTO = service.getShoppingCartByUserId(userId);
//        return ResponseEntity.ok(cartDTO);
//    }
}
