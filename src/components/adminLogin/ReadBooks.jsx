import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

import '../../styles/ReadBooks.css'

const ReadBooks = ({ cart, setCart }) => {
  console.log(cart)
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`http://localhost:600/books/${id}`);
        const data = await response.json();
        setBook(data);
      } catch (khatam) {
        console.log("fetching error", khatam);
      }
    };
    fetchBooks();
  }, [id]);

  let navigate=useNavigate()
  const handleBack = () => {
    if(path){

      navigate('/userpage/books'); 
    } else {
      navigate('/adminPortal/books')
    }
  };

  let location = useLocation();
  let path = location.pathname.startsWith("/userpage");

  const onFav=()=>{
    alert(`The book is added in Favourite`)
  }

  return (
    <div className="readbooks">
      {book ? (
        <>
          <div className="poster">
            <img src={book.thumbnailUrl} alt={book.title} />
          </div>
          <div className="details">
            <h3>Title: {book.title}</h3>
            <h3>Authors: {book.authors}</h3>
            <h3>Categories: {book.categories}</h3>
            <h3>PageCount: {book.pageCount}</h3>
            <button onClick={handleBack} className="back">Back</button>
            {path ? <button  onClick={()=>setCart([...cart, book], {onFav}) } className="fav" >Favorites</button> : "" }
          
          </div>
         
        </>
      ) : (
        <>
        
        <p>hogaya</p>
        </>
      )}
      
    </div>
    
  );
};

export default ReadBooks;
