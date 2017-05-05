package com.fortegroup.model.dto;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by PC on 02.05.2017.
 */
public class ConfPropertyDTO {
    private Long id;
    private String propertyName;
    private Set<ConfOptionDTO> confOptions = new HashSet<>(0);

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPropertyName() {
        return propertyName;
    }

    public void setPropertyName(String propertyName) {
        this.propertyName = propertyName;
    }

    public Set<ConfOptionDTO> getConfOptions() {
        return confOptions;
    }

    public void setConfOptions(Set<ConfOptionDTO> confOptions) {
        this.confOptions = confOptions;
    }
}
