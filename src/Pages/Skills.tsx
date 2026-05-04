import { useState, useRef } from "react";
import Heading from "../Components/Heading.tsx";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiServer,
  FiZap,
  FiDatabase,
  FiCloud,
  FiLayout,
  FiCpu,
  FiDollarSign,
  FiTool,
  FiChevronDown,
} from "react-icons/fi";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

type SkillItem = {
  title: string;
  description: string;
};

type Category = {
  id: string;
  icon: React.ReactNode;
  label: string;
  tagline: string;
  accent: string;
  items: SkillItem[];
  diagram?: React.ReactNode;
};

const categories: Category[] = [
  /* ── 1. Backend Engineering ── */
  {
    id: "backend",
    icon: <FiServer />,
    label: "Backend Engineering",
    tagline: "Java · Python · Django · Spring Boot · REST",
    accent: "#c778dd",
    items: [
      {
        title: "Enterprise Java — Full Ownership",
        description:
          "Designed and delivered production backend modules at i2cinc across the full stack: domain modeling, business logic, API layer, and database schema — working in a real fintech codebase with years of accumulated complexity.",
      },
      {
        title: "API Architecture",
        description:
          "Engineered RESTful APIs across Spring Boot, Django REST Framework, and Flask — applying proper resource modeling, versioning strategies, pagination, and error contracts consumed by frontend and third-party clients.",
      },
      {
        title: "Platform Migration — Java 8 → Java 21",
        description:
          "Led the technical migration of a production Java application to Java 21, navigating API deprecations, module system changes, and dependency upgrades while maintaining system stability throughout.",
      },
      {
        title: "Legacy System Navigation",
        description:
          "Extended and refactored large Struts/Servlet codebases — decoding business logic embedded in legacy layers and making safe, incremental changes without destabilising existing behaviour.",
      },
      {
        title: "Framework Decision-Making",
        description:
          "Chose between Spring Boot, Struts, Servlets, Django, and Flask based on project constraints — not habit. Each abstraction layer has a cost and a benefit; I know when to use which.",
      },
    ],
  },

  /* ── 2. Concurrency & Performance ── */
  {
    id: "concurrency",
    icon: <FiZap />,
    label: "Concurrency & Performance",
    tagline: "ExecutorService · Batch Processing · Throughput Tuning",
    accent: "#f59e0b",
    items: [
      {
        title: "Thread Pool Management",
        description:
          "Designed multi-threaded services using Java's ExecutorService — selecting pool types (fixed, cached, scheduled) based on workload profile, with explicit queue sizing to prevent resource exhaustion under sustained load.",
      },
      {
        title: "Parallel Batch Processing",
        description:
          "Architected data pipelines that partition large batches across worker threads, achieving near-linear throughput gains. Applied this pattern to bulk processing jobs where sequential execution was a bottleneck.",
      },
      {
        title: "Workload Classification",
        description:
          "Profiled tasks to distinguish CPU-bound from I/O-bound work — applying dedicated thread pools for compute-heavy jobs and non-blocking patterns for I/O-heavy operations to maximise utilisation.",
      },
      {
        title: "Throughput-Oriented Service Design",
        description:
          "Designed services for sustained concurrency: connection pool sizing, request queuing, backpressure mechanisms, and Redis-based caching to reduce repeated computation under high-request volumes.",
      },
      {
        title: "Bottleneck Identification",
        description:
          "Located performance bottlenecks through log analysis, profiling, and systematic isolation — distinguishing slow queries from slow code, and lock contention from I/O latency, before applying targeted fixes.",
      },
    ],
    diagram: <ConcurrencyDiagram />,
  },

  /* ── 3. Database Engineering ── */
  {
    id: "database",
    icon: <FiDatabase />,
    label: "Database Engineering",
    tagline: "PostgreSQL · MySQL · Query Optimization · Indexing",
    accent: "#34d399",
    items: [
      {
        title: "Query Optimization",
        description:
          "Diagnosed and rewrote slow queries on live production systems — eliminating N+1 patterns, replacing correlated subqueries with JOINs, and converting full-table scans to index seeks. Measurable latency improvements on real data.",
      },
      {
        title: "Index Design",
        description:
          "Designed composite, partial, and covering indexes by analysing actual query access patterns — not by convention. Avoided over-indexing by measuring write overhead against read gains.",
      },
      {
        title: "EXPLAIN Plan Analysis",
        description:
          "Used EXPLAIN ANALYZE in PostgreSQL and MySQL to read execution plans: identifying sequential scans, hash joins vs nested loops, and planner misestimates — then restructured queries or schema to fix them.",
      },
      {
        title: "Scale-Ready Data Patterns",
        description:
          "Applied keyset pagination, bulk insert/delete batching, and table partitioning strategies to keep query times stable as datasets grow into millions of rows.",
      },
      {
        title: "ORM vs Raw SQL",
        description:
          "Used Django ORM and Hibernate for standard operations, switching to raw SQL for aggregations, bulk mutations, and reports where the ORM's generated queries created unnecessary overhead.",
      },
    ],
    diagram: <DatabaseDiagram />,
  },

  /* ── 4. Fintech Engineering ── */
  {
    id: "fintech",
    icon: <FiDollarSign />,
    label: "Fintech Engineering",
    tagline: "Transaction Systems · Consistency · Reliability · Audit",
    accent: "#a78bfa",
    items: [
      {
        title: "Transaction System Design",
        description:
          "Designed payment flows as atomic state machines — each transition either commits fully or rolls back cleanly. Financial data never lands in a partial state, even under infrastructure failures.",
      },
      {
        title: "Idempotency at the API Layer",
        description:
          "Engineered idempotent payment endpoints using client-supplied keys and server-side deduplication — ensuring that network retries and client-side timeouts never result in duplicate charges.",
      },
      {
        title: "Concurrency Safety in Financial Data",
        description:
          "Applied optimistic locking and serialisable transaction isolation where concurrent writes to financial records risked data races — preventing account balance inconsistencies under parallel load.",
      },
      {
        title: "Failure Classification & Recovery",
        description:
          "Categorised failure modes explicitly: transient errors trigger retry with exponential backoff; permanent errors are surfaced immediately and logged for audit. No silent data loss, no unbounded retries.",
      },
      {
        title: "Auditability & Compliance Awareness",
        description:
          "Structured payment modules with full audit trails — every state change is logged with actor, timestamp, and reason. Secure access controls and data integrity constraints are treated as baseline architecture, not afterthoughts.",
      },
    ],
  },

  /* ── 5. Cloud & DevOps ── */
  {
    id: "cloud",
    icon: <FiCloud />,
    label: "Cloud & DevOps",
    tagline: "AWS · Docker · CI/CD · Linux",
    accent: "#60a5fa",
    items: [
      {
        title: "AWS Production Infrastructure",
        description:
          "Deployed and managed production workloads on AWS across EC2, S3, Lambda, and Elastic Beanstalk — configuring environments, scaling policies, and service health monitoring.",
      },
      {
        title: "Containerisation",
        description:
          "Wrote production-grade Dockerfiles and docker-compose configurations to achieve environment parity from local development through to deployment — eliminating environment-specific bugs.",
      },
      {
        title: "CI/CD Automation",
        description:
          "Designed automated pipelines (GitHub Actions) covering build, test, and deploy stages — ensuring no untested code reaches production and enabling consistent, repeatable releases.",
      },
      {
        title: "Linux Operations",
        description:
          "Managed production services on Linux: configuring systemd units, reading application and system logs under pressure, diagnosing network issues, and maintaining Apache Tomcat deployments.",
      },
    ],
  },

  /* ── 6. Frontend Engineering ── */
  {
    id: "frontend",
    icon: <FiLayout />,
    label: "Frontend Engineering",
    tagline: "React · Vue.js · Next.js · TypeScript",
    accent: "#38bdf8",
    items: [
      {
        title: "React & Vue.js — Production UIs",
        description:
          "Delivered component-driven interfaces in both React and Vue.js — from internal enterprise dashboards to customer-facing applications. Applied hooks, context, and composition patterns for maintainable, testable UI code.",
      },
      {
        title: "TypeScript as Standard",
        description:
          "Write TypeScript by default across all frontend work — strict typing, discriminated unions, and generics. Types are a design tool for catching architectural mistakes early, not just a syntax preference.",
      },
      {
        title: "Rendering Performance",
        description:
          "Applied code splitting, lazy loading, memoisation, and virtualised rendering to maintain responsiveness on data-dense, high-interaction pages.",
      },
      {
        title: "Legacy Frontend Ownership",
        description:
          "Maintained and extended JSP-based server-rendered UIs at i2cinc — adding modern JS behaviour incrementally without breaking existing functionality or introducing regressions.",
      },
    ],
  },

  /* ── 7. Production Engineering ── */
  {
    id: "production",
    icon: <FiTool />,
    label: "Production Engineering",
    tagline: "Debugging · Root Cause Analysis · Reliability · Standards",
    accent: "#fb923c",
    items: [
      {
        title: "Production Incident Debugging",
        description:
          "Diagnosed live production failures under time pressure — reading logs, tracing distributed call paths, and narrowing root cause systematically rather than guessing and hoping.",
      },
      {
        title: "Root Cause Analysis",
        description:
          "Went past the symptom to the cause: race conditions, config drift, schema mismatches, memory leaks. Applied fixes with regression coverage so the same class of bug doesn't recur.",
      },
      {
        title: "Legacy System Refactoring",
        description:
          "Safely changed large, undocumented Struts/Servlet codebases by first understanding the embedded business logic, writing characterisation tests, then refactoring incrementally with confidence.",
      },
      {
        title: "Maintainability as a First-Class Concern",
        description:
          "Code I write is optimised for the next reader — function scope is narrow, naming is intentional, non-obvious decisions are documented inline. I treat readability as a performance metric.",
      },
      {
        title: "Engineering Standards & Review Culture",
        description:
          "Participate in code review as both author and reviewer — giving precise, actionable feedback focused on correctness, design, and long-term maintainability rather than style preferences.",
      },
    ],
  },

  /* ── 8. AI-Augmented Development ── */
  {
    id: "ai",
    icon: <FiCpu />,
    label: "AI-Augmented Development",
    tagline: "GitHub Copilot · Deliberate Usage · Code Validation",
    accent: "#c778dd",
    items: [
      {
        title: "AI as a Productivity Multiplier",
        description:
          "Use GitHub Copilot and LLM-assisted tools to accelerate boilerplate, test scaffolding, and pattern repetition — freeing cognitive bandwidth for architecture, edge cases, and system design.",
      },
      {
        title: "Validation Over Acceptance",
        description:
          "Treat AI-generated code as a first draft requiring review — checking for logical correctness, edge case coverage, security implications, and alignment with the system's existing conventions before any code ships.",
      },
      {
        title: "Context-Driven Prompting",
        description:
          "Structure prompts with the relevant domain context, constraints, and expected output format. Higher-quality prompts produce higher-quality suggestions — reducing review cycles.",
      },
      {
        title: "Tool Control, Not Dependency",
        description:
          "I can build any system entirely without AI assistance. AI tooling increases output rate; it does not replace engineering judgment on design, trade-offs, or correctness.",
      },
    ],
  },
];

/* ─────────────────────────────────────────────
   MINI DIAGRAMS
───────────────────────────────────────────── */

function ConcurrencyDiagram() {
  return (
    <div className="concurrency-diagram" aria-label="Thread pool diagram">
      <div className="cd-title">Thread Pool — Task Execution Flow</div>
      <div className="cd-body">
        <div className="cd-col">
          <div className="cd-box cd-submit">Task Queue</div>
          <div className="cd-arrow">↓</div>
          <div className="cd-tasks">
            {["Task A", "Task B", "Task C", "Task D"].map((t) => (
              <div key={t} className="cd-task">
                {t}
              </div>
            ))}
          </div>
        </div>
        <div className="cd-arrow-h">→</div>
        <div className="cd-col">
          <div className="cd-box cd-pool">ExecutorService</div>
          <div className="cd-arrow">↓</div>
          <div className="cd-threads">
            {["Thread-1", "Thread-2", "Thread-3"].map((t) => (
              <div key={t} className="cd-thread">
                <span className="cd-dot" />
                {t}
              </div>
            ))}
          </div>
        </div>
        <div className="cd-arrow-h">→</div>
        <div className="cd-col">
          <div className="cd-box cd-result">Results</div>
          <div className="cd-arrow">↓</div>
          <div className="cd-merged">Aggregated Output</div>
        </div>
      </div>
    </div>
  );
}

function DatabaseDiagram() {
  return (
    <div className="db-diagram" aria-label="Query optimization before/after">
      <div className="db-title">Query Optimization — Before vs After</div>
      <div className="db-split">
        <div className="db-card db-before">
          <div className="db-badge bad">Before</div>
          <pre className="db-code">{`SELECT * FROM orders
WHERE user_id = 42;
-- Full table scan
-- Cost: 8,400`}</pre>
          <div className="db-metric bad">⚠ Seq Scan · 420ms</div>
        </div>
        <div className="db-arrow-mid">→</div>
        <div className="db-card db-after">
          <div className="db-badge good">After</div>
          <pre className="db-code">{`CREATE INDEX idx_orders_user
ON orders(user_id);

SELECT id, total FROM orders
WHERE user_id = 42;
-- Index scan · Cost: 4`}</pre>
          <div className="db-metric good">✓ Index Scan · 3ms</div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PANEL
───────────────────────────────────────────── */

type PanelProps = {
  category: Category;
  isOpen: boolean;
  onToggle: () => void;
};

const Panel = ({ category, isOpen, onToggle }: PanelProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`expertise-panel ${isOpen ? "is-open" : ""}`}
      style={{ "--panel-accent": category.accent } as React.CSSProperties}
    >
      {/* Header */}
      <button
        className="expertise-header"
        onClick={onToggle}
        aria-expanded={isOpen}
        id={`panel-btn-${category.id}`}
        aria-controls={`panel-body-${category.id}`}
      >
        <span className="expertise-icon">{category.icon}</span>
        <div className="expertise-meta">
          <span className="expertise-label">{category.label}</span>
          <span className="expertise-tagline">{category.tagline}</span>
        </div>
        <motion.span
          className="expertise-chevron"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <FiChevronDown />
        </motion.span>
      </button>

      {/* Body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            id={`panel-body-${category.id}`}
            role="region"
            aria-labelledby={`panel-btn-${category.id}`}
            ref={contentRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="expertise-body">
              {/* Skill items */}
              <div className="expertise-items">
                {category.items.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    className="skill-item"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06, duration: 0.3 }}
                  >
                    <div className="skill-bullet" />
                    <div>
                      <p className="skill-title">{item.title}</p>
                      <p className="skill-desc">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Optional diagram */}
              {category.diagram && (
                <div className="expertise-diagram">{category.diagram}</div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

const Skills = () => {
  const [openId, setOpenId] = useState<string | null>("backend");

  const toggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id));

  return (
    <div>
      <Heading title="engineering expertise" />

      <p className="expertise-intro">
        A structured breakdown of engineering capabilities built through 3+
        years of professional work on production fintech systems, high-throughput
        backends, and distributed services — written for engineers and hiring
        managers who want to understand depth, not just stack coverage.
      </p>

      <div className="expertise-grid">
        {categories.map((cat) => (
          <Panel
            key={cat.id}
            category={cat}
            isOpen={openId === cat.id}
            onToggle={() => toggle(cat.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
