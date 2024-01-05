// UserPage.jsx
import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import Home from '../Home';
import Books from '../Books';
import Navbar from '../Navbar';
import ReadBooks from '../adminLogin/ReadBooks';
import Favourite from './Favourite';

const UserPage = () => {
  const [cart, setCart] = useState([]);
 

  return (
    <div className='userpage'>
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Books />} path='/books' />
        <Route
          element={<ReadBooks cart={cart} setCart={setCart} />}
          path='books/:id'
        />
        {cart.length > 0 && (
          <Route 
            element={<Favourite cart={cart} />}
            path='/favourite'
          />
        )}
      </Routes>
    </div>
  );
};

export default UserPage;
