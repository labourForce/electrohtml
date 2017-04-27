package com.fortegroup.model.productdetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fortegroup.dao.productdetails.StringJsonUserType;
import org.hibernate.annotations.TypeDef;
import org.hibernate.annotations.TypeDefs;

import javax.persistence.*;

@Entity
@Table(name = "electro.conf_option")
@TypeDefs( {@TypeDef( name= "StringJsonObject", typeClass = StringJsonUserType.class)})
public class ConfOption {

    private Long id;
    private String optionName;
    private Long propertyId;

    private ConfProperty confProperty;
    private VariableSKU variableSKU;

    public ConfOption() {
    }

    public ConfOption(Long id, String optionName, Long propertyId, ConfProperty confProperty, VariableSKU variableSKU) {
        this.id = id;
        this.optionName = optionName;
        this.propertyId = propertyId;
        this.confProperty = confProperty;
        this.variableSKU = variableSKU;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "option_name", nullable = false)
    public String getOptionName() {
        return optionName;
    }

    public void setOptionName(String optionName) {
        this.optionName = optionName;
    }

    @Column(name = "property_id", nullable = false, insertable = false, updatable = false)
    public Long getPropertyId() {
        return propertyId;
    }

    public void setPropertyId(Long propertyId) {
        this.propertyId = propertyId;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "property_id", nullable = false)
    @JsonIgnore
    public ConfProperty getConfProperty() {
        return confProperty;
    }

    public void setConfProperty(ConfProperty confProperty) {
        this.confProperty = confProperty;
    }

    @OneToOne(fetch = FetchType.LAZY, mappedBy = "confOption", cascade = CascadeType.ALL)
    public VariableSKU getVariableSKU() {
        return variableSKU;
    }

    public void setVariableSKU(VariableSKU variableSKU) {
        this.variableSKU = variableSKU;
    }
}
