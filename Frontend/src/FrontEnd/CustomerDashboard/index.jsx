import React, { useState, useEffect } from 'react';
import { Box, Grid,Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';

const getDate = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}-${month}-${year}`;
};

const currentDate = getDate(); // Store current date
// const currentDate = "12-10-2024"; 

const Index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData1();
  }, []);

  const fetchData1 = async () => {
    try {
      const response = await fetch('http://localhost:8082/api/bookings');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log('Fetched data:', result);

      const uniqueData = Array.from(new Set(result.map(item => item.id)))
        .map(id => result.find(item => item.id === id))
        .filter(item => item.formattedDate === currentDate); // Filter for current date
      console.log('Filtered unique data:', uniqueData);
      setData(uniqueData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const sliderSettings = {
    speed: 1000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box>
      <Box component="center" sx={{ bgcolor: 'secondary.main', height: '5px', boxShadow: '0 8px 8px rgba(0, 0, 0, 0.2)' }} />
      <Box component="center" sx={{ mt: 2, height: '5px' }}>
        <Typography>Today's Que</Typography>
      </Box>
      <Box component="center" sx={{ mt: 3 }}>
        <Box component="center" sx={{ bgcolor: 'secondary.hola', width: "80%", maxWidth: "700px", maxHeight: "700px", boxShadow: '0 8px 8px rgba(0, 0, 0, 0.2)' }}>
          <Slider {...sliderSettings}>
            {data.map((d, index) => (
              
              <div key={index} style={{ backgroundColor: 'white', height: '450px', color: 'black', borderRadius: '10px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px', padding: '16px' }}>
                  <p style={{ fontSize: '1.25rem', fontWeight: '1000' }}>{d.formattedDate}</p>
                  <p style={{ fontSize: '1.15rem', fontWeight: '600' }}>{d.username}</p>
                  <p style={{ fontSize: '1.00rem', fontWeight: '1000', color:'lightblue'}}>{d.time}</p>
                </div>
              </div>
            ))}
          </Slider>
        </Box>
      </Box>

      <Box component="div" sx={{ mt: 10 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Card sx={{ maxWidth: 400 }}>
            <Link to="/package-style" style={{ textDecoration: 'none', color: 'inherit' }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div" paddingBlock={"15px"} paddingInline={"15px"}>
                    Our Packages
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }} paddingBlock={"15px"} paddingInline={"15px"}>
                    Choose from a variety of haircut packages tailored to fit your needs. 
                    Whether it's a quick trim or a full grooming session, we've got you covered with the best deals and premium service.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>

        <Grid item>
          <Card sx={{ maxWidth: 400 }}>
            <Link to="/hair-style" style={{ textDecoration: 'none', color: 'inherit' }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div" paddingBlock={"20px"} paddingInline={"20px"}>
                    Our Haircut Style
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }} paddingBlock={"20px"} paddingInline={"20px"}>
                    Explore our diverse range of haircut styles, from classic cuts to modern trends.
                    Our expert barbers are here to help you find the perfect look that suits your personality and lifestyle.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>

        <Grid item>
          <Card sx={{ maxWidth: 400 }}>
            <Link to="/new-booking" style={{ textDecoration: 'none', color: 'inherit' }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div" paddingBlock={"20px"} paddingInline={"20px"}>
                    Book your slot
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }} paddingBlock={"20px"} paddingInline={"20px"}>
                    Avoid the wait! Book your appointment with just a few clicks.
                    Choose your preferred barber, time, and service to ensure a seamless grooming experience.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
      </Grid>
    </Box>

    </Box>
  );
};

export default Index;
