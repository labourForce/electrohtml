package com.fortegroup.elasticsearch.config;

/**
 *
 * @author Eugene Pankov
 */

import com.fortegroup.elasticsearch.service.ProductsService;
import com.fortegroup.elasticsearch.service.ProductsServiceImpl;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.ElasticsearchTemplate;
import org.springframework.data.elasticsearch.repository.config.EnableElasticsearchRepositories;

@Configuration
@EnableElasticsearchRepositories(basePackages = "com.fortegroup.elasticsearch.repository")
@ComponentScan(basePackages = { "com.fortegroup.elasticsearch.service" })
public class ElasticSearchConfig {

    private static Logger logger = LoggerFactory.getLogger(ElasticSearchConfig.class);

    @Bean
    public Client client() {
        Client client = new TransportClient()
                .addTransportAddress(new InetSocketTransportAddress("localhost", 9300));
        return client;
    }

    @Bean
    public ElasticsearchOperations elasticsearchTemplate() {
        return new ElasticsearchTemplate(client());
    }

    @Bean
    public ProductsService productsService(){
        return new ProductsServiceImpl();
    }
}
