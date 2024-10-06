// App.js
import { Routes, Route } from "react-router-dom";
import AdminPages from "./AdminPages";
import SignInSide from "./FrontEnd/login/SignInSide";
import SignUpSide from "./FrontEnd/signup/SignUpSide"
import StaffPages from "./StaffPages";
import UserCatalogue from "./FrontEnd/others/UserCatalogue";
import BookingForm from "./FrontEnd/BookingForm";

function App() {
  return (
    <>
    <Routes>
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
      <Route path="booking-form" element={<BookingForm />} />
    </Routes>
      <AdminPages />
      <StaffPages />
      </>
  );
}

export default App;
