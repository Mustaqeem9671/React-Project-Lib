import React from 'react';
// import '../../styles/AdminPortal.css';
import {  Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar';
import Home from '../Home';
import AllUsers from '../adminLogin/AllUsers'
import AddBooks from './AddBooks'
import Books from '../Books';
import ReadBooks from './ReadBooks';
import AddUsers from './AddUsers';

const AdminPrtal = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* <h2>Welcome To Admin Portal</h2> */}
      </div>
     <div className="links">
      <Navbar/>
      <Routes>
        <Route element={<Home />} path='/'/>
        <Route element={<Books />} path='/books'/>
        <Route element={<AllUsers />} path='/allusers'/>
        <Route element={<AddBooks />} path='/addbooks'/>
        {/* <Route element={<ReadBooks />} path='/readbooks'/> */}
        <Route path="books/:id" element={<ReadBooks />} />
        <Route element={<AddUsers />} path='/addusers'/>
      </Routes>
     </div>
    </nav>
  );
};

export default AdminPrtal;
