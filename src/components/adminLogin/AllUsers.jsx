import React, { useEffect, useState } from 'react';
import '../../styles/AllUsers.css'

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:600/users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Error in fetching", err);
      }
    };
    fetchUser();
  }, [users]);

  return (
    <div className='allusers'>
      {users.map((x) => (
        <div className="users" key={x.id}>
          <h2>Name: {x.name}</h2>
          <h2>Email: {x.email}</h2>
          <h2>Phone: {x.phone}</h2>
          <h2>City: {x.city}</h2><br />
        </div>
      ))}
    </div>
  );
};

export default AllUsers;
