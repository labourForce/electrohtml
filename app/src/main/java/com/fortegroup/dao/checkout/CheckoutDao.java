package com.fortegroup.dao.checkout;

import com.fortegroup.model.checkout.Order;

public interface CheckoutDao {

    Order getOrderById(Long id);

}
