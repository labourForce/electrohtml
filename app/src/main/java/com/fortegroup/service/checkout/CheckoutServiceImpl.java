package com.fortegroup.service.checkout;

import com.fortegroup.dao.accounts.UserDao;
import com.fortegroup.dao.checkout.CheckoutDao;
import com.fortegroup.dao.shoppingCart.ShoppingCartDao;
import com.fortegroup.model.checkout.Order;
import com.fortegroup.model.checkout.Request;
import com.fortegroup.model.checkout.Response;
import com.fortegroup.utill.PayPal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CheckoutServiceImpl implements CheckoutService{

    @Autowired
    private ShoppingCartDao shoppingCartDao;

    @Autowired
    private UserDao userDao;

    @Autowired
    private CheckoutDao checkoutDao;

    @Override
    @Transactional
    public Response checkout(Request request) {
        Response response;
        try {
            String amount = request.getPay().get("amount");
            String cardName = request.getPay().get("name");
            String cardNumber = request.getPay().get("cardNumber");
            String cardValidationNumber = request.getPay().get("cvv");
            String expirationData = request.getPay().get("date");
            response = PayPal.getResponseCode(amount, cardName, cardNumber, cardValidationNumber, expirationData);
        } catch (Exception e) {
            response = new Response("Data is not valid", false);
        }
        return response;
    }

    @Override
    @Transactional
    public void makeOrder(Request request, Long userId) {
        Order order = new Order();

        order.setUserId(userId);
        order.setStatus("Approved");
        order.setAmount(request.getPay().get("amount"));

        order.setFirstName(request.getBilling().get("firstName"));
        order.setLastName(request.getBilling().get("lastName"));
        order.setCompanyName(request.getBilling().get("companyName"));
        order.setEmail(request.getBilling().get("email"));

        order.setBillingPhoneNumber(request.getBilling().get("phone"));
        order.setBillingCountry(request.getBilling().get("country"));
        order.setBillingAddress(request.getBilling().get("address"));
        order.setBillingZIP(Integer.parseInt(request.getBilling().get("zip")));
        order.setBillingCity(request.getBilling().get("city"));
        order.setBillingNotes(request.getBilling().get("notes"));

        order.setShippingPhoneNumber(request.getShipping().get("number"));
        order.setShippingCountry(request.getShipping().get("country"));
        order.setShippingAddress(request.getShipping().get("address"));
        order.setShippingZIP(Integer.parseInt(request.getShipping().get("zip")));
        order.setShippingCity(request.getShipping().get("city"));

        order.setCardName(request.getPay().get("name"));
        order.setCardNumber(request.getPay().get("cardNumber"));
        order.setCVV(Integer.parseInt(request.getPay().get("cvv")));

        order.setUser(userDao.get(userId));

//        Set<Com>
//
//        order.setCommerceItems(shoppingCartDao.getShoppingCartByUserId(userId).getCartProperties());

    }

}
