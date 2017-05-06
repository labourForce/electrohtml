package com.fortegroup.dao.productdetails;

import com.fortegroup.model.productdetails.Product;
import com.fortegroup.model.productdetails.HistoryProduct;

import java.util.List;

/**
 * @author Eugene Pankov
 * @verson 1.0
 */
public interface HistoryProductDAO {

    Long addHistoryProduct(HistoryProduct historyProduct);

    List<Product> getUserProducts(Long userId);

    void updateHistoryProduct(HistoryProduct historyProduct);

    HistoryProduct getHistoryProduct(Long userId, Long prouctId);
}
