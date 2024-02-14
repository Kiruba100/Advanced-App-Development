package com.demo.sample.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Table(name="Form")
@Entity
public class LoginEntity {
	@Id
	@Column(name="Email") 
	private String email;
	@Column(name="Password")
	private String Password;
	


	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
    public String getPassword() {
		return Password;
	}
     public void setPassword(String password) {
		Password = password;
	}
     
    public LoginEntity(String email, String password) {
		super();
		this.email = email;
		Password = password;
	}
	public LoginEntity() {
    	 
     }
  
}
