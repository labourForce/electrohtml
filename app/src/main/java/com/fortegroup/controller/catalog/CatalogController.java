package com.fortegroup.controller.catalog;

import com.fortegroup.model.dto.EntityDTO;
import com.fortegroup.service.catalog.CatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.stream.Collectors;
/**
 *
 * @author Artyom Kazakov
 * @version 1.0
 */
@RequestMapping(value = "/rest")
@RestController
public class CatalogController {
    @Autowired
    private CatalogService catalogService;

    @RequestMapping(value = "/catalog/**", method = RequestMethod.GET)
    public ResponseEntity<?> seo(HttpServletRequest request, @RequestParam(required = false) Boolean fullInformation){
        String uri = request.getRequestURI();
        String[] parameters = uri.substring(uri.indexOf("catalog/") + 8).split("/");

        if (fullInformation == null){
            fullInformation = false;
        }

        List<Object> entities = catalogService.getSeo(parameters, fullInformation);

        if (entities == null || entities.size() == 0){
            return ResponseEntity.badRequest().body("Nothing was found");
        }
        return ResponseEntity.ok(entities);
    }

    @RequestMapping(value = "/getShortUrl", method = RequestMethod.GET)
    public ResponseEntity<?> getShortUrl(@RequestParam String fullUrl) {
        String shortUrl = catalogService.getShortUrlByFullUrl(fullUrl);
        if (shortUrl == null){
            return ResponseEntity.badRequest().body("Nothing was found");
        }
        return ResponseEntity.ok(shortUrl);
    }

    @RequestMapping(value = "/createShortUrl", method = RequestMethod.POST)
    public ResponseEntity<?> createShortUrl(@RequestBody String fullUrl) {
        List<EntityDTO> entities = catalogService.getSeo(fullUrl.split("/"), false)
                .stream()
                .map(e -> (EntityDTO) e)
                .collect(Collectors.toList());
        String shortUrl = catalogService.createShortUrl(entities, fullUrl);
        if (shortUrl == null){
            return ResponseEntity.badRequest().body("Error during created");
        }
        return ResponseEntity.ok(shortUrl);
    }

    @RequestMapping(value = "/rootCategories", method = RequestMethod.GET)
    public ResponseEntity<?> getRootCategories() {
        return ResponseEntity.ok(catalogService.getRootCategories());
    }

    @RequestMapping(value = "/childCategories", method = RequestMethod.GET)
    public ResponseEntity<?> getChildCategories(@RequestParam Long id) {
        return ResponseEntity.ok(catalogService.getChildCategories(id));
    }

    @RequestMapping(value = "/allCategories", method = RequestMethod.GET)
    public ResponseEntity<?> getAllCategories() {
        return ResponseEntity.ok(catalogService.getAllCategories());
    }

}
