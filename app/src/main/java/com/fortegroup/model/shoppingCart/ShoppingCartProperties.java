package com.fortegroup.model.shoppingCart;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "electro.shopping_cart_properties")
public class ShoppingCartProperties {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
    private Long id;
    @Column(name = "commerce_item_id", nullable = false, insertable = false, updatable = false)
    private Long commerceItemId;
    @Column(name = "shopping_cart_id", nullable = false, insertable = false, updatable = false)
    private Long shoppingCartId;

//    @JsonBackReference(value = "shoppingcart-shoppingcartproperties")
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "shopping_cart_id", nullable = false)
    private ShoppingCart shoppingCart;

//    @JsonBackReference(value = "commerceitem-shoppingcartproperties")
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "commerce_item_id", nullable = false)
    private CommerceItem item;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCommerceItemId() {
        return commerceItemId;
    }

    public void setCommerceItemId(Long commerceItemId) {
        this.commerceItemId = commerceItemId;
    }

    public Long getShoppingCartId() {
        return shoppingCartId;
    }

    public void setShoppingCartId(Long shoppingCartId) {
        this.shoppingCartId = shoppingCartId;
    }

    public ShoppingCart getShoppingCart() {
        return shoppingCart;
    }

    public void setShoppingCart(ShoppingCart shoppingCart) {
        this.shoppingCart = shoppingCart;
    }

    public CommerceItem getItem() {
        return item;
    }

    public void setItem(CommerceItem item) {
        this.item = item;
    }
}
