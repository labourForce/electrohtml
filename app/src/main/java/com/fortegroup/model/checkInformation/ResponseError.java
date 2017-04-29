package com.fortegroup.model.checkInformation;

/**
 * Created by PC on 29.04.2017.
 */
public class ResponseError {
    private boolean firstNameError;
    private boolean lastNameError;
    private boolean companyNameError;
    private boolean emailError;
    private boolean phoneNumberError;
    private boolean  countryError;
    private boolean addressError;
    private boolean zipCodeError;
    private boolean cityError;

    public ResponseError(){}

    public boolean getFirstNameError() {
        return firstNameError;
    }

    public void setFirstNameError(boolean firstNameError) {
        this.firstNameError = firstNameError;
    }

    public boolean getLastNameError() {
        return lastNameError;
    }

    public void setLastNameError(boolean lastNameError) {
        this.lastNameError = lastNameError;
    }

    public boolean getCompanyNameError() {
        return companyNameError;
    }

    public void setCompanyNameError(boolean companyNameError) {
        this.companyNameError = companyNameError;
    }

    public boolean getEmailError() {
        return emailError;
    }

    public void setEmailError(boolean emailError) {
        this.emailError = emailError;
    }

    public boolean getPhoneNumberError() {
        return phoneNumberError;
    }

    public void setPhoneNumberError(boolean phoneNumberError) {
        this.phoneNumberError = phoneNumberError;
    }

    public boolean getCountryError() {
        return countryError;
    }

    public void setCountryError(boolean countryError) {
        this.countryError = countryError;
    }

    public boolean getAddressError() {
        return addressError;
    }

    public void setAddressError(boolean addressError) {
        this.addressError = addressError;
    }

    public boolean getZipCodeError() {
        return zipCodeError;
    }

    public void setZipCodeError(boolean zipCodeError) {
        this.zipCodeError = zipCodeError;
    }

    public boolean getCityError() {
        return cityError;
    }

    public void setCityError(boolean cityError) {
        this.cityError = cityError;
    }

}
