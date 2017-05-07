package com.forte.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fortegroup.model.shoppingCart.CommerceItemProperties;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "electro.variable_sku")
public class VariableSKU {

    private Long id;
    private String name;
    private String displayName;
    private boolean availability;
    private boolean displayFlag;
    private String longDescription;
    private String shortDescription;
    private String brand;
    private String techline;
    private double listPrice;
    private double salePrice;
    private Long confOptionId;
    private ConfOption confOption;
    private Set<CommerceItemProperties> commerceItemProperties = new HashSet<>();


    public VariableSKU() {
    }

    public VariableSKU(String name, String displayName, boolean availability, boolean displayFlag, String longDescription, String shortDescription, String brand, String techline, double listPrice, double salePrice, Long confOptionId, ConfOption confOption) {
        this.name = name;
        this.displayName = displayName;
        this.availability = availability;
        this.displayFlag = displayFlag;
        this.longDescription = longDescription;
        this.shortDescription = shortDescription;
        this.brand = brand;
        this.techline = techline;
        this.listPrice = listPrice;
        this.salePrice = salePrice;
        this.confOptionId = confOptionId;
        this.confOption = confOption;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    @Column(name = "conf_option_id", nullable = false)
    public Long getConfOptionId() {
        return confOptionId;
    }

    public void setConfOptionId(Long confOptionId) {
        this.confOptionId = confOptionId;
    }

    @OneToOne(fetch = FetchType.LAZY)
    @PrimaryKeyJoinColumn
    @JsonIgnore
    public ConfOption getConfOption() {
        return confOption;
    }

    public void setConfOption(ConfOption confOption) {
        this.confOption = confOption;
    }

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "variableSKU")
    public Set<CommerceItemProperties> getCommerceItemProperties() {
        return commerceItemProperties;
    }

    public void setCommerceItemProperties(Set<CommerceItemProperties> commerceItemProperties) {
        this.commerceItemProperties = commerceItemProperties;
    }
}
