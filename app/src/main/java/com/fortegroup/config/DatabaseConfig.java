package com.fortegroup.config;

import com.fortegroup.dao.category.CategoryDAO;
import com.fortegroup.dao.category.CategoryDAOImpl;
import com.fortegroup.dao.productdetails.HistoryProductDAO;
import com.fortegroup.dao.productdetails.HistoryProductDAOImpl;
import com.fortegroup.dao.configurabletext.TextDao;
import com.fortegroup.dao.configurabletext.TextDaoImpl;
import com.fortegroup.dao.productdetails.ProductDetailDao;
import com.fortegroup.dao.accounts.UserDao;
import com.fortegroup.dao.productdetails.ProductDetailDaoImpl;
import com.fortegroup.dao.accounts.UserDaoImpl;

import com.fortegroup.dao.shoppingCart.ShoppingCartDao;
import com.fortegroup.dao.shoppingCart.ShoppingCartDaoImpl;
import com.fortegroup.dao.shorturl.ShortUrlDAO;
import com.fortegroup.dao.shorturl.ShortUrlDAOImpl;
import com.fortegroup.service.catalog.CatalogService;
import com.fortegroup.service.catalog.CatalogServiceImpl;
import com.fortegroup.service.checkInformation.ShippingBillingService;
import com.fortegroup.service.checkInformation.ShippingBillingServiceImpl;
import com.fortegroup.service.productdetails.HistoryProductService;
import com.fortegroup.service.productdetails.HistoryProductServiceImpl;
import com.fortegroup.service.configurabletext.TextService;
import com.fortegroup.service.configurabletext.TextServiceImpl;
import com.fortegroup.service.productdetails.ProductDetailService;
import com.fortegroup.service.accounts.UserService;
import com.fortegroup.service.accounts.UserServiceImpl;
import com.fortegroup.service.productdetails.ProductDetailServiceImpl;
import com.fortegroup.service.shoppingCart.ShoppingCartService;
import com.fortegroup.service.shoppingCart.ShoppingCartServiceImpl;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.util.Properties;

/**
 * DB config for this project
 * @author Alexey Burov
 * @version 1.0
 */
@Configuration
@EnableTransactionManagement
public class DatabaseConfig {

    @Autowired
    private ApplicationContext appContext;


    @Bean
    public HikariDataSource dataSource() {
        HikariDataSource dataSource = new HikariDataSource();
        dataSource.setDataSourceClassName("org.postgresql.ds.PGSimpleDataSource");

        dataSource.addDataSourceProperty("databaseName", "postgres");
        dataSource.addDataSourceProperty("portNumber", "5432");

//        dataSource.addDataSourceProperty("serverName", "localhost");
        dataSource.addDataSourceProperty("serverName", "192.168.1.207");

        dataSource.addDataSourceProperty("user", "postgres");
        dataSource.addDataSourceProperty("password", "postgres");
        return dataSource;
    }


    @Bean
    public HibernateTransactionManager transactionManager() {
        HibernateTransactionManager manager = new HibernateTransactionManager();
        manager.setSessionFactory(hibernate5SessionFactoryBean().getObject());
        return manager;
    }

    @Bean
    public LocalSessionFactoryBean hibernate5SessionFactoryBean() {
        LocalSessionFactoryBean localSessionFactoryBean = new LocalSessionFactoryBean();
        localSessionFactoryBean.setDataSource((DataSource) appContext.getBean("dataSource"));
        localSessionFactoryBean.setPackagesToScan("com.fortegroup.model");
        Properties properties = new Properties();
        properties.put("hibernate.dialect", "org.hibernate.dialect.PostgreSQL94Dialect");
        //properties.put("hibernate.current_session_context_class","thread");
//        properties.put("hibernate.hbm2ddl.auto","update");
        properties.put("hibernate.show_sql", "true");

        localSessionFactoryBean.setHibernateProperties(properties);
        return localSessionFactoryBean;
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserService userService() {
        return new UserServiceImpl();
    }

    @Bean
    public UserDao userDao() {
        return new UserDaoImpl();
    }

    @Bean
    public ProductDetailService appProductDetailService() {
        return new ProductDetailServiceImpl();
    }

    @Bean
    public ProductDetailDao productDetailDao() {
        return new ProductDetailDaoImpl();
    }

    @Bean
    public ShippingBillingService checkInformationSB() {
        return new ShippingBillingServiceImpl();
    }

    @Bean
    public CategoryDAO categoryDAO() {
        return new CategoryDAOImpl();
    }

    @Bean
    public CatalogService catalogService() {
        return new CatalogServiceImpl();
    }

    @Bean
    public ShortUrlDAO shortUrlDAO() {
        return new ShortUrlDAOImpl();
    }

    @Bean
    public HistoryProductDAO historyProductDAO() {
        return new HistoryProductDAOImpl();
    }

    @Bean
    public HistoryProductService historyProductService() {
        return new HistoryProductServiceImpl();
    }

    @Bean
    public TextDao textDao() {
        return new TextDaoImpl();
    }

    @Bean
    public TextService textService(){
        return new TextServiceImpl();
    }

    @Bean
    public ShoppingCartService appShoppingCartService(){return new ShoppingCartServiceImpl();}

    @Bean
    public ShoppingCartDao shoppingCartDao(){return new ShoppingCartDaoImpl();}
}


