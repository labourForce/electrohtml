package com.fortegroup.model.shorturl;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;
/**
 *
 * @author Artyom Kazakov
 * @version 1.0
 */
@Entity
@Table(name = "electro.short_url")
public class ShortUrl {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "url", nullable = false)
    private String url;
    @Column(name = "full_url", nullable = false)
    private String fullUrl;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "shortUrl")
    private Set<ShortUrlPartObject> shortUrlPartObjects = new HashSet<>(0);

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getFullUrl() {
        return fullUrl;
    }

    public void setFullUrl(String fullUrl) {
        this.fullUrl = fullUrl;
    }

    public Set<ShortUrlPartObject> getShortUrlPartObjects() {
        return shortUrlPartObjects;
    }

    public void setShortUrlPartObjects(Set<ShortUrlPartObject> shortUrlPartObjects) {
        this.shortUrlPartObjects = shortUrlPartObjects;
    }
}
