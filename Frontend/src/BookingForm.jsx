import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [slot, setSlot] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", { name, email, slot });
    // Add booking logic here (like sending data to the backend)
  };

  return (
    <Box m="20px">
      <h2>Book Your Slot</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Preferred Slot"
          variant="outlined"
          fullWidth
          margin="normal"
          value={slot}
          onChange={(e) => setSlot(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Confirm Booking
        </Button>
      </form>
    </Box>
  );
};

export default BookingForm;
