package com.fortegroup.model.dto;

import java.io.Serializable;

/**
 *
 * @author Artyom Kazakov
 * @version 1.0
 */
public class FullEntityDTO implements Serializable {
    private int objectType;
    private Object object;

    public FullEntityDTO(){}

    public FullEntityDTO(int objectType, Object object){
        this.objectType = objectType;
        this.object = object;
    }

    public int getObjectType() {
        return objectType;
    }

    public void setObjectType(int objectType) {
        this.objectType = objectType;
    }

    public Object getObject() {
        return object;
    }

    public void setObject(Object object) {
        this.object = object;
    }
}
