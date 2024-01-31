import React, { useState } from 'react';
import './Pharmacy.css';

const Pharmacy = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="dare">   
        <br></br>
        <div>
      <h2>Pharmacy Description</h2>
      <p>
        Welcome to Our Pharmacy, where your health is our priority. With a commitment to providing
        high-quality pharmaceutical care, we strive to make a positive impact on the well-being of
        our community. Our experienced pharmacists are dedicated to ensuring that you receive the
        best possible service and personalized attention.
      </p>
      <p>
        At Our Pharmacy, we believe in the power of health and wellness. Our mission is to empower
        individuals to lead healthy lives by offering a wide range of prescription medications, over-the-counter
        products, and health-related services. We are more than just a pharmacy; we are your partners
        in health.
      </p>
      <div>
        <h2>Benefits of Our Pharmacy</h2>
        <ul>
          <li>
            <strong>Personalized Service:</strong> Our experienced pharmacists provide personalized
            consultations to ensure you receive the right medications and proper guidance for your health needs.
          </li>
          <li>
            <strong>Convenience:</strong> Enjoy the convenience of online prescription refills and
            quick, efficient service at our physical locations.
          </li>
          <li>
            <strong>Wide Range of Products:</strong> We offer a comprehensive selection of prescription
            medications, over-the-counter products, vitamins, and health and wellness items.
          </li>
          <li>
            <strong>Health Education:</strong> Stay informed about your health with our educational
            resources and informational materials on various health topics.
          </li>
          <li>
            <strong>Community Engagement:</strong> We actively engage with the community through health
            fairs, seminars, and outreach programs to promote well-being.
          </li>
          <li>
            <strong>Insurance Assistance:</strong> Our team can assist you with insurance-related questions
            and help you navigate the complexities of prescription coverage.
          </li>
        </ul>

        <h2>Book an Appointment</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="date">Preferred Date:</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            required
          />

          <label htmlFor="time">Preferred Time:</label>
          <input
            type="time"
            id="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            required
          />

          <button type="submit">Submit Appointment Request</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Pharmacy;
