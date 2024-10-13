import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}-${month}-${year}`;
}
const currentDate = getDate(); // Store current date
// const currentDate = "12-10-2024";
export const DisplayCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8082/api/bookings');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log('result before uniquedata' + result)
      // Ensure unique data and filter by formattedDate
      const uniqueData = Array.from(new Set(result.map(item => item.id)))
        .map(id => result.find(item => item.id === id))
        .filter(item => item.formattedDate === currentDate); // Filter for current date
      console.log('currentDate' + currentDate);
      console.log('Filtered unique data:', uniqueData);

      setData(uniqueData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const sliderSettings = {
    infinite: data.length > 1, // Set infinite to true only if there is more than one item
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div style={{ width: '100%', margin: 'auto'}}>
      <div style={{ marginTop: '2px', backgroundColor:'#E0D7C7' }}>
        <Slider {...sliderSettings}>
          {data.map((d, index) => (
            <div key={index} style={{ backgroundColor: 'white', height: '450px', color: 'black', borderRadius: '10px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px', padding: '16px' }}>
                <p style={{ fontSize: '1.25rem', fontWeight: '600' }}>{d.formattedDate}</p>
                <p style={{ fontSize: '1.25rem', fontWeight: '800' }}>{d.time}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};