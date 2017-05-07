package com.forte.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "electro.conf_property")
public class ConfProperty {

    private Long id;
    private Long baseSKUId;
    private String propertyName;

    private BaseSKU baseSKU;
    private Set<ConfOption> confOptions = new HashSet<>(0);

    ConfProperty() {
    }

    public ConfProperty(Long id, Long baseSKUId, String propertyName, BaseSKU baseSKU, Set<ConfOption> confOptions) {
        this.id = id;
        this.baseSKUId = baseSKUId;
        this.propertyName = propertyName;
        this.baseSKU = baseSKU;
        this.confOptions = confOptions;
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

    @Column(name = "base_sku_id", nullable = false, insertable = false, updatable = false)
    public Long getBaseSKUId() {
        return baseSKUId;
    }

    public void setBaseSKUId(Long baseSKUId) {
        this.baseSKUId = baseSKUId;
    }

    @Column(name = "property_name", nullable = false)
    public String getPropertyName() {
        return propertyName;
    }

    public void setPropertyName(String propertyName) {
        this.propertyName = propertyName;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "base_sku_id", nullable = false)
    @JsonIgnore
    public BaseSKU getBaseSKU() {
        return baseSKU;
    }

    public void setBaseSKU(BaseSKU baseSKU) {
        this.baseSKU = baseSKU;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "confProperty")
    public Set<ConfOption> getConfOptions() {
        return confOptions;
    }

    public void setConfOptions(Set<ConfOption> confOptions) {
        this.confOptions = confOptions;
    }
}
