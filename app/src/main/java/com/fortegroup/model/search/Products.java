package com.fortegroup.model.search;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import java.util.Arrays;

/**
 * @author Eugene Pankov
 * @version 1.0
 */


@Document(indexName = "postgres", type = "products")
public class Products {
    @Id
    private String id;
    private String product_id;
    private String name;
    private String display_name;
    private String short_description;
    private String long_description;
    private String list_price;
    private String sale_price;
    private String image;
    private String[] path;


    public Products() {
    }

    public String getProduct_id() {
        return product_id;
    }

    public void setProduct_id(String product_id) {
        this.product_id = product_id;
    }

    public String getDisplay_name() {
        return display_name;
    }

    public void setDisplay_name(String display_name) {
        this.display_name = display_name;
    }

    public String getLong_description() {
        return long_description;
    }

    public void setLong_description(String long_description) {
        this.long_description = long_description;
    }

    public String[] getPath() {
        return path;
    }

    public void setPath(String[] path) {
        this.path = path;
    }

    public String getShort_description() {
        return short_description;
    }

    public void setShort_description(String short_description) {
        this.short_description = short_description;
    }

    public String getList_price() {
        return list_price;
    }

    public void setList_price(String list_price) {
        this.list_price = list_price;
    }

    public String getSale_price() {
        return sale_price;
    }

    public void setSale_price(String sale_price) {
        this.sale_price = sale_price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Products{" +
                "product_id='" + product_id + '\'' +
                ", name='" + name + '\'' +
                ", display_name='" + display_name + '\'' +
                ", short_description='" + short_description + '\'' +
                ", long_description='" + long_description + '\'' +
                ", list_price='" + list_price + '\'' +
                ", sale_price='" + sale_price + '\'' +
                ", image='" + image + '\'' +
                ", path=" + Arrays.toString(path) +
                '}';
    }
}

