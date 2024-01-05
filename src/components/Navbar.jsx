import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {

  let location = useLocation();
  let path = location.pathname.startsWith("/adminPortal");

  return (
    <div className="nav-bar">
      <div className="logo">
        <h1>Free Flex Lib</h1>
      </div>

      <div id="links">
        {path ?
        <>
        <Link to="/adminPortal">Home</Link>
        <Link to="/adminPortal/books">Books</Link>
        <Link to="/adminPortal/allusers">Users</Link>
        <Link to="/adminPortal/addbooks">Add Books</Link>
        <Link to="/adminPortal/addusers">Add Users</Link>
        <Link to="/admin-login">Logout</Link>
        </>
      :
      <>
      <Link to="/userpage">Home</Link>
      <Link to="/userpage/books">Books</Link>
      <Link to="/userpage/favourite" >Favorite</Link>
      <Link to="/user-login">Logout</Link>

      </>

       } 
      </div>
    </div>
  );
};

export default Navbar;
