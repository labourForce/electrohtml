package com.fortegroup.model.shoppingCart;


import com.fortegroup.model.accounts.User;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "electro.shopping_cart")
public class ShoppingCart {

    private Long id;
    private Long userId;
    private User user;
    private Set<ShoppingCartProperties>cartProperties = new HashSet<>();

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "user_id", nullable = false, insertable = false, updatable = false)
    public Long getUserId() {
        return userId;
    }
    public void setUserId(Long userId) {
        this.userId = userId;
    }

//    @JsonManagedReference(value = "user-shoppingcart")
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }

//    @JsonManagedReference(value = "shoppingcart-shoppingcartproperties")
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "shoppingCart")
    public Set<ShoppingCartProperties> getCartProperties() {
        return cartProperties;
    }

    public void setCartProperties(Set<ShoppingCartProperties> cartProperties) {
        this.cartProperties = cartProperties;
    }
}
