package com.fortegroup.model.dto;
/**
 *
 * @author Artyom Kazakov
 * @version 1.0
 */
public class EntityDTO {
    private int objectType;
    private Long id;

    public EntityDTO(){}

    public EntityDTO(int objectType, Long id){
        this.objectType = objectType;
        this.id = id;
    }

    public int getObjectType() {
        return objectType;
    }

    public void setObjectType(int objectType) {
        this.objectType = objectType;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
