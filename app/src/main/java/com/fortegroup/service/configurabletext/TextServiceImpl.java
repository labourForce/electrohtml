package com.fortegroup.service.configurabletext;

import com.fortegroup.dao.configurabletext.TextDao;
import com.fortegroup.model.configurabletext.TextParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;
import java.util.stream.Collectors;

/**
 * Created by alex on 5/4/17.
 */
public class TextServiceImpl implements TextService {

    @Autowired
    private TextDao textDao;

    @Override
    @Transactional
    public Map<String, String> getHeaderText() {
        Map<String,String> result =
                textDao.getHeaderParams().stream().
                        collect(Collectors.toMap(TextParam::getKey,TextParam::getValue));

        return result;
    }

    @Override
    @Transactional
    public Map<String, String> getFooterText() {
        Map<String,String> result =
                textDao.getFooterParams().stream().
                        collect(Collectors.toMap(TextParam::getKey,TextParam::getValue));

        return result;
    }
}
