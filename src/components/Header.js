import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import userContext from "../utils/UserContext";

const Title = () => {
  return (
    <a href="/">
      <img
        className="h-16"
        alt="logo"
        src="https://seeklogo.com/images/S/swiggy-logo-8EF8260FA4-seeklogo.com.png"
      />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isOnline = useIsOnline();
  const { user } = useContext(userContext);

  const handleIsLoggedIn = (boolean) => {
    setIsLoggedIn(boolean);
  };

  return (
    <div className="sm:flex justify-between items-center p-2 bg-pink-50 shadow-lg text-center">
      <Title />
      <div className="nav-items w-32 sm:w-auto">
        <ul className="flex">
          <li key={1} className="px-4">
            <Link to="/">Home</Link>
          </li>

          <li key={2} className="px-4">
            <Link to="/about">About</Link>
          </li>

          <li key={3} className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li key={4} className="px-4">
            Cart
          </li>
          <li key={5} className="px-4">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      <h4>
        {user.name} <br /> {user.email}
      </h4>
      {isLoggedIn ? (
        <button onClick={() => handleIsLoggedIn(false)}>Log Out</button>
      ) : (
        <button onClick={() => handleIsLoggedIn(true)}>Log In</button>
      )}
    </div>
  );
};

export default Header;
