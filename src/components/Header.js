import { useState } from "react";

const Title = () => {
  return (
    <a href="">
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbgjA8oGi_8oCqoJocOuoKn269pahSDrnVfw&s"
        alt=""
      />
    </a>
  );
};

//Toggle Login Logout button - Logic
const loggedInUser = () => {
  //API call to check
  return false;
}

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (<button onClick={()=>setIsLoggedIn(false)}>Logout</button> ): (<button onClick={()=>setIsLoggedIn(true)}>Login</button>)}
    </div>
  );
};

export default Header;
