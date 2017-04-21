package com.fortegroup.model;

import com.fortegroup.dao.implementation.JSONType.StringJsonUserType;

import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;
import org.hibernate.annotations.TypeDefs;

import javax.persistence.*;

/**
 * Created by PC on 21.04.2017.
 */
@Entity
@Table(name = "electro.product")
@TypeDefs( {@TypeDef( name= "StringJsonObject", typeClass = StringJsonUserType.class)})
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "display_name", nullable = false)
    private String displayName;
    @Column(name = "rating", nullable = false)
    private int rating;
    @Column(name = "availability", nullable = false)
    private boolean availability;
    @Column(name = "display_flag", nullable = false)
    private boolean displayFlag;
    @Column(name = "long_description", nullable = false)
    private String longDescription;
    @Column(name = "short_description", nullable = false)
    private String shortDescription;
    @Column(name = "brand", nullable = false)
    private String brand;
    @Column(name = "techline", nullable = false)
    @Type(type = "StringJsonObject")
    private String techline;
    @Column(name = "on_sale", nullable = false)
    private boolean onSale;
    @Column(name = "upsale", nullable = false)
    private boolean upSale;
    @Column(name = "list_price", nullable = false)
    private double listPrice;
    @Column(name = "sale_price", nullable = false)
    private double salePrice;
    @Column(name = "image", nullable = false)
    private String image;
    @Column(name = "root_category_id", nullable = false)
    private int rootCategoryId;

    public Product() {
    }

    public Product(String name, String displayName, int rating, boolean availability, boolean displayFlag, String longDescription, String shortDescription, String brand, String techline, boolean onSale, boolean upSale, double listPrice, double salePrice, String image, int rootCategoryId) {
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
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public boolean isAvailability() {
        return availability;
    }

    public void setAvailability(boolean availability) {
        this.availability = availability;
    }

    public boolean isDisplayFlag() {
        return displayFlag;
    }

    public void setDisplayFlag(boolean displayFlag) {
        this.displayFlag = displayFlag;
    }

    public String getLongDescription() {
        return longDescription;
    }

    public void setLongDescription(String longDescription) {
        this.longDescription = longDescription;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getTechline() {
        return techline;
    }

    public void setTechline(String techline) {
        this.techline = techline;
    }

    public boolean isOnSale() {
        return onSale;
    }

    public void setOnSale(boolean onSale) {
        this.onSale = onSale;
    }

    public boolean isUpSale() {
        return upSale;
    }

    public void setUpSale(boolean upSale) {
        this.upSale = upSale;
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getRootCategoryId() {
        return rootCategoryId;
    }

    public void setRootCategoryId(int rootCategoryId) {
        this.rootCategoryId = rootCategoryId;
    }
}
