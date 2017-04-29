package com.fortegroup.model.shorturl;

import javax.persistence.*;
/**
 *
 * @author Artyom Kazakov
 * @version 1.0
 */
@Entity
@Table(name = "electro.short_url_object")
public class ShortUrlPartObject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "object_type", nullable = false)
    private int objectType;
    @Column(name = "object_id", nullable = false)
    private Long objectId;
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "short_url_id")
    private ShortUrl shortUrl;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getObjectType() {
        return objectType;
    }

    public void setObjectType(int objectType) {
        this.objectType = objectType;
    }

    public Long getObjectId() {
        return objectId;
    }

    public void setObjectId(Long objectId) {
        this.objectId = objectId;
    }

    public ShortUrl getShortUrl() {
        return shortUrl;
    }

    public void setShortUrl(ShortUrl shortUrl) {
        this.shortUrl = shortUrl;
    }
}
