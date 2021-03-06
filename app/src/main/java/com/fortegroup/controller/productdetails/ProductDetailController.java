package com.fortegroup.controller.productdetails;

import com.fortegroup.model.dto.*;
import com.fortegroup.service.productdetails.HistoryProductService;
import com.fortegroup.service.productdetails.ProductDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@RestController
@RequestMapping(value = "/rest/product")
public class ProductDetailController {
    @Autowired
    private ProductDetailService productDetailService;

    @Autowired
    private HistoryProductService historyProductService;

    @RequestMapping(value = "/getProduct", params = "id", method = RequestMethod.GET)
    public ResponseEntity<?> getDetails(HttpServletRequest req, @RequestParam("id") String id) {
        Pattern p = Pattern.compile("[\\d]+");
        Matcher m = p.matcher(id);
        if (m.matches()) {
            try {
                ProductDTO product = productDetailService.getProductById(Integer.parseInt(id));
                product.setBaseSKU(null);
                // Add product to user's product history
                Long userId = (Long)req.getAttribute("id");
                if (userId != null) {
                    historyProductService.addProductToHistory(userId, product.getId());
                }

                return ResponseEntity.ok(product);
            } catch (NullPointerException e) {
            }
        }
        return ResponseEntity.badRequest().header("NetworkError: 400 Bad Request - http://192.168.1.207:8181/rest/product/getProduct/" + id).body("400 Bad Request");
    }

    @RequestMapping(value = "/getAdditionalInfo", params = "id", method = RequestMethod.GET)
    public ResponseEntity<?> getAdditionalInfo(@RequestParam("id") String id) {
        Pattern p = Pattern.compile("[\\d]+");
        Matcher m = p.matcher(id);
        if (m.matches()) {
            try {
                ProductDTO product = productDetailService.getProductById(Integer.parseInt(id));
                Set<BaseSKUDTO> SKUs = product.getBaseSKU();
                return  ResponseEntity.ok(SKUs);
            } catch (NullPointerException e) {}
        }
        return ResponseEntity.badRequest().header("NetworkError: 400 Bad Request - http://192.168.1.207:8181/rest/product/getProduct/" + id).body("400 Bad Request");
    }
}
