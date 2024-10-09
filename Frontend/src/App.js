// App.js
import { ColorModeContext, useMode } from "./base/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import BasicTopbar from "./HodViews/scense/global/BasicTopbar";

import {  Routes, Route } from "react-router-dom";
import AdminPages from "./AdminPages";
import SignInSide from "./FrontEnd/login/SignInSide";
import SignUpSide from "./FrontEnd/signup/SignUpSide";
import StaffPages from "./StaffPages";
import UserCatalogue from "./FrontEnd/others/UserCatalogue";
import CustomerPages from "./CustomerPages";
import MainPage from "./FrontEnd/MainPage";

import NewBooking from "./FrontEnd/booking/NewBooking";
import Header from "./components/Header";
//import DashboardCustomer from "./CustomersViews/scense/dashboard";


// import BookingForm from "./CustomersViews/scense/dashboard";
// import DashboardCustomer from "./CustomersViews/scense/dashboard";


const HodViewsLayout = ({ children }) => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <main className="content">
            <BasicTopbar />
            {children}
          </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

const SignInlayout = ({ children }) => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <main className="content">
            <BasicTopbar />
            {children}
          </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};


function App() {
  return (
    <>
   
    <Routes>
      
    <Route 
        path="/" 
        element={
          <HodViewsLayout>
            <MainPage />
            </HodViewsLayout>
          }
        />
    <Route
        path="/signin"
        element={
            <SignInSide />
        }
    />
      <Route 
          path="/signup" 
          element={
              <SignUpSide />
              }
      />


      <Route path="/signup" element={<SignUpSide />} />
     
      <Route
        path="/catalogue"
        element={
            <UserCatalogue />
        }
      />
      <Route path="/new-booking" element={<NewBooking />} />

      <Route
        path="/catalogue"
        element={
            <UserCatalogue />
        }
      />

      {/* <Routes>
        <Route path="/" element={<DashboardCustomer />} />
        <Route path="/booking-form" element={<BookingForm />} />
      </Routes> */}
     
    </Routes>
      <CustomerPages/>
      <AdminPages />
      <StaffPages />
      </>
  );
}

export default App;
