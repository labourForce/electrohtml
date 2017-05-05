package com.fortegroup.service.productdetails;

import com.fortegroup.dao.accounts.UserDao;
import com.fortegroup.dao.productdetails.HistoryProductDAO;
import com.fortegroup.dao.productdetails.ProductDetailDao;
import com.fortegroup.model.productdetails.HistoryProduct;
import com.fortegroup.model.productdetails.Product;
import org.springframework.beans.factory.annotation.Autowired;

import java.sql.Timestamp;
import java.util.List;

/**
 * @author Eugene Pankov
 * @verson 1.0
 */
public class HistoryProductServiceImpl implements HistoryProductService {
    @Autowired
    private HistoryProductDAO historyProductDAO;

    @Autowired
    private UserDao userDao;

    @Autowired
    private ProductDetailDao productDetailDao;

    @Override
    public void addProductToHistory(Long userId, Long productId) {
        List<Product> products = historyProductDAO.getUserProducts(userId);
        products.forEach(product -> {
            if (product.getId().equals(productId)) {
                historyProductDAO.updateHistoryProduct(historyProductDAO.getHistoryProduct(userId, productId));
            } else {
                historyProductDAO.addHistoryProduct(new HistoryProduct(userDao.get(userId),
                        productDetailDao.getProductById(productId), new Timestamp(System.currentTimeMillis())));
            }
        });
    }
}
