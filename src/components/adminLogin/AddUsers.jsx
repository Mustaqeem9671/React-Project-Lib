import React, { useRef } from "react";
import '../../styles/AddUsers.css'

const AddUsers = () => {
 
  let id=useRef();
  let name=useRef();
  let email=useRef();
  let phone=useRef();

  const adduser =(e)=>{
    e.preventDefault();
    let data = {
      "id": id.current.value,
      "name": name.current.value,
      "email": email.current.value,
      "phone": phone.current.value,
    }
    fetch('http://localhost:600/users',{
      method : 'POST',
      headers : {'Content-type':'application/json'},
      body : JSON.stringify(data)
    }).then(()=>{
      alert('Data has been added')
    })
  }


  return (
    <div className="addusers">
      <div className="h1">
        <h1>Add Users Here!</h1>
      </div>
      <div className="forms" >
        <form action="" onSubmit={adduser}>

          <input type="text" id="id" ref={id} name="id" placeholder="enter your id here" />
          
            <input type="text" ref={name} name="username" id="name" placeholder="username" />
          
    
            <input type="text" ref={email} name='phone' id="phone" placeholder="phone number" />
        

            <input type="text" ref={phone} name="age" id="age" placeholder="enter your age" />
          
        
          <div id="button">
          <input type="submit" value="Submit"  />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUsers;
