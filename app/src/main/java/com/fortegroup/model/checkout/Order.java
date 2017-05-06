package com.fortegroup.model.checkout;

public class Order {

    private Long id;
    private Long userId;
    private String status;
    private int Amount;
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
    private Integer cardNumber;
    private Integer CVV;

    public Order() {
    }

    public Order(Long id, Long userId, String status, int amount, String firstName, String lastName, String companyName, String email, String billingPhoneNumber, String billingCountry, String billingAddress, Integer billingZIP, String billingCity, String billingNotes, String shippingPhoneNumber, String shippingCountry, String shippingAddress, Integer shippingZIP, String shippingCity, String cardName, Integer cardNumber, Integer CVV) {
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getAmount() {
        return Amount;
    }

    public void setAmount(int amount) {
        Amount = amount;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBillingPhoneNumber() {
        return billingPhoneNumber;
    }

    public void setBillingPhoneNumber(String billingPhoneNumber) {
        this.billingPhoneNumber = billingPhoneNumber;
    }

    public String getBillingCountry() {
        return billingCountry;
    }

    public void setBillingCountry(String billingCountry) {
        this.billingCountry = billingCountry;
    }

    public String getBillingAddress() {
        return billingAddress;
    }

    public void setBillingAddress(String billingAddress) {
        this.billingAddress = billingAddress;
    }

    public Integer getBillingZIP() {
        return billingZIP;
    }

    public void setBillingZIP(Integer billingZIP) {
        this.billingZIP = billingZIP;
    }

    public String getBillingCity() {
        return billingCity;
    }

    public void setBillingCity(String billingCity) {
        this.billingCity = billingCity;
    }

    public String getBillingNotes() {
        return billingNotes;
    }

    public void setBillingNotes(String billingNotes) {
        this.billingNotes = billingNotes;
    }

    public String getShippingPhoneNumber() {
        return shippingPhoneNumber;
    }

    public void setShippingPhoneNumber(String shippingPhoneNumber) {
        this.shippingPhoneNumber = shippingPhoneNumber;
    }

    public String getShippingCountry() {
        return shippingCountry;
    }

    public void setShippingCountry(String shippingCountry) {
        this.shippingCountry = shippingCountry;
    }

    public String getShippingAddress() {
        return shippingAddress;
    }

    public void setShippingAddress(String shippingAddress) {
        this.shippingAddress = shippingAddress;
    }

    public Integer getShippingZIP() {
        return shippingZIP;
    }

    public void setShippingZIP(Integer shippingZIP) {
        this.shippingZIP = shippingZIP;
    }

    public String getShippingCity() {
        return shippingCity;
    }

    public void setShippingCity(String shippingCity) {
        this.shippingCity = shippingCity;
    }

    public String getCardName() {
        return cardName;
    }

    public void setCardName(String cardName) {
        this.cardName = cardName;
    }

    public Integer getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(Integer cardNumber) {
        this.cardNumber = cardNumber;
    }

    public Integer getCVV() {
        return CVV;
    }

    public void setCVV(Integer CVV) {
        this.CVV = CVV;
    }
}
