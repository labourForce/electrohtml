package com.fortegroup.service.catalog;


import com.fortegroup.model.category.Category;
import com.fortegroup.model.dto.CategoryDTO;
import com.fortegroup.model.dto.EntityDTO;

import java.util.List;
/**
 *
 * @author Artyom Kazakov
 * @version 1.0
 */
public interface CatalogService {
    List<Object> getSeo(String[] parameters, boolean fullInformation);

    List<Object> getSeoByShortUrl(String shortUrl, boolean fullInformation);

    String getShortUrlByFullUrl(String fullUrl);

    String createShortUrl(List<EntityDTO> entities, String fullUrl);

    List<CategoryDTO> getRootCategories();
}
