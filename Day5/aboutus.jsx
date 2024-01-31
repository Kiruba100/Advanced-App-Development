// src/components/AboutUs.js

import React from 'react';
import './aboutus.css'
import img1 from "./1.jpeg"

const AboutUs = () => {
  return (
    <div>
      <div className="about">
      <p> 
      <h1>About Us</h1>
      <br/>
        Welcome to [Your Company Name] - your trusted partner in home care services. 
        We are dedicated to providing compassionate and high-quality care to individuals 
        in the comfort of their homes.
     
        Our team of experienced and certified caregivers is committed to enhancing the 
        well-being of our clients. We understand the importance of personalized care 
        and strive to create a warm and supportive environment for everyone we serve.
      
        [Your Company Name] was founded with a mission to make a positive impact on the 
        lives of those in need of assistance. We believe in the power of human connection 
        and aim to foster meaningful relationships with our clients and their families.
      
        Whether you require assistance with daily activities, companionship, or specialized 
        care, we are here for you. Our services are tailored to meet the unique needs of 
        each individual, promoting independence and overall well-being.
      
        Thank you for considering [Your Company Name] for your home care needs. Feel free 
        to contact us for more information or to schedule a consultation. We look forward 
        to serving you and your loved ones.
      </p>
      <img src={img1}></img>
    </div>
    </div>
  );
};

export default AboutUs;
