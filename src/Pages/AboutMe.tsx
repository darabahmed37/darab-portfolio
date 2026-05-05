import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Heading from "../Components/Heading.tsx";
import {
  FiBriefcase,
  FiBook,
  FiCpu,
  FiMessageCircle,
  FiZap,
} from "react-icons/fi";

/* ─── Framer variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

/* ─── Skill bar data ─── */
const skills = [
  { name: "Java / Spring Boot", pct: 90, color: "#f59e0b" },
  { name: "Python / Django", pct: 85, color: "#c778dd" },
  { name: "PostgreSQL / MySQL", pct: 82, color: "#34d399" },
  { name: "React / TypeScript", pct: 78, color: "#38bdf8" },
  { name: "AWS / Docker / CI/CD", pct: 75, color: "#60a5fa" },
  { name: "Concurrency Design", pct: 88, color: "#fb923c" },
];

/* ─── Skill Bar component ─── */
function SkillBar({ name, pct, color }: { name: string; pct: number; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div className="am-skill-row" ref={ref}>
      <div className="am-skill-meta">
        <span className="am-skill-name">{name}</span>
        <span className="am-skill-pct">{pct}%</span>
      </div>
      <div className="am-skill-track">
        <div
          className="am-skill-fill"
          style={{
            width: inView ? `${pct}%` : "0%",
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            boxShadow: inView ? `0 0 8px ${color}66` : "none",
            transition: "width 1.2s cubic-bezier(0.4,0,0.2,1), box-shadow 0.6s ease",
          }}
        />
      </div>
    </div>
  );
}

/* ─── Animated counter ─── */
function AnimatedCount({ target, suffix = "" }: { target: number | string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState<string>("0");

  useEffect(() => {
    if (!inView || typeof target !== "number") {
      setDisplay(String(target));
      return;
    }
    let start = 0;
    const duration = 1200;
    const step = 16;
    const steps = duration / step;
    const inc = target / steps;
    const timer = setInterval(() => {
      start += inc;
      if (start >= target) {
        setDisplay(String(target));
        clearInterval(timer);
      } else {
        setDisplay(String(Math.floor(start)));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* ─── Timeline entry ─── */
type TlEntry = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  desc: string;
  bullets: string[];
  accent: string;
};

function TimelineEntry({ entry, index }: { entry: TlEntry; index: number }) {
  return (
    <motion.div
      className="am-tl-entry"
      variants={fadeUp}
      custom={index}
    >
      <div className={`am-tl-dot ${entry.current ? "active" : ""}`} />
      <div className="am-tl-card" style={{ borderColor: "rgba(171,178,191,0.1)" }}>
        <div className="am-tl-header">
          <h4 className="am-tl-role">{entry.role}</h4>
          <span className={`am-tl-badge ${entry.current ? "current" : ""}`}>
            {entry.current ? "● Present" : ""} {entry.period}
          </span>
        </div>
        <p className="am-tl-company">
          <span style={{ color: entry.accent }}>//</span> {entry.company}
        </p>
        <p className="am-tl-desc">{entry.desc}</p>
        <div className="am-tl-bullets">
          {entry.bullets.map((b, i) => (
            <motion.div
              key={i}
              className="am-tl-bullet"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.35 }}
            >
              <span className="am-tl-bullet-dot" style={{ background: entry.accent }} />
              {b}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Data ─── */
const experience: TlEntry[] = [
  {
    role: "Software Engineer",
    company: "i2cinc — Lahore, Pakistan",
    period: "10/2024 – Present",
    current: true,
    accent: "#c778dd",
    desc: "Production fintech codebase. Full ownership of features across backend logic, database design, and frontend integration.",
    bullets: [
      "Designed and delivered enterprise payment system features end-to-end — owning domain modelling, business logic, API contracts, and database schema for modules in production use.",
      "Engineered transaction workflows with atomic state transitions and idempotency guarantees, ensuring payment reliability under network failures and concurrent requests.",
      "Led a production Java application through a major JDK version upgrade — resolving API deprecations, module system incompatibilities, and dependency chains while maintaining stability.",
      "Architected multi-threaded batch processing pipelines using Java's ExecutorService, achieving near-linear throughput gains through parallelisation of sequential workloads.",
      "Optimised critical queries via EXPLAIN ANALYZE — redesigning index strategies and eliminating full-table scans with measurable latency reductions on production data.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Devsinc — Lahore, Pakistan",
    period: "03/2023 – 06/2024",
    accent: "#f59e0b",
    desc: "Software consultancy. Delivered full-stack projects across multiple client domains, building systems from scratch and migrating legacy applications.",
    bullets: [
      "Designed and maintained web applications using Django REST Framework, Flask, React, and Vue.js — taking full ownership of backend architecture, API design, and frontend integration.",
      "Led a .NET to Django migration — re-architecting the backend while preserving business logic and improving long-term maintainability.",
      "Deployed and managed cloud infrastructure on AWS (EC2, S3, Lambda, Elastic Beanstalk), configuring environments and scaling policies for client applications.",
      "Built CI/CD pipelines with GitHub Actions and containerised services with Docker, enabling consistent automated deployments across environments.",
      "Implemented authentication and authorisation systems (JWT, session-based, RBAC) as integral application architecture — not isolated features.",
    ],
  },
];

const philosophies = [
  {
    accent: "#c778dd",
    text: "I approach engineering as a <strong>design discipline</strong>. Every decision has trade-offs — between performance and complexity, between speed and correctness. I reason through the constraints and choose deliberately rather than by convention.",
  },
  {
    accent: "#f59e0b",
    text: "I care about systems that <strong>work correctly under load</strong>, fail predictably, and remain understandable to the next engineer who touches them. Sustainable engineering is more valuable than clever engineering.",
  },
  {
    accent: "#34d399",
    text: "Code I write is <strong>optimised for the next reader</strong> — narrow function scope, intentional naming, inline rationale for non-obvious decisions. Readability is a performance metric.",
  },
];

/* ─── Main page ─── */
const AboutMe = () => {
  return (
    <div className="am-page">
      <Heading title={"about me"} />

      {/* ── Hero Bio ── */}
      <motion.div
        className="am-hero"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp} className="am-hero-label">
          Software Engineer · Fintech · Backend
        </motion.div>

        <motion.h1 variants={fadeUp} className="am-name">
          Darab{" "}
          <span className="am-name-accent">Ahmed</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="am-tagline">
          <strong>3+ years</strong> delivering production-grade fintech systems in{" "}
          <strong>Lahore, Pakistan</strong>. I build high-throughput, reliable backend
          systems in Java and Python that operate correctly under load, handle failures
          gracefully, and remain maintainable as they grow. Bachelor's in Computer Science
          — full-lifecycle ownership from architecture through production debugging.
        </motion.p>

        {/* Stats strip */}
        <motion.div variants={fadeUp} className="am-stats">
          {[
            { val: 3, suffix: "+", lbl: "Years Exp." },
            { val: 2, suffix: "", lbl: "Companies" },
            { val: "Java", suffix: "", lbl: "Primary Stack" },
            { val: "AWS", suffix: "", lbl: "Cloud" },
            { val: "Fintech", suffix: "", lbl: "Domain" },
          ].map((s) => (
            <div key={s.lbl} className="am-stat">
              <span className="am-stat-val">
                {typeof s.val === "number" ? (
                  <AnimatedCount target={s.val} suffix={s.suffix} />
                ) : (
                  s.val
                )}
              </span>
              <span className="am-stat-lbl">{s.lbl}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Core Competencies (animated skill bars) ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div variants={fadeUp} className="am-section-head">
          <div
            className="am-section-icon"
            style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)", color: "#f59e0b" }}
          >
            <FiZap />
          </div>
          <h2 className="am-section-title">Core Competencies</h2>
          <div className="am-section-line" />
        </motion.div>

        <motion.div variants={fadeUp} className="am-skills-grid">
          {skills.map((s) => (
            <SkillBar key={s.name} {...s} />
          ))}
        </motion.div>
      </motion.div>

      {/* ── Work Experience (animated timeline) ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.div variants={fadeUp} className="am-section-head">
          <div
            className="am-section-icon"
            style={{ background: "rgba(199,120,221,0.1)", border: "1px solid rgba(199,120,221,0.2)", color: "#c778dd" }}
          >
            <FiBriefcase />
          </div>
          <h2 className="am-section-title">Work Experience</h2>
          <div className="am-section-line" />
        </motion.div>

        <div className="am-timeline">
          {experience.map((e, i) => (
            <TimelineEntry key={e.company} entry={e} index={i} />
          ))}
        </div>
      </motion.div>

      {/* ── Education ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.div variants={fadeUp} className="am-section-head">
          <div
            className="am-section-icon"
            style={{ background: "rgba(96,165,250,0.1)", border: "1px solid rgba(96,165,250,0.2)", color: "#60a5fa" }}
          >
            <FiBook />
          </div>
          <h2 className="am-section-title">Education</h2>
          <div className="am-section-line" />
        </motion.div>

        <motion.div variants={fadeUp} className="am-edu-card">
          <div className="am-edu-icon">🎓</div>
          <div>
            <p className="am-edu-degree">Bachelor of Science in Computer Science</p>
            <p className="am-edu-inst">Government College University — Lahore, Pakistan</p>
            <p className="am-edu-period">10/2019 – 08/2023</p>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Engineering Philosophy ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.div variants={fadeUp} className="am-section-head">
          <div
            className="am-section-icon"
            style={{ background: "rgba(199,120,221,0.1)", border: "1px solid rgba(199,120,221,0.2)", color: "#c778dd" }}
          >
            <FiCpu />
          </div>
          <h2 className="am-section-title">Engineering Philosophy</h2>
          <div className="am-section-line" />
        </motion.div>

        <div className="am-philosophy">
          {philosophies.map((p, i) => (
            <motion.div
              key={i}
              className="am-phil-card"
              style={{ "--phil-accent": p.accent } as React.CSSProperties}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p
                className="am-phil-text"
                dangerouslySetInnerHTML={{ __html: p.text }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Contact CTA ── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        <div className="am-section-head">
          <div
            className="am-section-icon"
            style={{ background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.2)", color: "#34d399" }}
          >
            <FiMessageCircle />
          </div>
          <h2 className="am-section-title">Get In Touch</h2>
          <div className="am-section-line" />
        </div>

        <div className="am-contact">
          <p className="am-contact-text">
            If you're looking for someone who can <strong>own backend systems end-to-end</strong>,
            reason about performance and reliability at the design level, and operate effectively
            inside complex production codebases — let's talk.
          </p>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=darabahmed37@gmail.com&su=Engineering%20Opportunity%20%E2%80%94%20Darab%20Ahmed&body=Hi%20Darab%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out%20about%20a%20potential%20engineering%20opportunity.%0A%0A%5BPlease%20describe%20the%20role%20%2F%20project%20here%5D%0A%0ALooking%20forward%20to%20connecting.%0A%0ARegards%2C%0A%5BYour%20Name%5D`}
            target="_blank"
            rel="noopener noreferrer"
            className="am-contact-link"
          >
            → darabahmed37@gmail.com
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
