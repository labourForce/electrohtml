package com.fortegroup.model.dto;

/**
 * Created by PC on 02.05.2017.
 */
public class ConfOptionDTO {
    private Long id;
    private String optionName;
    private Long propertyId;

    private ConfPropertyDTO confProperty;
    private VariableSKUDTO variableSKU;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getOptionName() {
        return optionName;
    }

    public void setOptionName(String optionName) {
        this.optionName = optionName;
    }

    public Long getPropertyId() {
        return propertyId;
    }

    public void setPropertyId(Long propertyId) {
        this.propertyId = propertyId;
    }

    public ConfPropertyDTO getConfProperty() {
        return confProperty;
    }

    public void setConfProperty(ConfPropertyDTO confProperty) {
        this.confProperty = confProperty;
    }

    public VariableSKUDTO getVariableSKU() {
        return variableSKU;
    }

    public void setVariableSKU(VariableSKUDTO variableSKU) {
        this.variableSKU = variableSKU;
    }
}
