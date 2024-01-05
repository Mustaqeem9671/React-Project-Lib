import React, { useRef } from "react";
import { useNavigate } from "react-router";
import "../../styles/Admin.css"

const Admin = () => {
  
  let email = useRef();
  let password = useRef();
  let navigate = useNavigate();

  let loginFun = (e) => {
    e.preventDefault();
    let admin = {
      // email: "mustaqeem9671@gmail.com",
      email: "musta",
      password: "123456",
    };

    if (
      email.current.value === admin.email &&
      password.current.value === admin.password
    ) {
      //navigate to admin portal
      navigate("/adminPortal");
    } else {
      alert("Invalid user details");
    }
  };
  return (
    <div className="main">
      <div className="admin">
        <h2>Admin Details</h2>
        <div className="adminForm">
          <form onSubmit={loginFun}>
            <div className="adminEmail">
              <input
                type="text"
                placeholder="enter your email address"
                ref={email}
              />
            </div>
            <div className="adminPassword">
              <input
                type="password"
                placeholder="enter your password"
                ref={password}
              />
            </div>
            <div className="loginBtn">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
