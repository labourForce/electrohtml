package com.fortegroup.controller.catalog;

import com.fortegroup.model.dto.EntityDTO;
import com.fortegroup.service.catalog.CatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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

    @RequestMapping(value = "/category/**", method = RequestMethod.GET)
    public ResponseEntity<?> seo(HttpServletRequest request, @RequestParam(required = false) Boolean fullInformation){
        String uri = request.getRequestURI();
        String[] parameters = uri.substring(uri.indexOf("category/") + 9).split("/");

        if (fullInformation == null){
            fullInformation = false;
        }

        List<Object> entities = catalogService.getSeo(parameters, fullInformation);

        return ResponseEntity.ok(entities);
    }

    @RequestMapping(value = "/getShortUrl", method = RequestMethod.GET)
    public ResponseEntity<?> getShortUrl(@RequestParam String fullUrl) {
        return ResponseEntity.ok(catalogService.getShortUrlByFullUrl(fullUrl));
    }

    @RequestMapping(value = "/createShortUrl", method = RequestMethod.GET)
    public ResponseEntity<?> createShortUrl(@RequestParam String fullUrl) {

        List<EntityDTO> entities = catalogService.getSeo(fullUrl.split("/"), false)
                .stream()
                .map(e -> (EntityDTO) e)
                .collect(Collectors.toList());
        return ResponseEntity.ok(catalogService.createShortUrl(entities, fullUrl));
    }
}
