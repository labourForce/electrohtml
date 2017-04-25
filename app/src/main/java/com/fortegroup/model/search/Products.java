package com.fortegroup.model.search;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

/**
 * @author Eugene Pankov
 */


@Document(indexName = "postgres", type = "test")
public class Products {
    @Id
    private String product_id;
    private String display_name;
    private String long_description;
    private String path;

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

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    @Override
    public String toString() {
        return "Products{" +
                "product_id='" + product_id + '\'' +
                ", display_name='" + display_name + '\'' +
                ", long_description='" + long_description + '\'' +
                ", path='" + path + '\'' +
                '}';
    }
}

