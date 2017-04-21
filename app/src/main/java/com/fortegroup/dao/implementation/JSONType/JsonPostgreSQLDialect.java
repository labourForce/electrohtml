package com.fortegroup.dao.implementation.JSONType;

import org.hibernate.dialect.PostgreSQL9Dialect;

import java.sql.Types;

/**
 * Created by PC on 19.04.2017.
 */
public class JsonPostgreSQLDialect extends PostgreSQL9Dialect {
    public JsonPostgreSQLDialect() {

        super();

        this.registerColumnType(Types.JAVA_OBJECT, "json");
    }
}
