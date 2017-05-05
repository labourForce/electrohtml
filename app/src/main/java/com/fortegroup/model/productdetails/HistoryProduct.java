package com.fortegroup.model.productdetails;

import com.fortegroup.model.accounts.User;
import com.fortegroup.model.productdetails.Product;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by ux501 on 04.05.2017.
 */
@Entity
@Table(name = "product_history", schema = "electro", catalog = "postgres")
public class HistoryProduct {
    private int id;
    private User user;
    private Product product;
    private Timestamp timestampVisit;

    public HistoryProduct() {
    }

    public HistoryProduct(User user, Product product, Timestamp timestampVisit) {
        this.user = user;
        this.product = product;
        this.timestampVisit = timestampVisit;
    }

    @Id
    @Column(name = "id", nullable = false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @JoinColumn(name = "user_id")
    @ManyToOne(optional = true, fetch = FetchType.LAZY)
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @JoinColumn(name = "product_id")
    @OneToOne(optional = true, fetch = FetchType.LAZY)
    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    @Basic
    @Column(name = "timestamp_visit", nullable = false)
    public Timestamp getTimestampVisit() {
        return timestampVisit;
    }

    public void setTimestampVisit(Timestamp timestampVisit) {
        this.timestampVisit = timestampVisit;
    }


}
