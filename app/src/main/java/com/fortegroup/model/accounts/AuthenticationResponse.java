package com.fortegroup.model.accounts;

/**
 * Simple class for our Authenticate response contains token that is simple Pojo Object
 * @author Alexey Burov
 * @version 1.0
 */

public class AuthenticationResponse {

	private String token;

	public AuthenticationResponse() {
		super();
	}

	public AuthenticationResponse(String token) {
		this.setToken(token);
	}

	public String getToken() {
		return this.token;
	}

	public void setToken(String token) {
		this.token = token;
	}

}
