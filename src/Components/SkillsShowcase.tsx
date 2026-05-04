import { Link } from "react-router";
import Heading from "./Heading";
import {
  FiServer, FiZap, FiDatabase, FiDollarSign,
  FiCloud, FiLayout, FiTool, FiCpu, FiArrowRight,
} from "react-icons/fi";

const cards = [
  {
    id: "backend",
    icon: <FiServer />,
    label: "Backend Engineering",
    accent: "#c778dd",
    bullets: [
      "Production Java 8 → 21 migration",
      "Spring Boot · Django · Flask REST APIs",
      "Legacy Struts/Servlet codebase ownership",
    ],
  },
  {
    id: "concurrency",
    icon: <FiZap />,
    label: "Concurrency & Performance",
    accent: "#f59e0b",
    bullets: [
      "ExecutorService thread pool design",
      "Parallel batch processing pipelines",
      "CPU-bound vs I/O-bound workload tuning",
    ],
  },
  {
    id: "database",
    icon: <FiDatabase />,
    label: "Database Engineering",
    accent: "#34d399",
    bullets: [
      "EXPLAIN plan analysis in PostgreSQL / MySQL",
      "Composite & covering index design",
      "Keyset pagination on million-row tables",
    ],
  },
  {
    id: "fintech",
    icon: <FiDollarSign />,
    label: "Fintech Engineering",
    accent: "#a78bfa",
    bullets: [
      "Atomic payment transaction state machines",
      "Idempotency keys at the API layer",
      "Optimistic locking for concurrent writes",
    ],
  },
  {
    id: "cloud",
    icon: <FiCloud />,
    label: "Cloud & DevOps",
    accent: "#60a5fa",
    bullets: [
      "AWS EC2 · S3 · Lambda · Beanstalk",
      "Docker · GitHub Actions CI/CD pipelines",
      "Linux production service management",
    ],
  },
  {
    id: "frontend",
    icon: <FiLayout />,
    label: "Frontend Engineering",
    accent: "#38bdf8",
    bullets: [
      "React & Vue.js enterprise dashboards",
      "TypeScript-first with strict generics",
      "Code-split, lazy-loaded rendering",
    ],
  },
  {
    id: "production",
    icon: <FiTool />,
    label: "Production Engineering",
    accent: "#fb923c",
    bullets: [
      "Live incident debugging under pressure",
      "Root cause analysis — not symptom fixes",
      "Legacy refactoring with regression coverage",
    ],
  },
  {
    id: "ai",
    icon: <FiCpu />,
    label: "AI-Augmented Dev",
    accent: "#c778dd",
    bullets: [
      "GitHub Copilot as force multiplier",
      "Critical review of all AI output",
      "Tool control — not dependency",
    ],
  },
];

const SkillsShowcase = () => {
  return (
    <div>
      <Heading title="core capabilities" />
      <p className="text-gray text-sm mb-6 max-w-2xl leading-relaxed">
        A snapshot of engineering depth across backend, fintech, and
        infrastructure — built through 3+ years of production work.
      </p>

      <div className="hsc-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className="hsc-card"
            style={{ "--hsc-accent": card.accent } as React.CSSProperties}
          >
            <div className="hsc-header">
              <span className="hsc-icon">{card.icon}</span>
              <span className="hsc-label">{card.label}</span>
            </div>
            <ul className="hsc-bullets">
              {card.bullets.map((b) => (
                <li key={b} className="hsc-bullet">
                  <span className="hsc-dot" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="hsc-cta">
        <Link to="/skills" className="hsc-link">
          Full Engineering Expertise <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default SkillsShowcase;
