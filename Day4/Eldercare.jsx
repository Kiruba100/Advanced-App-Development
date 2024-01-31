import React, { useState } from 'react';
import './Eldercare.css'

const ElderCareService = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [appointments, setAppointments] = useState([]);

  const handleAddAppointment = () => {
    const newAppointment = { name, date };
    setAppointments([...appointments, newAppointment]);
  };

  return (
    <div>
        <div className="care">
      <h2>The Best At-home Elder Care Services</h2>
      <p>
      Old age is a sensitive phase of life which is often challenging and difficult. When old people’s health begins to deteriorate, they become more dependent on others to accomplish their daily chores. 
      Inhouse Medicare offers elder care service that focuses on enhancing their health, wellness, and quality of life. As a person starts to grow older, their physical, cognitive, and emotional states change drastically,
       making it difficult for them to properly carry out their routine tasks. 
      </p>
      <p>
        Whether it's assistance with daily activities, companionship, or specialized care, our team is here to support
        your loved ones.
      </p>

      <h3>Benefits of Inhouse Medicare's Elder Care Services:</h3>
      <ul>
        <li>24/7 assistance or supervision for safety and comfort.</li>
        <li>Free up more time for family caregivers.</li>
        <li>Affordable and offers peace of mind.</li>
        <li>Regular fitness and physical therapy.</li>
        <li>Proper guidance and care-taking.</li>
      </ul>

      <h3>Additional Features:</h3>
      <ul>
        <li>Personal care needs ranging from stand-by assistance to full care depending on each client’s individual needs.</li>
        <li>Preparation and serving healthy food and support for special diets.</li>
        <li>Outings, social events, and other activities of interest to maintain engagement both physically and emotionally.</li>
      </ul>

      <h3>Schedule an Appointment</h3>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <button onClick={handleAddAppointment}>Schedule Appointment</button>

      <h3>Upcoming Appointments</h3>
      {appointments.length === 0 ? (
        <p>No appointments scheduled yet.</p>
      ) : (
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index}>
              {appointment.name} - {appointment.date}
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
};

export default ElderCareService;
