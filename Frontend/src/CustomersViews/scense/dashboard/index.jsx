import { Box, Button } from "@mui/material";
import Header from "../../../components/Header";
import { useNavigate } from "react-router-dom";

const DashboardCustomer = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  const handleBooking = () => {
    navigate("/new-booking"); // Navigate to the booking form page
  };

  return (
    <Box m="20px">

      {/* Header section */}
      <Box>
        <Header title="Your Dashboard" subtitle="Welcome AR BarberShop!" />
      </Box>
    
      {/* Image section
      <Box display="flex" justifyContent="center" mt={3}>
        <img src="/path/to/your-image.jpg" alt="Barbershop" style={{ width: "50%" }} />
      </Box> */}
      
      {/* Button section centered below the image */}
      <Box display="flex" justifyContent="center" mt={3}>
        <Button variant="contained" color="primary" onClick={handleBooking}>
          Book Your Slot Now!
        </Button>
      </Box>
    </Box>
  );
};

export default DashboardCustomer;
