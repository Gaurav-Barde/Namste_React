import { useState } from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png"
      />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isOnline = useIsOnline();

  const handleIsLoggedIn = (boolean) => {
    setIsLoggedIn(boolean);
  };

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li key={1}>
            <Link to="/">Home</Link>
          </li>

          <li key={2}>
            <Link to="/about">About</Link>
          </li>

          <li key={3}>
            <Link to="/contact">Contact</Link>
          </li>
          <li key={4}>Cart</li>
          <li key={5}>
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      {isLoggedIn ? (
        <button onClick={() => handleIsLoggedIn(false)}>Log Out</button>
      ) : (
        <button onClick={() => handleIsLoggedIn(true)}>Log In</button>
      )}
    </div>
  );
};

export default Header;
