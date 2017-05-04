package com.fortegroup.controller.configurabletext;

import com.fortegroup.service.configurabletext.TextService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by alex on 5/4/17.
 */
@RestController
@RequestMapping("/rest/textConfig")
public class ConfigurableTextController {

    @Autowired
    private TextService textService;


    @RequestMapping(value = "/getHeaderText",method = RequestMethod.GET)
    public ResponseEntity<?> getHeaderText(){
        return ResponseEntity.ok(textService.getHeaderText());
    }

    @RequestMapping(value = "/getFooterText",method = RequestMethod.GET)
    public ResponseEntity<?> getFooterText() {
        return ResponseEntity.ok(textService.getFooterText());
    }

}
