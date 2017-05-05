package com.fortegroup.model.shoppingCart.dto;

import java.util.List;

public class ShoppingCartDTO {

    private List<ProductDTO> products;
    private OrderDTO order;

    public List<ProductDTO> getProducts() {
        return products;
    }

    public void setProducts(List<ProductDTO> products) {
        this.products = products;
    }

    public OrderDTO getOrder() {
        return order;
    }

    public void setOrder(OrderDTO order) {
        this.order = order;
    }
}
