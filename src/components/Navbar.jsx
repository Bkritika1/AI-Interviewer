import "./navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="logo-icon">
          <svg viewBox="0 0 48 48">
            <path d="M4 42.4s10.1-6.3 20-1.2C35.1 46.9 44 42.2 44 42.2V7s-8.9 4.6-20  -1.1C14.1.9 4 7.3 4 7.3Z" />
          </svg>
        </div>
        <h2>DevPrep AI</h2>
      </div>

      <div className="navbar-right">
        <button className="icon-btn">⚙️</button>
        <div className="avatar"></div>
      </div>
    </header>
  );
};

export default Navbar;
