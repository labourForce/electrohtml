package com.fortegroup.dao.implementation.JSONType;

import org.hibernate.dialect.PostgreSQL9Dialect;

import java.sql.Types;

/**
<<<<<<< HEAD
 * Created by PC on 21.04.2017.
=======
 * Created by PC on 19.04.2017.
>>>>>>> af2f4485bc749f02524bd5db4fa8d8d354347bd5
 */
public class JsonPostgreSQLDialect extends PostgreSQL9Dialect {
    public JsonPostgreSQLDialect() {

        super();

        this.registerColumnType(Types.JAVA_OBJECT, "json");
    }
}
