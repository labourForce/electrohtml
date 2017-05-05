package com.fortegroup.model.shoppingCart.dto;

public class OrderDTO {

    private Long orderUID;
    private double shippingPrice;
    private boolean discounted;
    private double orderTotalPrice;
    private int orderTotalQuantity;

    public int getOrderTotalQuantity() {
        return orderTotalQuantity;
    }

    public void setOrderTotalQuantity(int orderTotalQuantity) {
        this.orderTotalQuantity = orderTotalQuantity;
    }

    public Long getOrderUID() {
        return orderUID;
    }

    public void setOrderUID(Long orderUID) {
        this.orderUID = orderUID;
    }

    public double getShippingPrice() {
        return shippingPrice;
    }

    public void setShippingPrice(double shippingPrice) {
        this.shippingPrice = shippingPrice;
    }

    public boolean isDiscounted() {
        return discounted;
    }

    public void setDiscounted(boolean discounted) {
        this.discounted = discounted;
    }

    public double getOrderTotalPrice() {
        return orderTotalPrice;
    }

    public void setOrderTotalPrice(double orderTotalPrice) {
        this.orderTotalPrice = orderTotalPrice;
    }
}
