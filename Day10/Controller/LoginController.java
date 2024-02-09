package com.demo.sample.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.demo.sample.Entity.LoginEntity;
import com.demo.sample.Services.LoginServices;

import io.swagger.v3.oas.annotations.tags.Tag;

@Tag(name="kiruba",description="Want to Book an Appointment for the necessary services")
@Controller
@CrossOrigin
public class LoginController {
	@Autowired
	LoginServices ser;
	
	@PostMapping("/post") 
	public LoginEntity addinfo(@RequestBody LoginEntity st)
	{
		return ser.saveDetails(st);
	}
	@GetMapping("/get")
@ResponseBody 
public List<LoginEntity> fetchDetails() {
    return ser.getDetails();
}

	@PutMapping("/put")
		public LoginEntity updateInfo(@RequestBody LoginEntity st)
		{
			return ser.updateDetails(st);
		}
	@DeleteMapping("/delete/{email}")
	 String deleteInfo(@PathVariable("email") String email) {
		ser.deleteDetails(email);
		return "Deleted the data";
	}

}
