// src/App.jsx
import React from 'react';
import './Nurse.css';

const Nursepage = () => {
  return (
    <div className="container">
      <h1>The Best At-home Nursing Services Provider in Coimbatore</h1>
      <p>
        Getting nursing services on your own is now easier than ever. Inhouse Medicare offers 24×7 home care nursing
        services for patients of all ages who require constant monitoring and intensive care at home. It can be your key
        to achieving the highest quality of nursing care possible by enabling safety, security, and increased
        independence.
      </p>

      <p>
        We completely understand the emotional trauma that both the patients and their family experience during
        hospitalization. With best-in-class nursing care services, we promise that patients’ wellness is taken care of by
        our in-home nurse without any compromises. We follow all medical standards and protocols to offer you the most
        professional and competent treatment at home.
      </p>

      <p>
        Our experienced and well-trained nursing staff will provide customized care and protection for patients and
        assist with all their daily needs such as mobility, fall prevention, cleaning, grooming, bathing, feeding, as
        well as supervising patients recovering from surgery or serious medical conditions. They also handle blood
        pressure measurement, drug administration, medical dressing, vaccine needs, and other nursing assistance at home.
        We make sure to monitor all the necessary activities related to patient care and keep a check on their progress.
        When it comes to assisting older adults, our personal attendants will be proactive. They understand the unique
        needs of the elderly and cater to them with extra patience and attention. Home nursing services always allow
        patients to recover faster in the comfort of their family in familiar surroundings.
      </p>

      <h2>Services We Offer</h2>
      <ul>
        <li>Post-surgical care</li>
        <li>Antenatal and postnatal care</li>
        <li>Palliative care</li>
        <li>Newborn care</li>
        <li>Oxygen monitoring</li>
        <li>Insulin injections</li>
        <li>Nebulization</li>
        <li>Medical monitoring and treatments</li>
        <li>Bed sore care</li>
        <li>Wound care for trauma or accident cases</li>
        <li>Pregnancy Care</li>
        <li>Fluid therapy</li>
        <li>Glucose and blood tests</li>
        <li>Elderly care</li>
        <li>Assistance for disabled patients</li>
      </ul>

      <h2>Benefits of Getting Nursing Service from Inhouse Medicare</h2>
      <ul>
        <li>More affordable than in-hospital care</li>
        <li>Customized and personalized treatment</li>
        <li>Caring and friendly nursing staff</li>
        <li>One-on-one attention</li>
        <li>Greater convenience and avoids unnecessary hospital visits</li>
      </ul>

      <div className="appointment-form">
        <h2>Request an Appointment</h2>
        <form>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Your Phone:</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="4" required />

          <button type="submit">Submit Appointment Request</button>
        </form>
      </div>
    </div>
  );
};

export default Nursepage;
