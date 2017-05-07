package com.fortegroup.model.checkout;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fortegroup.model.accounts.User;
import com.fortegroup.model.shoppingCart.CommerceItem;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "electro.order")
public class Order {

    private Long id;
    private Long userId;
    private String status;
    private Integer Amount;
    private String firstName;
    private String lastName;
    private String companyName;
    private String email;

    private String billingPhoneNumber;
    private String billingCountry;
    private String billingAddress;
    private Integer billingZIP;
    private String billingCity;
    private String billingNotes;

    private String shippingPhoneNumber;
    private String shippingCountry;
    private String shippingAddress;
    private Integer shippingZIP;
    private String shippingCity;

    private String cardName;
    private String cardNumber;
    private Integer CVV;

    private User user;
    private Set<CommerceItem> commerceItems;

    public Order() {
    }

    public Order(Long id, Long userId, String status, Integer amount, String firstName, String lastName, String companyName, String email, String billingPhoneNumber, String billingCountry, String billingAddress, Integer billingZIP, String billingCity, String billingNotes, String shippingPhoneNumber, String shippingCountry, String shippingAddress, Integer shippingZIP, String shippingCity, String cardName, String cardNumber, Integer CVV) {
        this.id = id;
        this.userId = userId;
        this.status = status;
        Amount = amount;
        this.firstName = firstName;
        this.lastName = lastName;
        this.companyName = companyName;
        this.email = email;
        this.billingPhoneNumber = billingPhoneNumber;
        this.billingCountry = billingCountry;
        this.billingAddress = billingAddress;
        this.billingZIP = billingZIP;
        this.billingCity = billingCity;
        this.billingNotes = billingNotes;
        this.shippingPhoneNumber = shippingPhoneNumber;
        this.shippingCountry = shippingCountry;
        this.shippingAddress = shippingAddress;
        this.shippingZIP = shippingZIP;
        this.shippingCity = shippingCity;
        this.cardName = cardName;
        this.cardNumber = cardNumber;
        this.CVV = CVV;
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

    @Column(name = "user_id", nullable = false)
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    @Column(name = "status", nullable = false)
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Column(name = "amount", nullable = false)
    public Integer getAmount() {
        return Amount;
    }

    public void setAmount(Integer amount) {
        Amount = amount;
    }

    @Column(name = "fname", nullable = false)
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Column(name = "lname", nullable = false)
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Column(name = "company_name", nullable = false)
    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    @Column(name = "email", nullable = false)
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Column(name = "b_phone_number", nullable = false)
    public String getBillingPhoneNumber() {
        return billingPhoneNumber;
    }

    public void setBillingPhoneNumber(String billingPhoneNumber) {
        this.billingPhoneNumber = billingPhoneNumber;
    }

    @Column(name = "b_country", nullable = false)
    public String getBillingCountry() {
        return billingCountry;
    }

    public void setBillingCountry(String billingCountry) {
        this.billingCountry = billingCountry;
    }

    @Column(name = "b_address", nullable = false)
    public String getBillingAddress() {
        return billingAddress;
    }

    public void setBillingAddress(String billingAddress) {
        this.billingAddress = billingAddress;
    }

    @Column(name = "b_zip", nullable = false)
    public Integer getBillingZIP() {
        return billingZIP;
    }

    public void setBillingZIP(Integer billingZIP) {
        this.billingZIP = billingZIP;
    }

    @Column(name = "b_city", nullable = false)
    public String getBillingCity() {
        return billingCity;
    }

    public void setBillingCity(String billingCity) {
        this.billingCity = billingCity;
    }

    @Column(name = "b_notes", nullable = false)
    public String getBillingNotes() {
        return billingNotes;
    }

    public void setBillingNotes(String billingNotes) {
        this.billingNotes = billingNotes;
    }

    @Column(name = "s_phone_number", nullable = false)
    public String getShippingPhoneNumber() {
        return shippingPhoneNumber;
    }

    public void setShippingPhoneNumber(String shippingPhoneNumber) {
        this.shippingPhoneNumber = shippingPhoneNumber;
    }

    @Column(name = "s_country", nullable = false)
    public String getShippingCountry() {
        return shippingCountry;
    }

    public void setShippingCountry(String shippingCountry) {
        this.shippingCountry = shippingCountry;
    }

    @Column(name = "s_address", nullable = false)
    public String getShippingAddress() {
        return shippingAddress;
    }

    public void setShippingAddress(String shippingAddress) {
        this.shippingAddress = shippingAddress;
    }

    @Column(name = "s_zip", nullable = false)
    public Integer getShippingZIP() {
        return shippingZIP;
    }

    public void setShippingZIP(Integer shippingZIP) {
        this.shippingZIP = shippingZIP;
    }

    @Column(name = "s_city", nullable = false)
    public String getShippingCity() {
        return shippingCity;
    }

    public void setShippingCity(String shippingCity) {
        this.shippingCity = shippingCity;
    }

    @Column(name = "card_name", nullable = false)
    public String getCardName() {
        return cardName;
    }

    public void setCardName(String cardName) {
        this.cardName = cardName;
    }

    @Column(name = "card_number", nullable = false)
    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    @Column(name = "cvv", nullable = false)
    public Integer getCVV() {
        return CVV;
    }

    public void setCVV(Integer CVV) {
        this.CVV = CVV;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false, insertable = false, updatable = false)
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "order")
    public Set<CommerceItem> getCommerceItems() {
        return commerceItems;
    }

    public void setCommerceItems(Set<CommerceItem> commerceItems) {
        this.commerceItems = commerceItems;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", userId=" + userId +
                ", status='" + status + '\'' +
                ", Amount=" + Amount;
    }
}
