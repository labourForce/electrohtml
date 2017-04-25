package com.fortegroup.config;

import com.fortegroup.dao.productdetails.ProductDetailDao;
import com.fortegroup.dao.accounts.UserDao;
import com.fortegroup.dao.productdetails.ProductDetailDaoImpl;
import com.fortegroup.dao.accounts.UserDaoImpl;

import com.fortegroup.service.accounts.UserDetailsServiceImpl;
import com.fortegroup.service.search.ProductsService;
import com.fortegroup.service.search.ProductsServiceImpl;
import com.fortegroup.service.productdetails.ProductDetailService;
import com.fortegroup.service.accounts.UserService;
import com.fortegroup.service.accounts.UserServiceImpl;
import com.fortegroup.service.productdetails.ProductDetailServiceImpl;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.security.core.userdetails.UserDetailsService;
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
    public HikariDataSource dataSource(){
        HikariDataSource dataSource = new HikariDataSource();
        dataSource.setDataSourceClassName("org.postgresql.ds.PGSimpleDataSource");

        dataSource.addDataSourceProperty("databaseName", "postgres");
        dataSource.addDataSourceProperty("portNumber", "5432");
        dataSource.addDataSourceProperty("serverName", "localhost");
//        dataSource.addDataSourceProperty("serverName","192.168.1.207");
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
    public LocalSessionFactoryBean hibernate5SessionFactoryBean(){
        LocalSessionFactoryBean localSessionFactoryBean = new LocalSessionFactoryBean();
        localSessionFactoryBean.setDataSource((DataSource) appContext.getBean("dataSource"));
        localSessionFactoryBean.setPackagesToScan("com.fortegroup.model");
        Properties properties = new Properties();
        properties.put("hibernate.dialect","org.hibernate.dialect.PostgreSQL94Dialect");
        //properties.put("hibernate.current_session_context_class","thread");
//        properties.put("hibernate.hbm2ddl.auto","update");
        properties.put("hibernate.show_sql","true");

        localSessionFactoryBean.setHibernateProperties(properties);
        return localSessionFactoryBean;
    }

    @Bean
    public UserService appUserService(){
        return new UserServiceImpl();
    }

    @Bean
    public UserDao userDao(){
        return new UserDaoImpl();
    }

    @Bean
    public ProductsService productsService(){
        return new ProductsServiceImpl();
    }

    @Bean
    public ProductDetailService appProductDetailService(){return new ProductDetailServiceImpl();}

    @Bean
    public ProductDetailDao productDetailDao(){return new ProductDetailDaoImpl();}

}
