package com.fortegroup.model.productdetails;

import com.fortegroup.model.category.Category;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "electro.product")
public class Product implements java.io.Serializable {

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
    private String image;
    private Integer rootCategoryId;
    private Set<BaseSKU> baseSKUs = new HashSet<>(0);
    private Set<Category> categories = new HashSet<>(0);


    public Product() {
    }

    public Product(String name, String displayName, Integer rating, boolean availability, boolean displayFlag, String longDescription, String shortDescription, String brand, String techline, boolean onSale, boolean upSale, double listPrice, double salePrice, String image, Integer rootCategoryId, Set<BaseSKU> baseSKUs) {
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
        this.image = image;
        this.rootCategoryId = rootCategoryId;
        this.baseSKUs = baseSKUs;
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
    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
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

    @Column(name = "image", nullable = false)
    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Column(name = "root_category_id", nullable = false)
    public Integer getRootCategoryId() {
        return rootCategoryId;
    }

    public void setRootCategoryId(Integer rootCategoryId) {
        this.rootCategoryId = rootCategoryId;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "product")
    public Set<BaseSKU> getBaseSKUs() {
        return this.baseSKUs;
    }

    public void setBaseSKUs(Set<BaseSKU> baseSKUs) {
        this.baseSKUs = baseSKUs;
    }

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "electro.category_product", joinColumns = {
            @JoinColumn(name = "product_id", nullable = false, updatable = false) },
            inverseJoinColumns = { @JoinColumn(name = "parent_category_id",
                    nullable = false, updatable = false) })
    public Set<Category> getCategories() {
        return categories;
    }

    public void setCategories(Set<Category> categories) {
        this.categories = categories;
    }
}
