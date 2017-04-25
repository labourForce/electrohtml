package com.fortegroup.model.productdetails;

import com.fortegroup.dao.productdetails.StringJsonUserType;
import org.hibernate.annotations.TypeDef;
import org.hibernate.annotations.TypeDefs;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "electro.conf_options")
@TypeDefs( {@TypeDef( name= "StringJsonObject", typeClass = StringJsonUserType.class)})
public class ConfOption {

    private Long id;
    private String name;
    private int confSKUId;

    private Set<BaseSKU> baseSKUs = new HashSet<>(0);
    private Set<VariableSKU> variableSKUs = new HashSet<VariableSKU>(0);

    public ConfOption() {

    }

    public ConfOption(Long id, String name, int confSKUId, Set<BaseSKU> baseSKUs, Set<VariableSKU> variableSKUs) {
        this.id = id;
        this.name = name;
        this.confSKUId = confSKUId;
        this.baseSKUs = baseSKUs;
        this.variableSKUs = variableSKUs;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "name", nullable = false)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "conf_sku_id", nullable = false)
    public int getConfSKUId() {
        return confSKUId;
    }

    public void setConfSKUId(int confSKUId) {
        this.confSKUId = confSKUId;
    }

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "variableSKUs")
    public Set<BaseSKU> getBaseSKUs() {
        return baseSKUs;
    }

    public void setBaseSKUs(Set<BaseSKU> baseSKUs) {
        this.baseSKUs = baseSKUs;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "confOption")
    public Set<VariableSKU> getVariableSKUs() {
        return variableSKUs;
    }

    public void setVariableSKUs(Set<VariableSKU> variableSKUs) {
        this.variableSKUs = variableSKUs;
    }
}
