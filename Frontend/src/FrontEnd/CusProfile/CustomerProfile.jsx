import React, { useState, useEffect } from 'react';
import "../CusProfile/CusProfile.css";
import { Card } from '@mui/material';

const CustomerProfile = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    document.body.classList.add('page-customer-profile');

    fetchData();

    return () => {
      document.body.classList.remove('page-customer-profile');
    };
    
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8082/api/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log('Fetched data:', result);
      setData(result); // Update state with fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Card style={{ marginTop: '10px' }}>
      <div className="card-wrap">
        <div className="profile_pic-wrap">
          <img src="https://scontent-yyz1-1.cdninstagram.com/t51.2885-19/s320x320/12543142_446352545560748_362768810_a.jpg" alt="" />
        </div>
        <div className="info-wrap">
          <h1 className="user-name">Adam Leith P</h1>
          <p>UX Designer / Web Developer</p>
        </div>
      </div>
    </Card>
  );
};

export default CustomerProfile;
