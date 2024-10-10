// QueueSystem.js
import React, { useState, useEffect } from 'react';
import { Button } from "@mui/material";

// Simulated API fetch function for booking data
const fetchBookingData = async () => {
  return [
    { id: 1, name: 'John Doe', date: '2024-10-10', time: '10:00 AM' },
    { id: 2, name: 'Jane Smith', date: '2024-10-10', time: '10:30 AM' },
    { id: 3, name: 'Sam Wilson', date: '2024-10-10', time: '11:00 AM' },
  ];
};

// Function to add time (in minutes) to a given time string
const addTimeToSlot = (time, minutesToAdd) => {
  const [hours, minutesPart] = time.split(':');
  const [minutes, period] = minutesPart.split(' ');

  let totalMinutes = parseInt(minutes) + parseInt(minutesToAdd);
  let newHours = parseInt(hours);

  if (totalMinutes >= 60) {
    newHours += 1;
    totalMinutes = totalMinutes - 60;
  }

  if (newHours >= 12) {
    newHours = newHours > 12 ? newHours - 12 : newHours;
    period === 'AM' ? period = 'PM' : period = 'AM';
  }

  return `${newHours}:${totalMinutes < 10 ? '0' : ''}${totalMinutes} ${period}`;
};

const QueueSystem = () => {
  const [queue, setQueue] = useState([]);
  const [additionalTime, setAdditionalTime] = useState(15); // Default additional time

  // Fetch bookings on component mount
  useEffect(() => {
    const loadBookings = async () => {
      const bookings = await fetchBookingData();
      setQueue(bookings); // Automatically enqueue all bookings
    };

    loadBookings();
  }, []);

  // Function to remove the first customer from the queue
  const dequeueCustomer = () => {
    setQueue(queue.slice(1)); // Remove first customer from the queue
  };

  // Function to add time to a specific customer's booking
  const addTimeToBooking = (id) => {
    setQueue(
      queue.map((customer) => {
        if (customer.id === id) {
          const newTime = addTimeToSlot(customer.time, additionalTime);
          return { ...customer, time: newTime };
        }
        return customer;
      })
    );
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Queue Management System</h1>

      {/* Display the queue */}
      <QueueDisplay queue={queue} addTimeToBooking={addTimeToBooking} />

     {/* Dequeue button */}
    <Button
        variant="contained"
        color="primary"
        onClick={dequeueCustomer}
        sx={{ mt: 6 }}
      >
        Call Next Customer
      </Button>
    </div>
  );
};

// QueueDisplay.js
const QueueDisplay = ({ queue, addTimeToBooking }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Current Queue:</h3>
      {queue.length === 0 ? (
        <p>No customers in the queue.</p>
      ) : (
        <ul>
          {queue.map((customer) => (
            <li key={customer.id}>
              {customer.name} - {customer.date} at {customer.time}{' '}
              <Button
                variant="contained"
                color="primary"
                onClick={() => addTimeToBooking(customer.id)}
                sx={{ mt: 6 }}
                >
                Add Time
                </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QueueSystem;
