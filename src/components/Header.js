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
          <li key={1}>Home</li>
          <li key={2}>About</li>
          <li key={3}>Contact</li>
          <li key={4}>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
