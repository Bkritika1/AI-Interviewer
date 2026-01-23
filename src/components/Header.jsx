import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        🧠 <span>AI Interviewer</span>
      </div>

      <nav className="nav">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Success Stories</a>
        <button className="primary-btn">Get Started</button>
      </nav>
    </header>
  );
};

export default Header;
