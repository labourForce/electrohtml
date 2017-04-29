package com.fortegroup.utill;

import java.util.Properties;

public class PropetryFileGenerator {

    public static Properties generate() {

        Properties properties = new Properties();

        properties.setProperty("password", "nVCxiyShNoWJaWN");
        properties.setProperty("merchantId", "01308026");
        properties.setProperty("username", "u82920470037217304");
        properties.setProperty("url", "https://transact-prelive.litle.com/vap/communicator/online");
//connection       properties.setProperty("url", "https://transact-prelive.litle.com/vap/communicator/online");
//null        properties.setProperty("url", "https/://www.testlitle.com/sandbox/communicator/online");
//connection        properties.setProperty("url", "https://www.testlitle.com/sandbox/communicator/online");
        properties.setProperty("maxAllowedTransactionsPerFile", "500000");
        properties.setProperty("maxTransactionsPerBatch", "100000");
        properties.setProperty("timeout", "65");
        properties.setProperty("batchRequestFolder", "");
        properties.setProperty("batchTcpTimeout", "720");
        properties.setProperty("sftpTimeout", "7200000");
        properties.setProperty("batchPort", "15000");
        properties.setProperty("batchUseSSL", "true");
        properties.setProperty("reportGroup", "Default Report Group");
        properties.setProperty("batchHost", "https\\://www.testlitle.com/sandbox");
        properties.setProperty("proxyPort", "");
        properties.setProperty("sftpPassword", "");
        properties.setProperty("batchResponseFolder", "");
        properties.setProperty("printxml", "false");
        properties.setProperty("proxyHost", "");
        properties.setProperty("sftpUsername", "");

        return properties;
    }

}
