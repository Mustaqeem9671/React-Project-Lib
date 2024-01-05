import React from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css"

const LandingPage = () => {
  return (
    <div className="landing">
      <h1>Free Flex Lib</h1>
      <div className="loginoptions">
        <Link id="modules" to="/admin-login">
          <button>Admin Login</button>
        </Link>
        <Link id="modules" to="/user-login">
          <button>User Login</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
