package com.demo.sample.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.sample.Entity.LoginEntity;
import com.demo.sample.Repository.LoginRepo;
import java.util.List;

@Service
public class LoginServices {

    @Autowired(required=true)
	LoginRepo Re;
	public LoginEntity saveDetails(LoginEntity e)
	{
		return Re.save(e);
	}
	public List<LoginEntity> getDetails(){
		return Re.findAll();
	} 	public LoginEntity updateDetails(LoginEntity e) {
		return Re.saveAndFlush(e);
	}
	public void deleteDetails(String email) {
		Re.deleteById(email);
		
	}
}
