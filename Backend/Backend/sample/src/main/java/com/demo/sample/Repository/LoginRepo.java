package com.demo.sample.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.sample.Entity.LoginEntity;

public interface LoginRepo extends JpaRepository<LoginEntity,String>{


}
