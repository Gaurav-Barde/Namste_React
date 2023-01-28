import { Link } from "react-router-dom";

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
        </ul>
      </div>
    </div>
  );
};

export default Header;
