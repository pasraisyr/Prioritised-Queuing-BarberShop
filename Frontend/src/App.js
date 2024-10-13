import React from 'react';
import { ColorModeContext, useMode } from "./base/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import BasicTopbar from "./HodViews/scense/global/BasicTopbar";
import { Routes, Route } from "react-router-dom";
import AdminPages from "./AdminPages";
import SignInSide from "./FrontEnd/login/SignInSide";
import SignUpSide from "./FrontEnd/signup/SignUpSide";
import UpdateUserForm from "./FrontEnd/signup/UpdateUserForm";
import UpdatePassword from "./FrontEnd/signup/UpdatePassword";
import StaffPages from "./StaffPages";
import CustomerPages from "./CustomerPages";
import MainPage from "./FrontEnd/MainPage";
import NewBooking from "./FrontEnd/booking/NewBooking";
import PackageAd from "./FrontEnd/ads/PackageAd";
import HairStyleAd from "./FrontEnd/ads/HairStyleAd";
import PaymentPage from "./FrontEnd/booking/PaymentPage";
import EditHairStyle from "./FrontEnd/ads/edithairstyle";
import EditPackageStyle from "./FrontEnd/ads/editpackagestyle";
import DashboardStaff from "./StaffViews/scense/dashboard";
import QueueDisplay from './FrontEnd/booking/QueueDisplay';
import CustomerProfile from "./FrontEnd/CusProfile/CustomerProfile";
import DashboardCustomer from "./CustomersViews/scense/dashboard";



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
  

function App() {
  return (
    <>
   
    <Routes>
      

    <Route path="/" element={
      <HodViewsLayout> 
        <MainPage />
      </HodViewsLayout>}
      />

      <Route path="/CustomerProfile" element={
        <HodViewsLayout >
        <CustomerProfile />
        </HodViewsLayout>
      }
      />

    
   
    <Route
        path="/signin" element={
          <HodViewsLayout showTopbar={false}>
          <SignInSide />
          </HodViewsLayout>
        }
    />

     <Route
        path="/signup" element={
          <HodViewsLayout showTopbar={false}>
          <SignUpSide />
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
          <HodViewsLayout> 
          <HairStyleAd/>
          </HodViewsLayout> 
          }
       />

      <Route 
       path="/package-style" element={
          <HodViewsLayout> 
          <PackageAd/>
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

       <Route
        path="/payment" element={
          <HodViewsLayout showTopbar={false}>
          <PaymentPage />
          </HodViewsLayout>
          }
          />
    


      <Route 
        path="/edit-hairstyle" element={
          <HodViewsLayout> 
            <EditHairStyle/>
            </HodViewsLayout> 
            } 
      />
      <Route 
       path="/edit-packagestyle" element={
          <HodViewsLayout> 
          <EditPackageStyle/>
          </HodViewsLayout> 
          }
       />

<Route 
       path="/update-user" element={
          <HodViewsLayout> 
          <UpdateUserForm/>
          </HodViewsLayout> 
          }
       />

<Route 
       path="/update-password" element={
          <HodViewsLayout> 
          <UpdatePassword/>
          </HodViewsLayout> 
          }
       />



    </Routes>
      <CustomerPages/>
      <AdminPages />
      <StaffPages />
      </>

    
  );
}

export default App;