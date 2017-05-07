package com.fortegroup.model.shoppingCart;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fortegroup.model.checkout.Order;
import com.fortegroup.model.productdetails.BaseSKU;
import com.fortegroup.model.productdetails.VariableSKU;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "electro.commerce_item")
public class CommerceItem {

    private Long id;
    private int quantity;
    private Long baseSkuId;
    private BaseSKU sku;
    private Set<CommerceItemProperties> commerceItemProperties = new HashSet<>();
//    private Set<ShoppingCartProperties> cartProperties = new HashSet<>();
//    private Set<VariableSKU> variableSKUS = new HashSet<>();
    private Long shoppingCartId;
    private ShoppingCart shoppingCart;

    private Long orderId;
    private Order order;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "quantity", nullable = false)
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Column(name = "base_sku_id", insertable = false, updatable = false)
    public Long getBaseSkuId() {
        return baseSkuId;
    }
    public void setBaseSkuId(Long basesKUId) {
        this.baseSkuId = basesKUId;
    }

//    @JsonManagedReference(value = "commerceitem-basesku")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "base_sku_id", nullable = false)
    public BaseSKU getSku() {
        return sku;
    }
    public void setSku(BaseSKU sku) {
        this.sku = sku;
    }

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "shopping_cart_id", nullable = false)
    public ShoppingCart getShoppingCart() {
        return shoppingCart;
    }

    public void setShoppingCart(ShoppingCart shoppingCart) {
        this.shoppingCart = shoppingCart;
    }


    @Column(name = "shopping_cart_id", nullable = false, insertable = false, updatable = false)
    public Long getShoppingCartId() {
        return shoppingCartId;
    }

    public void setShoppingCartId(Long shoppingCartId) {
        this.shoppingCartId = shoppingCartId;
    }


    //    @JsonManagedReference(value = "commerceitem-shoppingcartproperties")
//    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "item")
//    public Set<ShoppingCartProperties> getCartProperties() {
//        return cartProperties;
//    }
//
//    public void setCartProperties(Set<ShoppingCartProperties> cartProperties) {
//        this.cartProperties = cartProperties;
//    }
//
////    @JsonBackReference(value = "commerceitemproperties-commerceitem")

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "commerceItem")
    public Set<CommerceItemProperties> getCommerceItemProperties() {
        return commerceItemProperties;
    }
    public void setCommerceItemProperties(Set<CommerceItemProperties> properties) {
        this.commerceItemProperties = properties;
    }

    @Column(name = "order_id", nullable = false, insertable = false, updatable = false)
    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name = "order_id", nullable = false)
    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }



//    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    @JoinTable(name = "electro.commerce_item_properties", joinColumns = {
//            @JoinColumn(name = "commerce_item_id", nullable = false, updatable = false) },
//            inverseJoinColumns = { @JoinColumn(name = "variable_sku_id",
//                    nullable = false, updatable = false) })
//    public Set<VariableSKU> getVariableSKUS() {
//        return variableSKUS;
//    }
//
//    public void setVariableSKUS(Set<VariableSKU> variableSKUS) {
//        this.variableSKUS = variableSKUS;
//    }
}
