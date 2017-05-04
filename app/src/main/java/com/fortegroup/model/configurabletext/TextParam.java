package com.fortegroup.model.configurabletext;


import javax.persistence.*;

/**
 * Entity for mapping text params from db.
 * @author Alexey Burov
 * @version 1.0
 */
@Entity
@Table(name = "electro.admin_config")
public class TextParam {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "param_key")
    private String key;

    @Column(name = "param_value")
    private String value;

    public TextParam() {
    }

    public TextParam(String key, String value) {
        this.key = key;
        this.value = value;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
