package com.demo.sample;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(
		info =@Info(
				title = "Senior Care",
				version = "1.1.2",
				description = "Want to Book an Appointment for the necessary services",
				contact = @Contact(
						name = "Kiruba",
						email = "727721euit079@skcet.ac.in"
						)
				)
		)
public class SampleApplication {

	public static void main(String[] args) {
		SpringApplication.run(SampleApplication.class, args);
	}

}
