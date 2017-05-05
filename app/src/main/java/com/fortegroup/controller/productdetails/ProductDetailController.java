package com.fortegroup.controller.productdetails;

import com.fortegroup.model.dto.*;
import com.fortegroup.model.productdetails.BaseSKU;
import com.fortegroup.model.productdetails.ConfOption;
import com.fortegroup.model.productdetails.ConfProperty;
import com.fortegroup.model.productdetails.Product;
import com.fortegroup.model.shoppingCart.dto.ShoppingCartDTO;
import com.fortegroup.service.productdetails.HistoryProductService;
import com.fortegroup.service.productdetails.ProductDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashSet;
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
                Product product = productDetailService.getProductById(Integer.parseInt(id));

                ProductDTO productDTO = new ProductDTO();
                productDTO.setId(product.getId());
                productDTO.setName(product.getName());
                productDTO.setDisplayName(product.getDisplayName());
                productDTO.setRating(product.getRating());
                productDTO.setAvailability(product.isAvailability());
                productDTO.setDisplayFlag(product.isDisplayFlag());
                productDTO.setLongDescription(product.getLongDescription());
                productDTO.setShortDescription(product.getShortDescription());
                productDTO.setBrand(product.getBrand());
                productDTO.setTechline(product.getTechline());
                productDTO.setOnSale(product.isOnSale());
                productDTO.setUpSale(product.isUpSale());
                productDTO.setListPrice(product.getListPrice());
                productDTO.setSalePrice(product.getSalePrice());
                productDTO.setImage(product.getImage());
                productDTO.setRootCategoryId(product.getRootCategoryId());

                // Add product to user's product history
                Long userId = (Long) req.getAttribute("id");
                if (userId != null) {
                    historyProductService.addProductToHistory(userId, productDTO.getId());
                }

                return ResponseEntity.ok(productDTO);
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
                Product product = productDetailService.getProductById(Integer.parseInt(id));
                Set<BaseSKU> SKUs = product.getBaseSKUs();
                Set<BaseSKUDTO> SKUsDTO = new HashSet<>();
                for (BaseSKU line : SKUs) {
                    BaseSKUDTO baseSKUDTO = new BaseSKUDTO();
                    baseSKUDTO.setId(line.getId());
                    baseSKUDTO.setName(line.getName());
                    baseSKUDTO.setDisplayName(line.getDisplayName());
                    baseSKUDTO.setRating(line.getRating());
                    baseSKUDTO.setAvailability(line.isAvailability());
                    baseSKUDTO.setDisplayFlag(line.isDisplayFlag());
                    baseSKUDTO.setLongDescription(line.getLongDescription());
                    baseSKUDTO.setShortDescription(line.getShortDescription());
                    baseSKUDTO.setBrand(line.getBrand());
                    baseSKUDTO.setTechline(line.getTechline());
                    baseSKUDTO.setOnSale(line.isOnSale());
                    baseSKUDTO.setUpSale(line.isUpSale());
                    baseSKUDTO.setListPrice(line.getListPrice());
                    baseSKUDTO.setSalePrice(line.getSalePrice());
                    baseSKUDTO.setQuantity(line.getQuantity());
                    baseSKUDTO.setImage(line.getImage());
                    if (!line.getConfProperties().isEmpty()) {
                        Set<ConfPropertyDTO> confPropertyDTOS = new HashSet<>();
                        for (ConfProperty confProperty : line.getConfProperties()) {
                            ConfPropertyDTO confPropertyDTO = new ConfPropertyDTO();
                            confPropertyDTO.setId(confProperty.getId());
                            confPropertyDTO.setPropertyName(confProperty.getPropertyName());
                            Set<ConfOptionDTO> confOptionDTOS = new HashSet<>();
                            for (ConfOption confOption : confProperty.getConfOptions()) {
                                ConfOptionDTO confOptionDTO = new ConfOptionDTO();
                                confOptionDTO.setId(confOption.getId());
                                confOptionDTO.setOptionName(confOption.getOptionName());
                                VariableSKUDTO variableSKUDTO = new VariableSKUDTO();
                                variableSKUDTO.setId(confOption.getVariableSKU().getId());
                                variableSKUDTO.setName(confOption.getVariableSKU().getName());
                                variableSKUDTO.setDisplayName(confOption.getVariableSKU().getDisplayName());
                                variableSKUDTO.setAvailability(confOption.getVariableSKU().isAvailability());
                                variableSKUDTO.setDisplayFlag(confOption.getVariableSKU().isDisplayFlag());
                                variableSKUDTO.setLongDescription(confOption.getVariableSKU().getLongDescription());
                                variableSKUDTO.setShortDescription(confOption.getVariableSKU().getShortDescription());
                                variableSKUDTO.setBrand(confOption.getVariableSKU().getBrand());
                                variableSKUDTO.setTechline(confOption.getVariableSKU().getTechline());
                                variableSKUDTO.setListPrice(confOption.getVariableSKU().getListPrice());
                                variableSKUDTO.setSalePrice(confOption.getVariableSKU().getSalePrice());
                                confOptionDTO.setVariableSKU(variableSKUDTO);
                                confOptionDTOS.add(confOptionDTO);
                            }
                            confPropertyDTO.setConfOptions(confOptionDTOS);
                            confPropertyDTOS.add(confPropertyDTO);
                        }
                        baseSKUDTO.setConfProperties(confPropertyDTOS);
                    }
                    SKUsDTO.add(baseSKUDTO);
                }
                return  ResponseEntity.ok(SKUsDTO);
            } catch (NullPointerException e) {}
        }
        return ResponseEntity.badRequest().header("NetworkError: 400 Bad Request - http://192.168.1.207:8181/rest/product/getProduct/" + id).body("400 Bad Request");
    }
}
