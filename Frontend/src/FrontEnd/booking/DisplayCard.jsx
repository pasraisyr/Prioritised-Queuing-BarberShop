import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const data = [
  {
    Date: '20 August 2024',
    Time: '4:00pm',
  },
  {
    Date: '20 August 2024',
    Time: '4:00pm',
  },
  {
    Date: '20 August 2024',
    Time: '4:00pm',
  },
];

export const DisplayCard = () => {
  return (
    <div style={{ width: '100%', margin: 'auto' }}>
      <div style={{ marginTop: '20px' }}>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} style={{ backgroundColor: 'white', height: '450px', color: 'black', borderRadius: '10px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px', padding: '16px' }}>
                <p style={{ fontSize: '1.25rem', fontWeight: '600' }}>{d.Date}</p>
                <p style={{ fontSize: '1.25rem', fontWeight: '800' }}>{d.Time}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
