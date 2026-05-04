import { Link } from "react-router";
import {
  FiZap, FiDatabase, FiDollarSign, FiArrowRight,
} from "react-icons/fi";

const highlights = [
  {
    icon: <FiDollarSign />,
    accent: "#a78bfa",
    title: "Fintech Production Systems",
    desc: "Designed atomic payment flows, idempotency at the API layer, and failure-safe retry strategies in live fintech infrastructure at i2cinc.",
    tags: ["Transaction Safety", "Idempotency", "Audit Trails"],
  },
  {
    icon: <FiZap />,
    accent: "#f59e0b",
    title: "Concurrency & Performance",
    desc: "Architected multi-threaded batch pipelines using Java's ExecutorService — cutting processing time through parallelism on CPU and I/O-bound workloads.",
    tags: ["ExecutorService", "Thread Pools", "Batch Pipelines"],
  },
  {
    icon: <FiDatabase />,
    accent: "#34d399",
    title: "Database Engineering",
    desc: "Diagnosed slow queries in production using EXPLAIN ANALYZE, redesigned index strategies, and eliminated full-table scans — measurable latency reductions.",
    tags: ["EXPLAIN Plans", "Index Design", "Query Optimization"],
  },
];

const SkillsTeaser = () => (
  <section className="st-root">
    {/* Section label */}
    <div className="st-label">Engineering Depth</div>

    {/* Hook headline */}
    <h2 className="st-headline">
      Not just a developer.
      <br />
      <span className="st-headline-accent">An engineer who owns production.</span>
    </h2>
    <p className="st-sub">
      Here's a snapshot of where the depth actually lives — click through to see the full breakdown.
    </p>

    {/* 3 highlight cards */}
    <div className="st-cards">
      {highlights.map((h) => (
        <div
          key={h.title}
          className="st-card"
          style={{ "--stc-accent": h.accent } as React.CSSProperties}
        >
          <span className="stc-icon">{h.icon}</span>
          <h3 className="stc-title">{h.title}</h3>
          <p className="stc-desc">{h.desc}</p>
          <div className="stc-tags">
            {h.tags.map((t) => (
              <span key={t} className="stc-tag">{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Big pulsing CTA */}
    <div className="st-cta-wrap">
      <Link to="/skills" className="st-cta-btn" id="skills-teaser-cta">
        <span>Explore Full Engineering Profile</span>
        <FiArrowRight className="st-cta-arrow" />
      </Link>
      <p className="st-cta-hint">8 capability deep-dives · live diagrams · tech stack</p>
    </div>
  </section>
);

export default SkillsTeaser;
