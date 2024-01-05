import React, {} from "react";
import "./User.css";
// import NewUser from "./NewUser";
import { Link, useNavigate} from "react-router-dom";

const UserLogin = () => {

  let navigate = useNavigate()

  const userLoginD=()=>{
    navigate('/userpage')
  }
  


  return (
    <div className="user">
      <h1>Welcome To User Page</h1>
      <form action="" >
        <div className="form">
          <div className="email">
            <input type="email"  name="username" placeholder="Username" />
          </div>
          <div className="password">
            <input
              type="password"
              name="password"
             
              id="pwd"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="btn">
          <button type="submit" onClick={userLoginD} >Login</button>
        </div>
        
        <div className="newuser">
          Don't have an account?{" "}
          <Link id="reg" to="/new-user">click here</Link>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
