package com.fortegroup.service.catalog;

import com.fortegroup.dao.category.CategoryDAO;
import com.fortegroup.dao.productdetails.ProductDetailDao;
import com.fortegroup.dao.shorturl.ShortUrlDAO;
import com.fortegroup.model.category.Category;
import com.fortegroup.model.dto.EntityDTO;
import com.fortegroup.model.dto.FullEntityDTO;
import com.fortegroup.model.productdetails.Product;
import com.fortegroup.model.shorturl.ShortUrl;
import com.fortegroup.model.shorturl.ShortUrlPartObject;
import com.fortegroup.utill.mapper.CategoryMapper;
import com.fortegroup.utill.mapper.ProductMapper;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
/**
 *
 * @author Artyom Kazakov
 * @version 1.0
 */
@Service
public class CatalogServiceImpl implements CatalogService {

    @Autowired
    private CategoryDAO categoryDAO;

    @Autowired
    private ProductDetailDao productDAO;

    @Autowired
    private ShortUrlDAO shortUrlDAO;

    private static final int PRODUCT_TYPE = 1;
    private static final int CATEGORY_TYPE = 0;

    @Override
    @Transactional
    public List<Object> getSeo(String[] parameters, boolean fullInformation) {
        Category category = getRootCategory(parameters[0]);
        if (category == null){
            return null;
        }

        List<Object> entities = new ArrayList<>(parameters.length);
        addCategoryToEntityList(entities, fullInformation, category);

        if (parameters.length == 1){
            return entities;
        }

        if (parameters.length > 2) {
            category = getPenultimateCategory(parameters, fullInformation, category, entities);
                if (category == null){
                    return null;
                }
        }

        if (!tryGetLastCategory(parameters[parameters.length - 1], fullInformation, category, entities) &&
                !tryGetProduct(parameters[parameters.length - 1], fullInformation, category, entities)) {
            return null;
        }

        return entities;
    }

    @Override
    @Transactional
    public List<Object> getSeoByShortUrl(String shortUrl, boolean fullInformation){
        ShortUrl shortUrlInstance = shortUrlDAO.getShortUrl(shortUrl);
        if (shortUrlInstance != null){
            if (fullInformation){
                List<Object> entities = new ArrayList<>();
                for (ShortUrlPartObject shortUrlPartObject : shortUrlInstance.getShortUrlPartObjects()){
                    if (shortUrlPartObject.getObjectType() == CATEGORY_TYPE){
                        Category category = categoryDAO.get(shortUrlPartObject.getObjectId());
                        entities.add(new FullEntityDTO(CATEGORY_TYPE, CategoryMapper.toDtoCategory(category)));
                    }
                    if (shortUrlPartObject.getObjectType() == PRODUCT_TYPE){
                        Product product = productDAO.getProductById(shortUrlPartObject.getObjectId());
                        entities.add(new FullEntityDTO(PRODUCT_TYPE, ProductMapper.toDtoProduct(product)));
                    }
                }
                return entities;
            } else {
                return shortUrlInstance.getShortUrlPartObjects()
                        .stream().map(shortUrlPartObject ->
                                new EntityDTO(shortUrlPartObject.getObjectType(),
                                        shortUrlPartObject.getObjectId())).collect(Collectors.toList());
            }
        }
        return null;
    }

    @Override
    @Transactional
    public String getShortUrlByFullUrl(String fullUrl) {
        ShortUrl shortUrl = shortUrlDAO.getShortUrlByFullUrl(fullUrl);

        if (shortUrl != null){
            return shortUrl.getUrl();
        }

        return null;
    }

    @Override
    @Transactional
    public String createShortUrl(List<EntityDTO> entities, String fullUrl) {
        boolean unique = false;
        String shortUrl = "";
        while (!unique){
            shortUrl = RandomStringUtils.randomAlphanumeric(5);
            ShortUrl shortUrlInstance = shortUrlDAO.getShortUrlByUrl(shortUrl);

            if (shortUrlInstance == null){
                unique = true;
            }
        }

        ShortUrl shortUrlInstance = new ShortUrl();
        shortUrlInstance.setFullUrl(fullUrl);
        shortUrlInstance.setUrl(shortUrl);

        for (EntityDTO entity : entities){
            ShortUrlPartObject shortUrlPartObject = new ShortUrlPartObject();
            shortUrlPartObject.setObjectType(entity.getObjectType());
            shortUrlPartObject.setObjectId(entity.getId());
            shortUrlPartObject.setShortUrl(shortUrlInstance);
            shortUrlInstance.getShortUrlPartObjects().add(shortUrlPartObject);
        }

        shortUrlDAO.save(shortUrlInstance);

        return shortUrl;
    }

    private Category getRootCategory(String seoName){
        Category category = categoryDAO.getByName(seoName);

        if (category != null && category.getRootCategory() != null){
            return null;
        }

        return category;
    }

    private Category getPenultimateCategory(String[] parameters, boolean fullInformation,
                                            Category category, List<Object> entities){
        for (int i = 1; i < parameters.length - 2; i++){
            category = getCategory(parameters[i], category.getId());
            if (category == null){
                return null;
            }

            addCategoryToEntityList(entities, fullInformation, category);
        }
        return category;
    }

    private boolean tryGetLastCategory(String seoName, boolean fullInformation,
                                       Category category, List<Object> entities){
        category = getCategory(seoName, category.getId());
        if (category == null){
            return false;
        }

        addCategoryToEntityList(entities, fullInformation, category);

        return true;
    }

    private boolean tryGetProduct(String seoName, boolean fullInformation, Category category, List<Object> entities){
        Product product = productDAO.getByNameAndCategoryId(seoName, category.getId());

        if (product == null) {
            return false;
        }

        addProductToEntityList(entities, fullInformation, product);

        return true;
    }

    private Category getCategory(String seoName, Long parentCategoryId){
        return categoryDAO.getByNameAndParentCategoryId(seoName, parentCategoryId);
    }

    private void addCategoryToEntityList(List<Object> entities, boolean fullInformation, Category category){
        entities.add(fullInformation ?
                new FullEntityDTO(CATEGORY_TYPE, CategoryMapper.toDtoCategory(category))
                : new EntityDTO(CATEGORY_TYPE, category.getId()));
    }

    private void addProductToEntityList(List<Object> entities, boolean fullInformation, Product product){
        entities.add(fullInformation ?
                new FullEntityDTO(PRODUCT_TYPE, ProductMapper.toDtoProduct(product))
                : new EntityDTO(PRODUCT_TYPE, product.getId()));
    }


}
