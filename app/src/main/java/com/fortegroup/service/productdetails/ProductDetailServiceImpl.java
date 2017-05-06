package com.fortegroup.service.productdetails;

import com.fortegroup.dao.productdetails.ProductDetailDao;
import com.fortegroup.model.dto.*;
import com.fortegroup.model.productdetails.*;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Set;
import java.util.stream.Collectors;

@Service(value = "appProductDetailService")
public class ProductDetailServiceImpl implements ProductDetailService {

    @Autowired
    private ProductDetailDao productDetailDao;

    @Autowired
    private ModelMapper modelMapper;

    @Transactional
    @Override
    public ProductDTO getProductById(long id) {
        Product product = productDetailDao.getProductById(id);
        Set<BaseSKU> SKUs = product.getBaseSKUs();
        Set<BaseSKUDTO> SKUsDTO = SKUs.stream().map(baseSKU -> {
            Set<ConfProperty> confPropertys = baseSKU.getConfProperties();
            confPropertys.stream().map(confProperty -> {
                Set<ConfOption> confOptions = confProperty.getConfOptions();
                confOptions.stream().map(confOption -> {
                    confOption.setVariableSKU(confOption.getVariableSKU());
                    return convertToDto(confOption);
                }).collect(Collectors.toSet());
                return convertToDto(confProperty);
            }).collect((Collectors.toSet()));
            return convertToDto(baseSKU);
        }).collect(Collectors.toSet());
        ProductDTO productDTO = convertToDto(product);
        productDTO.setBaseSKU(SKUsDTO);
        return productDTO;
    }

    private ProductDTO convertToDto(Product product) {
        ProductDTO productDTO = modelMapper.map(product, ProductDTO.class);
        return productDTO;
    }

    private VariableSKUDTO convertToDto(VariableSKU varSKU) {
        VariableSKUDTO varDTO = modelMapper.map(varSKU, VariableSKUDTO.class);
        return varDTO;
    }

    private ConfOptionDTO convertToDto(ConfOption confSKU) {
        ConfOptionDTO confDTO = modelMapper.map(confSKU, ConfOptionDTO.class);
        confDTO.setVariableSKU(convertToDto(confSKU.getVariableSKU()));
        return confDTO;
    }

    private BaseSKUDTO convertToDto(BaseSKU baseSKU) {
        BaseSKUDTO baseDTO = modelMapper.map(baseSKU, BaseSKUDTO.class);
        return baseDTO;
    }

    private ConfPropertyDTO convertToDto(ConfProperty confSKU) {
        ConfPropertyDTO confDTO = modelMapper.map(confSKU, ConfPropertyDTO.class);
        return confDTO;
    }

}
