package com.fortegroup.model.productdetails;


import com.fortegroup.dao.productdetails.StringJsonUserType;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;
import org.hibernate.annotations.TypeDefs;

import javax.persistence.*;

@Entity
@Table(name = "electro.variable_sku")
@TypeDefs( {@TypeDef( name= "StringJsonObject", typeClass = StringJsonUserType.class)})
public class VariableSKU {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "display_name", nullable = false)
    private String displayName;
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
    @Column(name = "list_price", nullable = false)
    private double listPrice;
    @Column(name = "sale_price", nullable = false)
    private double salePrice;
    @Column(name = "conf_option_id", nullable = false)
    private int confOptionId;

    public VariableSKU() {
    }

    public VariableSKU(String name, String displayName, boolean availability, boolean displayFlag, String longDescription, String shortDescription, String brand, String techline, double listPrice, double salePrice, int confOptionId) {
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

    public int getConfOptionId() {
        return confOptionId;
    }

    public void setConfOptionId(int confOptionId) {
        this.confOptionId = confOptionId;
    }
}
