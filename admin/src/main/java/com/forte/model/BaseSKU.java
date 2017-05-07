package com.forte.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fortegroup.model.shoppingCart.CommerceItem;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "electro.base_sku")
public class BaseSKU implements java.io.Serializable {

    private Long id;
    private String name;
    private String displayName;
    private Integer rating;
    private boolean availability;
    private boolean displayFlag;
    private String longDescription;
    private String shortDescription;
    private String brand;
    private String techline;
    private boolean onSale;
    private boolean upSale;
    private double listPrice;
    private double salePrice;
    private Integer quantity;
    private String image;
    private Long productId;
    private Product product;

    private Set<ConfProperty> confProperties = new HashSet<>(0);
    private Set<CommerceItem> commerceItems = new HashSet<>(0);


    public BaseSKU() {
    }

    public BaseSKU(String name, String displayName, Integer rating, boolean availability, boolean displayFlag, String longDescription, String shortDescription, String brand, String techline, boolean onSale, boolean upSale, double listPrice, double salePrice, int quantity, String image, Long productId, Product product, Set<ConfProperty> confProperties) {
        this.name = name;
        this.displayName = displayName;
        this.rating = rating;
        this.availability = availability;
        this.displayFlag = displayFlag;
        this.longDescription = longDescription;
        this.shortDescription = shortDescription;
        this.brand = brand;
        this.techline = techline;
        this.onSale = onSale;
        this.upSale = upSale;
        this.listPrice = listPrice;
        this.salePrice = salePrice;
        this.quantity = quantity;
        this.image = image;
        this.productId = productId;
        this.product = product;
        this.confProperties = confProperties;

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "name", nullable = false)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "display_name", nullable = false)
    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    @Column(name = "rating", nullable = false)
    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    @Column(name = "availability", nullable = false)
    public boolean isAvailability() {
        return availability;
    }

    public void setAvailability(boolean availability) {
        this.availability = availability;
    }

    @Column(name = "display_flag", nullable = false)
    public boolean isDisplayFlag() {
        return displayFlag;
    }

    public void setDisplayFlag(boolean displayFlag) {
        this.displayFlag = displayFlag;
    }

    @Column(name = "long_description", nullable = false)
    public String getLongDescription() {
        return longDescription;
    }

    public void setLongDescription(String longDescription) {
        this.longDescription = longDescription;
    }

    @Column(name = "short_description", nullable = false)
    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    @Column(name = "brand", nullable = false)
    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    @Column(name = "techline", nullable = false)
    public String getTechline() {
        return techline;
    }

    public void setTechline(String techline) {
        this.techline = techline;
    }

    @Column(name = "on_sale", nullable = false)
    public boolean isOnSale() {
        return onSale;
    }

    public void setOnSale(boolean onSale) {
        this.onSale = onSale;
    }

    @Column(name = "upsale", nullable = false)
    public boolean isUpSale() {
        return upSale;
    }

    public void setUpSale(boolean upSale) {
        this.upSale = upSale;
    }

    @Column(name = "list_price", nullable = false)
    public double getListPrice() {
        return listPrice;
    }

    public void setListPrice(double listPrice) {
        this.listPrice = listPrice;
    }

    @Column(name = "sale_price", nullable = false)
    public double getSalePrice() {
        return salePrice;
    }

    public void setSalePrice(double salePrice) {
        this.salePrice = salePrice;
    }

    @Column(name = "quantity", nullable = false)
    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Column(name = "image", nullable = false)
    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Column(name = "product_id", nullable = false, insertable = false, updatable = false)
    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", nullable = false)
    @JsonIgnore
    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "baseSKU")

    public Set<ConfProperty> getConfProperties() {
        return confProperties;
    }

    public void setConfProperties(Set<ConfProperty> confProperties) {
        this.confProperties = confProperties;
    }

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "sku")
    public Set<CommerceItem> getCommerceItems() {
        return commerceItems;
    }

    public void setCommerceItems(Set<CommerceItem> commerceItems) {
        this.commerceItems = commerceItems;
    }
}
