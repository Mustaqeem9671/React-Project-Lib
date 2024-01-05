// Favourite.jsx
import React from 'react';
import '../../styles/Fav.css'

const Favourite = ({ cart }) => {
  return (
    <div className='fav'>
      {cart.map((data) => (
        <>
        <div className="pic" key={data.id}>
        <img src={data.thumbnailUrl} alt='' />

        </div>
         <div className="hkuch">
         <h3>Title: {data.title}</h3>
         <h3>Authors: {data.authors}</h3>
         <h3>Categories: {data.categories}</h3>
         <h3>PageCount: {data.pageCount}</h3>
         {/* <button onClick={handleBack} className="back">Back</button> */}
       
       </div>
       </>

      ))}
    </div>
  );
};

export default Favourite;
