import "./pricing.css";

const Pricing = () => {
  return (
    <section className="pricing">
      <h2>Simple, Transparent Pricing</h2>
      <p className="pricing-sub">
        Plans designed for every stage of your job hunt.
      </p>

      <div className="pricing-grid">
        <div className="pricing-card">
          <h4>Standard</h4>
          <h3>$0<span>/mo</span></h3>
          <button>Get Started Free</button>
          <ul>
            <li>5 Mock Interviews / Month</li>
            <li>Basic Code Feedback</li>
            <li className="disabled">System Design Access</li>
          </ul>
        </div>

        <div className="pricing-card featured">
          <span className="badge">Most Popular</span>
          <h4>Premium</h4>
          <h3>$29<span>/mo</span></h3>
          <button className="primary-btn">Upgrade to Pro</button>
          <ul>
            <li>Unlimited Mock Interviews</li>
            <li>Advanced Code Review</li>
            <li>Speaking Mode</li>
            <li>System Design Tools</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
