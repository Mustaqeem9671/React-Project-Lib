import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Admin from "./components/adminLogin/Admin";
import AdminPortal from "./components/adminLogin/AdminPortal";
import NewUser from "./components/userLogin/NewUser";
import UserLogin from "./components/userLogin/UserLogin";
import UserPage from "./components/userLogin/UserPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<Admin />} path="/admin-login" />
          <Route element={<UserLogin />} path="/user-login" />
          <Route element={<AdminPortal />} path="/adminPortal/*" />
          <Route element={<NewUser />} path="/new-user" />
          <Route element={<UserPage />} path="/userpage/*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
