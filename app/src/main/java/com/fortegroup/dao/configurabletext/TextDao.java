package com.fortegroup.dao.configurabletext;

import com.fortegroup.model.configurabletext.TextParam;

import java.util.List;

/**
 * Created by alex on 5/4/17.
 */
public interface TextDao {

    List<TextParam> getHeaderParams();

    List<TextParam> getFooterParams();
}
