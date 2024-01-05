import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import "../styles/Books.css";

const Books = () => {
  const [books, setBooks] = useState([]);
   const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:600/books");
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchData();
  }, [books]);

  const readBook = (id) => {
    if (path) {
      navigate(`/adminPortal/books/${id}`);
    } else {
      navigate(`/userpage/books/${id}`);
    }
  };

  const bookDelet = (id) => {
    window.confirm('Are you sure to delete this Book?');
    fetch(`http://localhost:600/books/${id}`, { method: "DELETE" });
  };

  let location = useLocation();
  let path = location.pathname.startsWith("/adminPortal");

  return (
    <div className="books">
      <div className="books_list">
        {books.map((x) => (
          <div className="book" key={x.id}>
            <div className="img-container">
              <img id="img" src={x.thumbnailUrl} alt="" />
            </div>
            <div className="detail">
              <h3>Title: {x.title}</h3>
              <h3>Authors: {x.authors}</h3>
              <h3>Categories: {x.categories}</h3>
              <h3>PageCount: {x.pageCount}</h3>
            </div>
            <div className="baton">
              <button id="buton" onClick={() => readBook(x.id)}>
                Read Book
              </button>
              {path ? (
                <button id="buton" onClick={() => bookDelet(x.id)}>
                  Delete Book
                </button>
              ) : (
                " "
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
