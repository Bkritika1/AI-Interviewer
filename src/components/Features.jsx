import "./features.css";

const Features = () => {
  return (
    <section className="features">
      <div className="features-heading">
        <h2>The Ultimate Interview Preparation Suite</h2>
        <p>
          Our AI provides comprehensive feedback across all technical domains
          to ensure you're job-ready.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <h3>Topic-wise Prep</h3>
          <p>
            Master DSA, Algorithms, and System Design with curated learning
            paths.
          </p>
          <img src='../../image2.png'/>

        </div>

        <div className="feature-card">
          <h3>Code Review</h3>
          <p>
            Get instant, line-by-line feedback to optimize your solutions.
          </p>
          <img src='../../image3.png'/>

        </div>

        <div className="feature-card">
          <h3>Speaking Mode</h3>
          <p>
            Practice communication skills with voice-based mock interviews.
          </p>
          <img src='../../image4.png'/>
        </div>
      </div>
    </section>
  );
};

export default Features;
