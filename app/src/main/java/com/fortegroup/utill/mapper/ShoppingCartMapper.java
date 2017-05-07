package com.fortegroup.utill.mapper;

import com.fortegroup.model.productdetails.BaseSKU;
import com.fortegroup.model.productdetails.Product;
import com.fortegroup.model.productdetails.VariableSKU;
import com.fortegroup.model.shoppingCart.CommerceItem;
import com.fortegroup.model.shoppingCart.CommerceItemProperties;
import com.fortegroup.model.shoppingCart.dto.*;

import java.util.*;

public class ShoppingCartMapper {

    private ShoppingCartMapper() {
    }

    public static ShoppingCartDTO createShoppingCartDto (List<CommerceItemDTO> dtoList){

        ShoppingCartDTO shoppingCartDTO = new ShoppingCartDTO();
        OrderDTO orderDTO = new OrderDTO();
        List<ProductDTO> productList = new ArrayList<>();
        double orderTotalPrice = 0;
        int orderTotalQuantity = 0;
        for (CommerceItemDTO itemDTO : dtoList){

            CommerceItem commerceItem = itemDTO.getItem();
            String [] path = itemDTO.getPath();
            orderTotalQuantity++;
            StringJoiner displayName = new StringJoiner(" ");
            ProductDTO productDTO = new ProductDTO();
            Product nestedProduct = commerceItem.getSku().getProduct();
            productDTO.setUid(commerceItem.getId());
            productDTO.setCategoryPath(path);
            productDTO.setQuantity(commerceItem.getQuantity());
            productDTO.setFeaturedImage(nestedProduct.getImage());
            productDTO.setListPrice(nestedProduct.getListPrice());
            productDTO.setSalePrice(nestedProduct.getSalePrice());
            displayName.add(nestedProduct.getDisplayName());
            BaseSKU nestedSku = commerceItem.getSku();
            double totalProductPrice = nestedProduct.getListPrice()+nestedSku.getListPrice();
            SkuDTO skuDTO = new SkuDTO();
            skuDTO.setUid(nestedSku.getId());
            skuDTO.setFeaturedImage(nestedSku.getImage());
            skuDTO.setDisplayName(nestedSku.getDisplayName());
            displayName.add(nestedSku.getDisplayName());
            skuDTO.setListPrice(nestedSku.getListPrice());
            skuDTO.setSalePrice(nestedSku.getSalePrice());
            Set<VariableSkuDTO> variableSkuDTOS = new HashSet<>();
            for (CommerceItemProperties properties : commerceItem.getCommerceItemProperties()) {
                VariableSkuDTO variableSkuDTO = new VariableSkuDTO();
                VariableSKU variableSKU = properties.getVariableSKU();
                variableSkuDTO.setUid(variableSKU.getId());
//                      variableSkuDTO.setFeaturedImage(variableSKU.getImage());
                variableSkuDTO.setDisplayName(variableSKU.getDisplayName());
                variableSkuDTO.setListPrice(variableSKU.getListPrice());
                variableSKU.setSalePrice(variableSKU.getSalePrice());
                variableSkuDTOS.add(variableSkuDTO);
                totalProductPrice+= variableSKU.getListPrice();
            }
            skuDTO.setNestedVariableSKU(variableSkuDTOS);
            productDTO.setNestedSKUs(skuDTO);
            productDTO.setDisplayName(displayName.toString());
            productDTO.setQuantity(commerceItem.getQuantity());
            orderTotalPrice+=totalProductPrice*commerceItem.getQuantity();
            productDTO.setTotalPrice(totalProductPrice*commerceItem.getQuantity());
            productList.add(productDTO);
        }
        orderDTO.setOrderTotalPrice(orderTotalPrice);
        orderDTO.setOrderTotalQuantity(orderTotalQuantity);
        shoppingCartDTO.setOrder(orderDTO);
        shoppingCartDTO.setProducts(productList);
        return shoppingCartDTO;
    }
}
