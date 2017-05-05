package com.fortegroup.utill;

import com.fortegroup.model.checkout.Response;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.client.methods.RequestBuilder;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClients;
import org.w3c.dom.Document;
import org.w3c.dom.Element;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import java.io.*;
import java.util.stream.Collectors;

public class PayPal {

    private static String generateRequestXML(String inputAmount, String cardName, String cardNumber, String cardValidationNumber, String expirationData) throws ParserConfigurationException, TransformerException {

        DocumentBuilderFactory docFactory = DocumentBuilderFactory.newInstance();
        DocumentBuilder docBuilder = docFactory.newDocumentBuilder();

        Document doc = docBuilder.newDocument();
        Element litleOnlineRequest = doc.createElement("litleOnlineRequest");

        litleOnlineRequest.setAttribute("merchantId", "01308024");
        litleOnlineRequest.setAttribute("version", "8.10");
        litleOnlineRequest.setAttribute("xmlns", "http://www.litle.com/schema");

        doc.appendChild(litleOnlineRequest);

        Element authentication = doc.createElement("authentication");
        litleOnlineRequest.appendChild(authentication);

        Element user = doc.createElement("user");
        user.appendChild(doc.createTextNode("u82920470037217304"));
        authentication.appendChild(user);

        Element lastname = doc.createElement("password");
        lastname.appendChild(doc.createTextNode("nVCxiyShNoWJaWN"));
        authentication.appendChild(lastname);

        Element authorization = doc.createElement("authorization");
        litleOnlineRequest.appendChild(authorization);

        authorization.setAttribute("customerId", "12345");
        authorization.setAttribute("id", "id");
        authorization.setAttribute("reportGroup", "rtpGrp");

        Element orderId = doc.createElement("orderId");
        orderId.appendChild(doc.createTextNode("1"));
        authorization.appendChild(orderId);

        Element amount = doc.createElement("amount");
        amount.appendChild(doc.createTextNode(inputAmount));
        authorization.appendChild(amount);

        Element orderSource = doc.createElement("orderSource");
        orderSource.appendChild(doc.createTextNode("ecommerce"));
        authorization.appendChild(orderSource);

        Element card = doc.createElement("card");

        Element type = doc.createElement("type");
        type.appendChild(doc.createTextNode(cardName));
        card.appendChild(type);

        Element number = doc.createElement("number");
        number.appendChild(doc.createTextNode(cardNumber));
        card.appendChild(number);

        Element expDate = doc.createElement("expDate");
        expDate.appendChild(doc.createTextNode(expirationData));
        card.appendChild(expDate);

        Element cardValidationNum = doc.createElement("cardValidationNum");
        cardValidationNum.appendChild(doc.createTextNode(cardValidationNumber));
        card.appendChild(cardValidationNum);

        authorization.appendChild(card);

        TransformerFactory transformerFactory = TransformerFactory.newInstance();
        Transformer transformer = transformerFactory.newTransformer();
        DOMSource source = new DOMSource(doc);

        StringWriter stringWriter = new StringWriter();

        StreamResult result = new StreamResult(new BufferedWriter(stringWriter));

        transformer.transform(source, result);

        return stringWriter.toString();

    }

    private static String getResponseXML(String inputAmount, String cardName, String cardNumber, String cardValidationNumber, String expirationData) throws IOException, TransformerException, ParserConfigurationException {
        HttpClient httpClient = HttpClients.createDefault();
        HttpUriRequest request = RequestBuilder.post("https://www.testlitle.com/sandbox/communicator/online")
                .setEntity(new StringEntity(generateRequestXML(inputAmount, cardName, cardNumber, cardValidationNumber, expirationData))).build();
        HttpResponse response = httpClient.execute(request);

        InputStream inputStream = response.getEntity().getContent();

        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream));

        String result = bufferedReader.lines().collect(Collectors.joining("\n"));

        return result;
    }

    public static Response getResponseCode(String inputAmount, String cardName, String cardNumber, String cardValidationNumber, String expirationData) throws IOException, TransformerException, ParserConfigurationException {
        String responseXML = getResponseXML(inputAmount, cardName, cardNumber, cardValidationNumber, expirationData);
        if(responseXML.contains("message='Error")) {
            int beginError = responseXML.indexOf("message='");
            int endError = responseXML.indexOf(" xmlns='http://www.litle.com/schema'");
            String message = responseXML.substring(beginError+9, endError);
            return new Response(message);
        }
        if(responseXML.contains("<response>")) {
            int beginIndexMessage = responseXML.indexOf("<message>");
            int endIndexMessage = responseXML.indexOf("</message>");
            String message = responseXML.substring(beginIndexMessage+9, endIndexMessage);
            return new Response(message);
        }
        return new Response("Unknown error");
    }

}
