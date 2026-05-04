import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router";
import coderImage from "@assets/coder.svg";
import meshImage from "@assets/mesh.svg";
import filler from "@assets/extra-space-filler.svg";

/* Scrolling marquee — two copies for seamless loop */
const marqueeItems = [
  "Java 21", "Spring Boot", "ExecutorService", "PostgreSQL",
  "Django REST", "AWS Lambda", "Docker", "Redis",
  "React", "TypeScript", "Fintech", "CI/CD",
  "Microservices", "EXPLAIN Plans", "Vue.js", "Linux",
  "Idempotency", "Batch Processing", "GitHub Actions", "Hibernate",
];

const Intro = () => {
  return (
    <div className="hero-root">
      {/* Subtle dot-grid background */}
      <div className="hero-grid-bg" aria-hidden="true" />

      <div className="hero-inner">
        {/* ── Left ── */}
        <div className="hero-left">
          {/* Status badge */}
          <div className="hero-status">
            <span className="hero-status-dot" />
            Available for new opportunities
          </div>

          {/* Main headline */}
          <h1 className="hero-headline">
            Backend-Focused
            <br />
            <span className="hero-headline-grad">
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2000,
                  "Systems Architect",
                  2000,
                  "Fintech Engineer",
                  2000,
                  "",
                  400,
                ]}
                wrapper="span"
                speed={55}
                cursor
                repeat={Infinity}
              />
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="hero-sub">
            3+ years delivering production-grade fintech systems, concurrent
            data pipelines, and high-throughput Java backends at scale.
          </p>

          {/* Impact badges */}
          <div className="hero-badges">
            {[
              { v: "3+", l: "Years" },
              { v: "Java 21", l: "Backend" },
              { v: "Fintech", l: "Domain" },
              { v: "AWS", l: "Cloud" },
            ].map((b) => (
              <div key={b.l} className="hero-badge">
                <span className="hero-badge-val">{b.v}</span>
                <span className="hero-badge-lbl">{b.l}</span>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="hero-ctas">
            <Link to="/skills" className="hero-cta-primary" id="hero-skills-cta">
              View Engineering Skills
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a
              href="mailto:darabahmed37@gmail.com?subject=Engineering Role Opportunity — Darab Ahmed"
              className="hero-cta-secondary"
              id="hero-contact-cta"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* ── Right (illustration) ── */}
        <div className="hero-right">
          <div className="hero-img-wrap">
            <img src={coderImage} alt="Engineer illustration" className="hero-coder-img" />
            <img src={meshImage} alt="" className="hero-mesh" aria-hidden="true" />
            {/* Glow orb */}
            <div className="hero-orb" aria-hidden="true" />
          </div>

          {/* "Open to work" card */}
          <div className="hero-work-card">
            <span className="hero-work-dot" />
            <span className="hero-work-text">
              Open to <strong>Backend / Fintech</strong> roles
            </span>
          </div>
        </div>
      </div>

      {/* ── Scrolling marquee ── */}
      <div className="hero-marquee-wrap" aria-hidden="true">
        <div className="hero-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="hero-marquee-item">{item}</span>
          ))}
        </div>
      </div>

      <img id="space-filler" src={filler} alt="" aria-hidden="true" />
    </div>
  );
};

export default Intro;
