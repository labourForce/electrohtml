package com.fortegroup.model.shoppingCart.dto;

import java.util.Set;

public class SkuDTO {

    private Long uid;
    private String featuredImage;
    private String displayName;
    private double listPrice;
    private double salePrice;
    private Set<VariableSkuDTO> nestedVariableSKU;

    public Long getUid() {
        return uid;
    }

    public void setUid(Long uid) {
        this.uid = uid;
    }

    public String getFeaturedImage() {
        return featuredImage;
    }

    public void setFeaturedImage(String featuredImage) {
        this.featuredImage = featuredImage;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public double getListPrice() {
        return listPrice;
    }

    public void setListPrice(double listPrice) {
        this.listPrice = listPrice;
    }

    public double getSalePrice() {
        return salePrice;
    }

    public void setSalePrice(double salePrice) {
        this.salePrice = salePrice;
    }

    public Set<VariableSkuDTO> getNestedVariableSKU() {
        return nestedVariableSKU;
    }

    public void setNestedVariableSKU(Set<VariableSkuDTO> nestedVariableSKU) {
        this.nestedVariableSKU = nestedVariableSKU;
    }
}
