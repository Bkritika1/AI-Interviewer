import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h3>AI Interviewer</h3>
        <p>
          Helping developers master technical interviews through AI coaching.
        </p>
      </div>

      <div className="footer-links">
        <div>
          <h4>Product</h4>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
        </div>

        <div>
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
