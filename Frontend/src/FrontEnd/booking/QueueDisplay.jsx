import React, { useState, useEffect } from 'react';
import { Button, Typography, Grid, Paper, Card, CardContent, CardActions, Box } from '@mui/material';

// Helper function to add time (in minutes) to a given time string
const addTimeToSlot = (time, minutesToAdd) => {
  const [hours, minutesPart] = time.split(':');
  const [minutes, period] = minutesPart.split(' ');

  let totalMinutes = parseInt(minutes) + parseInt(minutesToAdd);
  let newHours = parseInt(hours);
  let newPeriod = period;

  if (totalMinutes >= 60) {
    newHours += 1;
    totalMinutes -= 60;
  }

  if (newHours >= 12) {
    if (newHours > 12) {
      newHours = newHours - 12;
    }
    newPeriod = period === 'PM' ? 'AM' : 'PM';  // Reassign using new variable
  }

  return `${newHours}:${totalMinutes < 10 ? '0' : ''}${totalMinutes} ${newPeriod}`;
};

const getDate = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}-${month}-${year}`;
};

const currentDate = getDate(); // Store current date

const QueueSystem = () => {
  const [data, setQueue] = useState([]);
  const [additionalTime, setAdditionalTime] = useState(15); // Default additional time

  useEffect(() => {
    const loadBookings = async () => {
      try {
        const response = await fetch('http://localhost:8082/api/bookings');
        if (!response.ok) {
          throw new Error('Failed to fetch bookings');
        }
        const result = await response.json();

        const uniqueData = Array.from(new Set(result.map(item => item.id)))
          .map(id => result.find(item => item.id === id))
          .filter(item => item.formattedDate === currentDate);

        setQueue(uniqueData);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    loadBookings();
  }, []);

  const dequeueCustomer = () => {
    setQueue(data.slice(1));
  };

  const addTimeToBooking = (id) => {
    setQueue((prevData) => {
      let carryOverTime = null;

      return prevData.map((customer, index) => {
        if (customer.id === id || carryOverTime) {
          const newTime = carryOverTime
          ? addTimeToSlot(customer.time, additionalTime)
          : addTimeToSlot(customer.time, additionalTime);

          carryOverTime = true;

          return { ...customer, time: newTime};
        }
        return customer;
      });
    });
  };

  return (
    <Grid container component="main" sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card sx={{ minWidth: 275, padding: 2 }}>
          <CardContent>
            <Typography component="h1" variant="h5" margin="30px" textAlign="center">
              Queue Management System
            </Typography>

            <Box sx={{ mt: 1 }}>
              <QueueDisplay data={data} addTimeToBooking={addTimeToBooking} />

              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 3, mb: 2 }}
                  onClick={dequeueCustomer}
                >
                  Call Next Customer
                </Button>
              </CardActions>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    
  );
};

const QueueDisplay = ({ data, addTimeToBooking }) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6">Current Queue:</Typography>
      {data.length === 0 ? (
        <Typography>No customers in the queue.</Typography>
      ) : (
        <ul>
          {data.map((customer) => (
            <li key={customer.id}>
              {customer.formattedDate} at {customer.time}
              <Button
                variant="contained"
                color="primary"
                sx={{ ml: 8, mt: 1}}
                onClick={() => addTimeToBooking(customer.id)}
              >
                Add Time
              </Button>
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
};
export default QueueSystem;
