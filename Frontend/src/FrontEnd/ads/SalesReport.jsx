import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Button } from '@mui/material';

const SalesReport = () => {
  const [bookingDetails, setBookingDetails] = useState([]);
  const [salesReport, setSalesReport] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch bookings data
    const fetchBookingDetails = async () => {
      const response = await fetch('http://localhost:8082/api/bookings'); // Adjust the API endpoint as needed
      const data = await response.json();
      setBookingDetails(data);
      setLoading(false);
    };

    fetchBookingDetails();
  }, []);

  useEffect(() => {
    // Process data to generate sales report
    const report = bookingDetails.reduce((acc, bookingDetails) => {
      const date = new Date(bookingDetails.date).toLocaleDateString();
      if (!acc[date]) {
        acc[date] = 0;
      }
      acc[date] += bookingDetails.price;
      return acc;
    }, {});

    const reportArray = Object.keys(report).map(date => ({
      date,
      totalSales: report[date],
    }));

    setSalesReport(reportArray);
  }, [bookingDetails]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Sales Report
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Button variant="contained" color="primary" onClick={handlePrint} style={{ marginBottom: '20px' }}>
            Print Report
          </Button>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Total Sales</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {salesReport.map((entry, index) => (
                  <TableRow key={index}>
                    <TableCell>{entry.date}</TableCell>
                    <TableCell>${entry.totalSales.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </Container>
  );
};

export default SalesReport;
