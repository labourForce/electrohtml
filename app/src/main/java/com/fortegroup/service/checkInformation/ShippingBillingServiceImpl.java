package com.fortegroup.service.checkInformation;
import com.fortegroup.model.checkout.ShippingBilling;
import org.springframework.stereotype.Service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by PC on 28.04.2017.
 */
@Service(value = "checkInformationSB")
public class ShippingBillingServiceImpl implements ShippingBillingService {
    private final String regName = "[a-zA-Z]{2,10}$";
    private final String regNameCompany = "^([a-zA-Z0-9]+)";
    private final String regEmail = "^([a-z0-9_\\.-]+)@([a-z0-9_\\.-]+)\\.([a-z\\.]{2,6})$";
    private final String regNumber = "^\\d{3}\\d{2}\\d{3}\\d{2}\\d{2}$";
    private final String regAddress = "^[a-zA-Z]{2,30}$";
    private final String regPostCode = "[a-zA-Z0-9]{1,20}$";
    private final String regCityCounty = "[a-zA-Z]+";

    public ShippingBillingServiceImpl() {
    }

    @Override
    public String validateInputData(ShippingBilling sb) {
        Pattern pFirstName = Pattern.compile(regName);
        StringBuffer error = new StringBuffer();
        if(sb.getFirstName() != null) {
            Matcher mFirstName = pFirstName.matcher(sb.getFirstName());
            if (!mFirstName.matches()) {
                error = error.append("firstName");
            }
        }
        if(sb.getLastName() != null) {
            Matcher mLastName = pFirstName.matcher(sb.getLastName());
            if (!mLastName.matches()) {
                if(!error.toString().isEmpty()){
                    error = error.append(",");
                }
                error = error.append("lastName");
            }
        }
        Pattern pCompanyName = Pattern.compile(regNameCompany);
        if(sb.getCompanyName() != null) {
            Matcher mCompanyName = pCompanyName.matcher(sb.getCompanyName());
            if (!mCompanyName.matches()) {
                if(!error.toString().isEmpty()){
                    error = error.append(",");
                }
                error = error.append("companyName");
            }
        }
        Pattern pEmail = Pattern.compile(regEmail);
        if(sb.getEmail() != null) {
            Matcher mEmail = pEmail.matcher(sb.getEmail());
            if (!mEmail.matches()) {
                if(!error.toString().isEmpty()){
                    error = error.append(",");
                }
                error = error.append("email");
            }
        }
        Pattern pNumber = Pattern.compile(regNumber);
        if(sb.getPhone() != null) {
            Matcher mNumber = pNumber.matcher(sb.getPhone());
            if (!mNumber.matches()) {
                if(!error.toString().isEmpty()){
                    error = error.append(",");
                }
                error = error.append("number");
            }
        }
        Pattern pAddress = Pattern.compile(regAddress);
        if(sb.getAddress() != null) {
            Matcher mAddress = pAddress.matcher(sb.getAddress());
            if (!mAddress.matches()) {
                if(!error.toString().isEmpty()){
                    error = error.append(",");
                }
                error = error.append("address");
            }
        }
        Pattern pPostCode = Pattern.compile(regPostCode);
        if(sb.getZip() != null) {
            Matcher mPostCode = pPostCode.matcher(sb.getZip());
            if (!mPostCode.matches()) {
                if(!error.toString().isEmpty()){
                    error = error.append(",");
                }
                error = error.append("zip");
            }
        }
        Pattern pCity = Pattern.compile(regCityCounty);
        if(sb.getCity() != null) {
            Matcher mCity = pCity.matcher(sb.getCity());
            if (!mCity.matches()) {
                if(!error.toString().isEmpty()){
                    error = error.append(",");
                }
                error = error.append("city");
            }
        }
        Pattern pCounty = Pattern.compile(regCityCounty);
        if(sb.getCountry() != null) {
            Matcher mCountry = pCounty.matcher(sb.getCountry());
            if (!mCountry.matches()) {
                if(!error.toString().isEmpty()){
                    error = error.append(",");
                }
                error = error.append("country");
            }
        }
        return error.toString();
    }
}
