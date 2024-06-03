
import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, Text, Title, Select } from '@mantine/core';



function Booking() {
    const [opened, { open, close }] = useDisclosure(false);
  
    // State variables for form inputs
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [preferredDate, setPreferredDate] = useState('');
    const [preferredTime, setPreferredTime] = useState('');
    const [healthSpecialty, setHealthSpecialty] = useState('');
    const [additionalField1, setAdditionalField1] = useState('');
    const [additionalField2, setAdditionalField2] = useState('');
  
    const handleBooking = async () => {
      try {
        const response = await fetch('/.netlify/functions/bookAppointment', {
          method: 'POST',
          body: JSON.stringify({
            fullName,
            email,
            phoneNumber,
            preferredDate,
            preferredTime,
            healthSpecialty,
            additionalField1,
            additionalField2,
            // Add more fields as needed
          }),
        });
  
        if (response.ok) {
          console.log('Email sent successfully!');
        } else {
          console.error('Failed to send email');
        }
  
        close();
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    return (
      <>
        <Modal opened={opened} onClose={close} title="Book an Appointment">
          {/* Modal content */}
          <Title order={4}>Patient Information</Title>
          <TextInput
            label="Full Name"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
          <TextInput
            label="Email"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextInput
            label="Phone Number"
            placeholder="Enter your phone number"
            type="tel"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
  
          <Title order={4} mt="lg">
            Appointment Details
          </Title>
          <TextInput
            label="Preferred Date"
            type="date"
            value={preferredDate}
            onChange={(event) => setPreferredDate(event.target.value)}
          />
          <TextInput
            label="Preferred Time"
            type="time"
            value={preferredTime}
            onChange={(event) => setPreferredTime(event.target.value)}
          />
          <Select
            label="Health Specialty"
            placeholder="Select health specialty"
            data={['Dentist','Mid-Wife','Therapist','Optician','Gynecologist','Cardiology', 'Dermatology', 'Orthopedics', 'Other']}
            value={healthSpecialty}
            onChange={(value) => setHealthSpecialty(value)}
          />
  
          {/* Additional form fields */}
          <TextInput
            label="Additional Field 1"
            placeholder="Enter additional information"
            value={additionalField1}
            onChange={(event) => setAdditionalField1(event.target.value)}
          />
          <TextInput
            label="Additional Field 2"
            placeholder="Enter additional information"
            value={additionalField2}
            onChange={(event) => setAdditionalField2(event.target.value)}
          />
  

          <div className="flex justify-center mb-4">
            <Button
              fullWidth
              size="md"
              onClick={handleBooking}
              color="dark-blue"
              style={{
                backgroundColor: "#3498db", // Blue color
                color: "#fff",
                width: "50%",
                borderRadius: "7%",
              }}
            >
               Book Appointment
            </Button>
          </div>

         
        </Modal>
  
        <Button onClick={open}>Book Now</Button>
  
      </>
    );
  }
  
  export default Booking;
  