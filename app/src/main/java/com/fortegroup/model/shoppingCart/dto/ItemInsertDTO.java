package com.fortegroup.model.shoppingCart.dto;

public class ItemInsertDTO {

    private Long userId;
    private Long [] varSkus;
    private Long baseSkuId;
    private int quantity;
    private Long itemId;

    public ItemInsertDTO() {
    }

    public ItemInsertDTO(Long userId, Long[] varSkus, Long baseSkuId, int quantity) {
        this.userId = userId;
        this.varSkus = varSkus;
        this.baseSkuId = baseSkuId;
        this.quantity = quantity;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long[] getVarSkus() {
        return varSkus;
    }

    public void setVarSkus(Long[] varSkus) {
        this.varSkus = varSkus;
    }

    public Long getBaseSkuId() {
        return baseSkuId;
    }

    public void setBaseSkuId(Long baseSkuId) {
        this.baseSkuId = baseSkuId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Long getItemId() {
        return itemId;
    }

    public void setItemId(Long itemId) {
        this.itemId = itemId;
    }
}
