// App.js

import { ColorModeContext, useMode } from "./base/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import BasicTopbar from "./HodViews/scense/global/BasicTopbar";
import {  Routes, Route } from "react-router-dom";
import AdminPages from "./AdminPages";
import SignInSide from "./FrontEnd/login/SignInSide";
import SignUpSide from "./FrontEnd/signup/SignUpSide";
import StaffPages from "./StaffPages";
import CustomerPages from "./CustomerPages";
import MainPage from "./FrontEnd/MainPage";
import NewBooking from "./FrontEnd/booking/NewBooking";
import PackageAd from "./FrontEnd/ads/PackageAd";
import HairStyleAd from "./FrontEnd/ads/HairStyleAd";
import PaymentPage from "./FrontEnd/booking/PaymentPage";
import DashboardCustomer from "./CustomersViews/scense/dashboard";
import DashboardStaff from "./StaffViews/scense/dashboard";
import QueueDisplay from './FrontEnd/booking/QueueDisplay';

  const HodViewsLayout = ({ children, showTopbar = true }) => {
    const [theme, colorMode] = useMode();
  
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <main className="content">
            {showTopbar && <BasicTopbar />}
            {children}
          </main>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  };
  

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//           <main className="content">
//             <BasicTopbar />
//             {children}
//           </main>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// };



// const SignInlayout = ({ children }) => {
//   const [theme, colorMode] = useMode();

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//           {/* <main className="content">
//             <BasicTopbar />
//             {children}
//           </main> */}
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// };


function App() {
  return (
    <>
   
    <Routes>
      

    <Route path="/" element={
      <HodViewsLayout> 
        <MainPage />
      </HodViewsLayout>}/>

   
    <Route
        path="/signin" element={
          <HodViewsLayout showTopbar={false}>
          <SignInSide />
          </HodViewsLayout>
        }
    />
      
     
      <Route
        path="/new-booking" element={
          <HodViewsLayout showTopbar={false}>
          <NewBooking />
          </HodViewsLayout>
        }
    />
    <Route
        path="/dashboard-customer" element={
          <HodViewsLayout >
          <DashboardCustomer />
          </HodViewsLayout>
        }
    />
    <Route
        path="/hair-style" element={
          <HodViewsLayout >
          <HairStyleAd />
          </HodViewsLayout>
        }
    />
    <Route
        path="/package-style" element={
          <HodViewsLayout >
          <PackageAd />
          </HodViewsLayout>
        }
    />
    
    <Route
        path="/dashboard-staff" element={
          <HodViewsLayout >
          <DashboardStaff />
          </HodViewsLayout>
        }
    />
    <Route
        path="/queue-display" element={
          <HodViewsLayout >
          <QueueDisplay />
          </HodViewsLayout>
        }
    />
    <Route path="/signup" element={<SignUpSide />}/>
    <Route path="/payment" element={<PaymentPage />}/>

    </Routes>
      <CustomerPages/>
      <AdminPages />
      <StaffPages />
      </>
  );
}

export default App;
