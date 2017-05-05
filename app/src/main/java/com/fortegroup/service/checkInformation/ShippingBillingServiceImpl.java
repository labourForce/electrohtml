package com.fortegroup.service.checkInformation;
import com.fortegroup.model.checkInformation.ResponseError;
import org.springframework.stereotype.Service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by PC on 28.04.2017.
 */
@Service(value = "checkInformationSB")
public class ShippinggetBillingServiceImpl implements ShippinggetBillingService {
    private final String regName = "[a-zA-Z]{2,10}$";
    private final String regNameCompany = "^([a-zA-Z0-9_\\ -]+)";
    private final String regEmail = "^([a-z0-9_\\.-]+)@([a-z0-9_\\.-]+)\\.([a-z\\.]{2,6})$";
    private final String regNumber = "^\\+\\d{3}\\(\\d{2}\\)\\d{3}-\\d{2}-\\d{2}$";
    private final String regAddress = "^([a-zA-Z]{2,30})\\s([0-9]{1,4})$";
    private final String regPostCode = "[a-zA-Z0-9]{1,20}$";
    private final String regCityCounty = "[a-zA-Z\\ -]+";

    public ShippinggetBillingServiceImpl() {
    }

    @Override
    public ResponseError validateInputData(RequestShippinggetBilling sb) {
        ResponseError responseError = new ResponseError();
        Pattern pFirstName = Pattern.compile(regName);
        if(sb.getBilling().getFirstName() != null) {
            Matcher mFirstName = pFirstName.matcher(sb.getBilling().getFirstName());
            if (mFirstName.matches()) {
                responseError.setFirstNameError(true);
            }
        }
        if(sb.getBilling().getLastName() != null) {
            Matcher mLastName = pFirstName.matcher(sb.getBilling().getLastName());
            if (mLastName.matches()) {
                responseError.setLastNameError(true);
            }
        }
        Pattern pCompanyName = Pattern.compile(regNameCompany);
        if(sb.getBilling().getCompanyName() != null) {
            Matcher mCompanyName = pCompanyName.matcher(sb.getBilling().getCompanyName());
            if (mCompanyName.matches()) {
                responseError.setCompanyNameError(true);
            }
        }
        Pattern pEmail = Pattern.compile(regEmail);
        if(sb.getBilling().getEmail() != null) {
            Matcher mEmail = pEmail.matcher(sb.getBilling().getEmail());
            if (mEmail.matches()) {
                responseError.setEmailError(true);
            }
        }
        Pattern pNumber = Pattern.compile(regNumber);
        if(sb.getBilling().getPhone() != null) {
            Matcher mNumber = pNumber.matcher(sb.getBilling().getPhone());
            if (mNumber.matches()) {
                responseError.setPhoneNumberError(true);
            }
        }
        Pattern pAddress = Pattern.compile(regAddress);
        if(sb.getBilling().getAddress() != null) {
            Matcher mAddress = pAddress.matcher(sb.getBilling().getAddress());
            if (mAddress.matches()) {
                responseError.setAddressError(true);
            }
        }
        Pattern pPostCode = Pattern.compile(regPostCode);
        if(sb.getBilling().getZip() != null) {
            Matcher mPostCode = pPostCode.matcher(sb.getBilling().getZip());
            if (mPostCode.matches()) {
                responseError.setZipCodeError(true);
            }
        }
        Pattern pCity = Pattern.compile(regCityCounty);
        if(sb.getBilling().getCity() != null) {
            Matcher mCity = pCity.matcher(sb.getBilling().getCity());
            if (mCity.matches()) {
                responseError.setCityError(true);
            }
        }
        Pattern pCounty = Pattern.compile(regCityCounty);
        if(sb.getBilling().getCountry() != null) {
            Matcher mCountry = pCounty.matcher(sb.getBilling().getCountry());
            if (mCountry.matches()) {
                responseError.setCountryError(true);
            }
        }
        return responseError;
    }
}
