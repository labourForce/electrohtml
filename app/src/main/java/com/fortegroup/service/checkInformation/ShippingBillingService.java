package com.fortegroup.service.checkInformation;


import com.fortegroup.model.checkInformation.RequestShippingBilling;
import com.fortegroup.model.checkInformation.ResponseError;
import com.fortegroup.model.checkInformation.ShippingBilling;

/**
 * Created by PC on 28.04.2017.
 */
public interface ShippingBillingService {

    ResponseError validateInputData(RequestShippingBilling sb);
}
