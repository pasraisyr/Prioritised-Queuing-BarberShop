import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box, Grid} from "@mui/material";
import Header from "../../../components/Header";
import { Link } from 'react-router-dom';


export default function DashboardCustomer() {
  return (
    <Box m="20px">
  <Box component="center"> 
    <Header title="Welcome to AR BarberShop"></Header>
  </Box>
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
            <Typography gutterBottom variant="h3" component="div"paddingBlock={"20px"} paddingInline={"20px"}>
              Our Haircut Style
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}paddingBlock={"20px"} paddingInline={"20px"}>
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
            <Typography gutterBottom variant="h3" component="div" paddingBlock={"20px"} paddingInline={"20px"} >
              Book your slot
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} paddingBlock={"20px"} paddingInline={"20px"}>
            Avoid the wait! Book your appointment with just a few clicks. 
            Choose your preferred barber, time, and service to ensure a seamless grooming experience
            </Typography>
          </CardContent>
        </CardActionArea>
        </Link>
      </Card>
    </Grid>
  </Grid>
</Box>


  );
}
