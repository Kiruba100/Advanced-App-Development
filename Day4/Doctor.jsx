import React, { useState } from 'react';
import './Doctor.css';

const Doctor = ({ onAddAppointment }) => {
  const [patientName, setPatientName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleAddAppointment = () => {
    if (!patientName || !date || !time) {
      alert('Please fill in all fields.');
      return;
    }

    const newAppointment = {
      patientName,
      date,
      time,
    };

    // Pass the new appointment to the parent component
    onAddAppointment(newAppointment);

    // Clear form fields
    setPatientName('');
    setDate('');
    setTime('');
  };

  return (
    <div className="appoi">
      <div className='Contain'>
        <div className="doc">
          <div className="doc1">
            <img src='https://www.inhousemedicare.com/wp-content/uploads/2022/06/Doctor-consultation.png' alt="Doctor Consultation" />
            <h2>Welcome to Our Doctor Consultation Service</h2>
          </div>
        </div>
        <div className='box'>
        <div className='para'>
          <p>
            To make the most out of your consultation, please provide detailed information
            about your symptoms, medical history, and any relevant details. This will help
            our doctors better understand your situation and offer more accurate guidance
            and recommendations.
          </p>
          <p>
            The consultation process is straightforward. Simply fill in the required details
            in the form below, and our healthcare professionals will review your information
            and get back to you. If you have any urgent concerns, please seek immediate
            medical attention.
          </p>
        </div>
          <br/> 
          <form>
            <div className='appoi'></div>
          <h2>Book an Appointment</h2>
            <label>
              Patient Name:
              <input type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} />
            </label>
            <label>
              Date:
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </label>
            <label>
              Time:
              <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </label>
            <button type="button" onClick={handleAddAppointment}>Book Appointment</button>
          </form>
        </div>
        </div>
    </div>
  );
};

export default Doctor;
