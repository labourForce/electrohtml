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

    @RequestMapping (value = "/cart", method = RequestMethod.GET)
    public ResponseEntity<?> getCartByUserId (HttpServletRequest request){
        try {
            ShoppingCartDTO shoppingCart = service.getShoppingCartById((Long) (request.getAttribute("id")));
            return ResponseEntity.ok(shoppingCart);
        }catch (NullPointerException exception){
            return ResponseEntity.ok("Current user doesn't exist");
        }
    }

    @RequestMapping (value = "/cart", method = RequestMethod.PUT)
    public  ResponseEntity<?> addNewItemToShoppingCart(@RequestBody ItemInsertDTO itemInsertDTO, HttpServletRequest servletRequest){
        try {
            Long userId = Long.parseLong(servletRequest.getAttribute("id").toString());
            CommerceItem item = service.addItemToShoppingCart(userId, itemInsertDTO.getVarSkus(), itemInsertDTO.getBaseSkuId(), itemInsertDTO.getQuantity());
            return ResponseEntity.ok(item);
        }catch (Throwable ex){
            return ResponseEntity.ok("Addition failed");
        }
    }

    @RequestMapping (value = "/cart", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteItemById(@RequestParam("itemId") String id,HttpServletRequest request) {

        Long userId = (Long) request.getAttribute("id");
        service.deleteItemById(Long.parseLong(id), userId);
        ShoppingCartDTO cartDTO = service.getShoppingCartById(userId);
        return ResponseEntity.ok(cartDTO);

//        return ResponseEntity.ok("Item with id " + id + " doesn't exist");
    }


    @RequestMapping (value = "/cart", method = RequestMethod.POST)
    public ResponseEntity<?> updateItemQuantity (@RequestBody ItemInsertDTO itemDTO, HttpServletRequest servletRequest){
        try {
            Long userId = Long.parseLong(servletRequest.getAttribute("id").toString());
            ShoppingCartDTO cart = service.updateQuantityById(itemDTO.getItemId(), itemDTO.getQuantity(), userId);
            return ResponseEntity.ok(cart);
        }catch (Throwable exeption){
            return ResponseEntity.ok("Update quantity failed");
        }
    }

//    @RequestMapping (value = "/vs", method = RequestMethod.GET)
//    public ResponseEntity<?> getVarSkuById (@RequestParam("id") String id ){
//        VariableSKU variableSKU = service.getVariableSkuById(Long.parseLong(id));
//        return ResponseEntity.ok(variableSKU);
//    }

    @RequestMapping (value = "/ci", method = RequestMethod.GET)
    public ResponseEntity <?> getCommerceItemByID (@RequestParam("id") String id){
        CommerceItem item = service.getCommerceItemById(Long.parseLong(id));
        return ResponseEntity.ok(item);
    }

//    @RequestMapping (value = "/bs", method = RequestMethod.GET)
//    public ResponseEntity<?> getBaseSkuById (@RequestParam("id") String id){
//        BaseSKU baseSKU = service.getBaseSkuById(Long.parseLong(id));
//        return ResponseEntity.ok(baseSKU);
//    }

//    @RequestMapping (value = "/savesc", method = RequestMethod.POST)
//    public ResponseEntity<?> createNewShoppingCart (@RequestParam("userid") String userid){
//        Long id = service.createNewShoppingCart(Long.parseLong(userid));
//        return ResponseEntity.ok(id);
//    }
}
