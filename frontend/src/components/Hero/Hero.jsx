import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>Learn. Prepare. Get Hired.</h1>

        <p className="subtitle">
          Your Voice-Enabled Study & Career Companion
        </p>

        <p className="description">
          WINGS AI helps students learn smarter, prepare for careers,
          build resumes, practice interviews, and stay organized
          with AI.
        </p>

        <div className="hero-buttons">
          <button>Get Started</button>
          <button>Watch Demo</button>
        </div>

      </div>

      <div className="hero-right">

      </div>

    </section>
  );
}

export default Hero;