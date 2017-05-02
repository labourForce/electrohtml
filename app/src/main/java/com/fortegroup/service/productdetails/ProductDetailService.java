package com.fortegroup.service.productdetails;

import com.fortegroup.model.productdetails.Product;
import org.springframework.stereotype.Service;

public interface ProductDetailService {
    Product getProductById(long id);

}
