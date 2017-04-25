package com.fortegroup.utill;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Simple validator to password and email
 * @author Alexey Burov
 * @version 1.0
 */
public final class Validator {

    private Validator() {
    }

    private static final Pattern emailPtrn = Pattern.compile("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
    private static final Pattern passwordPtrn = Pattern.compile("^[a-z0-9]+.{6,}$");

    public static boolean validatePassword(String password){
        Matcher matcher = passwordPtrn.matcher(password);
        return matcher.matches();
    }

    public static boolean validateEmail(String email){
        Matcher matcher = emailPtrn.matcher(email);
        return matcher.matches();
    }
}
