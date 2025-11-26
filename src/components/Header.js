import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserInfoContext from "../utils/UserInfoContext";

const Title = () => {
  return (
    <Link to="/">
      <img
        className="logo w-20 ml-4"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbgjA8oGi_8oCqoJocOuoKn269pahSDrnVfw&s"
        alt=""
      />
    </Link>
  );
};

//Toggle Login Logout button - Logic
const loggedInUser = () => {
  //API call to check
  return false;
};

const Header = () => {
  const {loggedInUser} = useContext(UserInfoContext);
  const onlineStatus = useOnlineStatus();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header flex justify-between bg-amber-100">
      <Title />
      <div className="nav-items flex items-center ">
        <ul className="flex ">
          <li className="pr-3">Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li className="pr-3">
            <Link to="/">Home</Link>
          </li>

          <li className="pr-3">
            <Link to="/contact">Contact </Link>
          </li>
          <li className="pr-3">
            <Link to="/about">About</Link>
          </li>
          <li className="pr-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="pr-3">
            <Link to="/cart">Cart</Link>
          </li>
          <li>{loggedInUser}</li>
        </ul>
        {isLoggedIn ? (
          <button
            className="border px-4 rounded-md bg-stone-300"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className="border px-4 rounded-md bg-blue-500 text-white"
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
