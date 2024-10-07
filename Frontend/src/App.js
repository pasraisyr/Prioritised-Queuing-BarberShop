// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPages from "./AdminPages";
import SignInSide from "./FrontEnd/login/SignInSide";
import SignUpSide from "./FrontEnd/signup/SignUpSide"
import StaffPages from "./StaffPages";
import UserCatalogue from "./FrontEnd/others/UserCatalogue";
import CustomerPages from "./CustomerPages";
import MainPage from "./FrontEnd/MainPage";
// import BookingForm from "./CustomersViews/scense/dashboard";
// import DashboardCustomer from "./CustomersViews/scense/dashboard";


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<MainPage />} />
    <Route
        path="/signin"
        element={
            <SignInSide />
        }
      />
      <Route path="/signup" element={<SignUpSide />} />
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
