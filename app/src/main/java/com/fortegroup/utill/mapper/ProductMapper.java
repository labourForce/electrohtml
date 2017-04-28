package com.fortegroup.utill.mapper;

import com.fortegroup.model.dto.ProductDTO;
import com.fortegroup.model.productdetails.Product;

/**
 *
 * @author Artyom Kazakov
 * @version 1.0
 */
public final class ProductMapper {
    private ProductMapper(){}

    public static ProductDTO toDtoProduct(Product product){
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
        return productDTO;
    }
}
