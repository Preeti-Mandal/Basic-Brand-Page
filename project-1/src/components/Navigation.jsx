const NavBar = () => {
  return (
      <nav>
        <div className="Logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li href="#menu">Menu</li>
          <li href="#location">Location</li>
          <li href="#about">About</li>
          <li href="#contact">Contact Us</li>
        </ul>
        <button>Login</button>
      </nav>
   
  );
};
export default NavBar;
