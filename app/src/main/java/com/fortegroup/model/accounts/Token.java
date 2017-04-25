package com.fortegroup.model.accounts;

import javax.persistence.*;

/**
 * Base entity to mapping Token object from hibernate
 * @author Alexey Burov
 * @version 1.0
 */
@Entity
@Table(name = "electro.broken_tokens")
public class Token {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "token",unique = true,nullable = false)
    private String token;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
