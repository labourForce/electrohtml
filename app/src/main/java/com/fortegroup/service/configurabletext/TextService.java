package com.fortegroup.service.configurabletext;

import java.util.Map;

/**
 * Created by alex on 5/4/17.
 */
public interface TextService {

    Map<String,String> getHeaderText();

    Map<String,String> getFooterText();
}
