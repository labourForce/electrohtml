package com.fortegroup.model.dto;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 *
 * @author Artyom Kazakov
 * @version 1.0
 */
public class ProductDTO implements Serializable {
    private Long id;
    private String name;
    private String displayName;
    private int rating;
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
    private int rootCategoryId;
    private Set<BaseSKUDTO> baseSKUDTOS;

    public Set<BaseSKUDTO> getBaseSKUDTOS() {
        return baseSKUDTOS;
    }

    public void setBaseSKUDTOS(Set<BaseSKUDTO> baseSKUDTOS) {
        this.baseSKUDTOS = baseSKUDTOS;
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
