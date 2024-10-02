// App.js
import { Routes, Route } from "react-router-dom";
import AdminPages from "./AdminPages";
import SignInSide from "./FrontEnd/scense/SignInSide";
import StaffPages from "./StaffPages";

function App() {
  return (
    <>
    <Routes>
    <Route
        path="/"
        element={
            <SignInSide />
        }
      />
    </Routes>
      <AdminPages />
      <StaffPages />
      </>
  );
}

export default App;
