package com.fortegroup.dao.shorturl;


import com.fortegroup.model.shorturl.ShortUrl;
/**
 *
 * @author Artyom Kazakov
 * @version 1.0
 */
public interface ShortUrlDAO {
    Long save(ShortUrl shortUrl);

    ShortUrl get(Long id);

    ShortUrl getShortUrl(String shortUrl);

    ShortUrl getShortUrlByFullUrl(String fullUrl);

    ShortUrl getShortUrlByUrl(String url);
}
