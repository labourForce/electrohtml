package com.fortegroup.model.shoppingCart.dto;

public class ProductDTO {

    private Long uid;
    private String productLink;
    private String parentCategory;
    private String parentSubcategory;
    private String featuredImage;
    private String displayName;
    private double listPrice;
    private double salePrice;
    private int quantity;
    private double totalPrice;
    private SkuDTO nestedSKUs;

    public Long getUid() {
        return uid;
    }

    public void setUid(Long uid) {
        this.uid = uid;
    }

    public String getProductLink() {
        return productLink;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public void setProductLink(String productLink) {
        this.productLink = productLink;
    }

    public String getParentCategory() {
        return parentCategory;
    }

    public void setParentCategory(String parentCategory) {
        this.parentCategory = parentCategory;
    }

    public String getParentSubcategory() {
        return parentSubcategory;
    }

    public void setParentSubcategory(String parentSubcategory) {
        this.parentSubcategory = parentSubcategory;
    }

    public String getFeaturedImage() {
        return featuredImage;
    }

    public void setFeaturedImage(String featuredImage) {
        this.featuredImage = featuredImage;
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

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public SkuDTO getNestedSKUs() {
        return nestedSKUs;
    }

    public void setNestedSKUs(SkuDTO nestedSKUs) {
        this.nestedSKUs = nestedSKUs;
    }
}
