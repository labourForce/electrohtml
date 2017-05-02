package com.fortegroup.service.checkInformation;

import com.fortegroup.model.checkInformation.ResponseError;
import com.fortegroup.model.checkInformation.ShippingBilling;
import java.util.HashSet;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by PC on 28.04.2017.
 */
public class ShippingBillingServiceImpl implements ShippingBillingService {
    private final String regName = "[a-zA-Z]{2,10}$";
    private final String regNameCompany = "^([a-zA-Z0-9_\\ -]+)";
    private final String regEmail = "^([a-z0-9_\\.-]+)@([a-z0-9_\\.-]+)\\.([a-z\\.]{2,6})$";
    private final String regNumber = "^\\+\\d{3}\\(\\d{2}\\)\\d{3}-\\d{2}-\\d{2}$";
    private final String regAddress = "^([a-zA-Z]{2,30})\\s([0-9]{1,4})$";
    private final Set<Enum> listPostCode = new HashSet<>();

    public ShippingBillingServiceImpl() {
    }

    @Override
    public ResponseError validateInputData(ShippingBilling sb) {
        ResponseError responseError = new ResponseError();
        Pattern pFirstName = Pattern.compile(regName);
        Matcher mFirstName = pFirstName.matcher(sb.getFirstName());
        if (mFirstName.matches()) {
            responseError.setFirstNameError(true);
        }
        Matcher mLastName = pFirstName.matcher(sb.getLastName());
        if (mLastName.matches()) {
            responseError.setLastNameError(true);
        }
        Pattern pCompanyName = Pattern.compile(regNameCompany);
        Matcher mCompanyName = pCompanyName.matcher(sb.getCompanyName());
        if (mCompanyName.matches()) {
            responseError.setCompanyNameError(true);
        }
        Pattern pEmail = Pattern.compile(regEmail);
        Matcher mEmail = pEmail.matcher(sb.getEmail());
        if (mEmail.matches()) {
            responseError.setEmailError(true);
        }
        Pattern pNumber = Pattern.compile(regNumber);
        Matcher mNumber = pNumber.matcher(sb.getPhoneNumber());
        if (mNumber.matches()) {
            responseError.setPhoneNumberError(true);
        }
        Pattern pAddress = Pattern.compile(regAddress);
        Matcher mAddress = pAddress.matcher(sb.getAddress());
        if (mAddress.matches()) {
            responseError.setAddressError(true);
        }

        return responseError;
    }
}
