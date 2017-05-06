package com.fortegroup.model.shoppingCart;


import com.fortegroup.model.productdetails.VariableSKU;

import javax.persistence.*;

@Entity
@Table (name = "electro.commerce_item_properties")
public class CommerceItemProperties {


    private Long id;

    private Long commerceItemId;

    private Long variableSkuId;

    private CommerceItem commerceItem;

    private VariableSKU variableSKU;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "id", unique = true, nullable = false)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    @Column (name = "commerce_item_id", nullable = false, insertable = false, updatable = false)
    public Long getCommerceItemId() {
        return commerceItemId;
    }

    public void setCommerceItemId(Long commerceItemId) {
        this.commerceItemId = commerceItemId;
    }
    @Column (name = "variable_sku_id", nullable = false, insertable = false, updatable = false)
    public Long getVarialbeSkuId() {
        return variableSkuId;
    }

    public void setVarialbeSkuId(Long varialbeSkuId) {
        this.variableSkuId = varialbeSkuId;
    }


//    @JsonManagedReference(value = "commerceitemproperties-commerceitem")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "commerce_item_id", nullable = false)
    public CommerceItem getCommerceItem() {
        return commerceItem;
    }
    public void setCommerceItem(CommerceItem commerceItem) {
        this.commerceItem = commerceItem;
    }

//    @JsonManagedReference(value = "commerceitemproperties-variablesku")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "variable_sku_id", nullable = false)
    public VariableSKU getVariableSKU() {
        return variableSKU;
    }
    public void setVariableSKU(VariableSKU variableSKU) {
        this.variableSKU = variableSKU;
    }

}
