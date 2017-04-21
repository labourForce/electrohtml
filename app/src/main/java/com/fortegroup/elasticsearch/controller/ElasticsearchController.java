package com.fortegroup.elasticsearch.controller;

import com.fortegroup.config.WebInit;
import com.fortegroup.elasticsearch.config.ElasticSearchConfig;
import com.fortegroup.elasticsearch.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import java.util.List;

/**
 * @author Eugene Pankov
 */

@Configuration
public class ElasticsearchController {

}
