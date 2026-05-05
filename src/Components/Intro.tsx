import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LiveTerminal from "./LiveTerminal";
import LiveMetrics from "./LiveMetrics";



/* Scrolling marquee — two copies for seamless loop */
const marqueeItems = [
  "Java", "Spring Boot", "ExecutorService", "PostgreSQL",
  "Django REST", "AWS Lambda", "Docker", "Redis",
  "React", "TypeScript", "Fintech", "CI/CD",
  "Microservices", "EXPLAIN Plans", "Vue.js", "Linux",
  "Idempotency", "Batch Processing", "GitHub Actions", "Hibernate",
];

const Intro = () => {
  const [tab, setTab] = useState<"terminal" | "metrics">("terminal");
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
              { v: "Java", l: "Backend" },
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
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=darabahmed37@gmail.com&su=Engineering%20Opportunity%20%E2%80%94%20Darab%20Ahmed&body=Hi%20Darab%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out%20about%20a%20potential%20opportunity.%0A%0A%5BPlease%20describe%20the%20role%20%2F%20project%5D%0A%0ALooking%20forward%20to%20connecting.%0A%0ARegards%2C%0A%5BYour%20Name%5D`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-secondary"
              id="hero-contact-cta"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* ── Right (live animations) ── */}
        <div className="hero-right">
          {/* Tab switcher */}
          <div className="hero-anim-tabs">
            <button
              className={`hero-anim-tab ${tab === "terminal" ? "is-active" : ""}`}
              onClick={() => setTab("terminal")}
            >
              ⌨ Terminal
            </button>
            <button
              className={`hero-anim-tab ${tab === "metrics" ? "is-active" : ""}`}
              onClick={() => setTab("metrics")}
            >
              📊 Metrics
            </button>
          </div>


          {/* Animation panel — fixed height so content never resizes it */}
          <div className="hero-anim-panel">
            <div className="hero-orb" aria-hidden="true" />
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22, ease: "easeInOut" }}
                style={{ height: "100%" }}
              >
                {tab === "terminal" ? <LiveTerminal /> : <LiveMetrics />}
              </motion.div>
            </AnimatePresence>
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


    </div>
  );
};

export default Intro;
