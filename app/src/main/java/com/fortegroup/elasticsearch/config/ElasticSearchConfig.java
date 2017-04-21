package com.fortegroup.elasticsearch.config;

/**
 *
 * @author Eugene Pankov
 */

import com.fortegroup.elasticsearch.model.Products;
import com.fortegroup.elasticsearch.repository.ProductsRepository;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.ElasticsearchTemplate;
import org.springframework.data.elasticsearch.repository.config.EnableElasticsearchRepositories;

@Configuration("mainBean")
@EnableElasticsearchRepositories(basePackages = "com.fortegroup.elasticsearch.repository")
@ComponentScan(basePackages = { "com.fortegroup.elasticsearch.service" })
public class ElasticSearchConfig {

//    @Value("${elasticsearch.home:/usr/local/Cellar/elasticsearch/2.3.2}")
//    private String elasticsearchHome;

    private static Logger logger = LoggerFactory.getLogger(ElasticSearchConfig.class);

    /*@Bean
    public Client client() {
        try {
            final Path tmpDir = Files.createTempDirectory(Paths.get(System.getProperty("java.io.tmpdir")), "elasticsearch_data");
            logger.debug(tmpDir.toAbsolutePath().toString());

            // @formatter:off
            //this need to be reviewed
            final Settings.Builder elasticsearchSettings =
                    ImmutableSettings.settingsBuilder().put("http.enabled", "false")
                            .put("path.data", tmpDir.toAbsolutePath().toString())
                            .put("path.home", elasticsearchHome);

            return new NodeBuilder()
                    .local(true)
                    .settings(elasticsearchSettings)
                    .node()
                    .client();

            // @formatter:on
        } catch (final IOException ioex) {
            logger.error("Cannot create temp dir", ioex);
            throw new RuntimeException();
        }
    }*/

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

    /*@Autowired
    private ProductsRepository repository;

    @Autowired
    private ElasticsearchOperations template;

    public static void main(String[] args) {
        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext();
        try {
            ctx.register(ElasticSearchConfig.class);
            ctx.refresh();
            ElasticSearchConfig s = (ElasticSearchConfig) ctx.getBean("mainBean");
            System.out.println("Here are results: ");
            s.findCategoryById("10");
        } finally {
            ctx.close();
        }


    }

    public void findCategoryById(String id) {
        Page<Products> productById = repository.findCustomById(id, new PageRequest(0, 10));
//        System.out.println(productById);
        productById.forEach((product) -> System.out.println(product.toString()));
    }*/

}
