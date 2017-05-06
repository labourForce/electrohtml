package com.fortegroup.model.shoppingCart.dto;

import com.fortegroup.model.shoppingCart.CommerceItem;

public class CommerceItemDTO {

    private CommerceItem item;
    private String [] path;

    public CommerceItem getItem() {
        return item;
    }

    public void setItem(CommerceItem item) {
        this.item = item;
    }

    public String[] getPath() {
        return path;
    }

    public void setPath(String[] path) {
        this.path = path;
    }

    public CommerceItemDTO(CommerceItem item, String[] path) {
        this.item = item;
        this.path = path;
    }
}
