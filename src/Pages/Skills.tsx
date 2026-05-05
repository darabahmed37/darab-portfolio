import { useState, useRef, useEffect } from "react";
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
  FiGitBranch,
  FiPackage,
  FiActivity,
} from "react-icons/fi";

/* ─────────────────────────────────────────────
   STATS
───────────────────────────────────────────── */

const stats = [
  { value: "3+", label: "Years Production Experience" },
  { value: "2", label: "Companies · Fintech & Consulting" },
  { value: "Java", label: "Primary Backend Stack" },
  { value: "AWS", label: "Cloud Platform" },
];

/* ─────────────────────────────────────────────
   TECH STACK GRID
───────────────────────────────────────────── */

type TechGroup = {
  label: string;
  accent: string;
  tags: string[];
};

const techGroups: TechGroup[] = [
  {
    label: "Languages",
    accent: "#c778dd",
    tags: ["Java", "Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    label: "Backend",
    accent: "#f59e0b",
    tags: [
      "Spring Boot",
      "Django",
      "Django REST Framework",
      "Flask",
      "Struts",
      "Servlets",
      "JSP",
    ],
  },
  {
    label: "Frontend",
    accent: "#38bdf8",
    tags: ["React", "Vue.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    label: "Databases",
    accent: "#34d399",
    tags: ["PostgreSQL", "MySQL", "Redis", "Hibernate ORM", "Django ORM"],
  },
  {
    label: "Cloud & DevOps",
    accent: "#60a5fa",
    tags: [
      "AWS EC2",
      "AWS S3",
      "AWS Lambda",
      "Elastic Beanstalk",
      "Docker",
      "GitHub Actions",
      "Apache Tomcat",
      "Linux",
    ],
  },
  {
    label: "Patterns & Practices",
    accent: "#fb923c",
    tags: [
      "REST APIs",
      "Microservices",
      "Multi-threading",
      "CI/CD",
      "Agile / Scrum",
      "Code Review",
      "SOLID",
    ],
  },
];

/* ─────────────────────────────────────────────
   ENGINEERING PRINCIPLES
───────────────────────────────────────────── */

const principles = [
  {
    icon: <FiActivity />,
    title: "Correctness under load",
    body: "A system that works at 1 req/s but breaks at 1,000 isn't production-ready. I design for concurrency, failure, and edge cases from the start — not as an afterthought.",
    accent: "#f59e0b",
  },
  {
    icon: <FiGitBranch />,
    title: "Ownership, not handoff",
    body: "I take full ownership of features end-to-end: architecture, implementation, code review, and production debugging. I don't build to spec and move on.",
    accent: "#c778dd",
  },
  {
    icon: <FiPackage />,
    title: "Readable before clever",
    body: "Complex code that only the author understands is a liability. I write for the next engineer — narrow functions, intentional naming, and inline rationale for non-obvious decisions.",
    accent: "#34d399",
  },
];

/* ─────────────────────────────────────────────
   EXPERTISE CATEGORIES
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
    diagram: <BackendDiagram />,
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
        title: "Platform Migration — JDK Upgrade",
        description:
          "Led the technical migration of a production Java application to a modern JDK, navigating API deprecations, module system changes, and dependency upgrades while maintaining system stability throughout.",
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
    diagram: <FintechDiagram />,
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
          "Structured payment modules with full audit trails — every state change is logged with actor, timestamp, and reason. Access controls and data integrity constraints are treated as baseline architecture, not afterthoughts.",
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
    diagram: <CloudDiagram />,
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
    diagram: <ProductionDiagram />,
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

function BackendDiagram() {
  const [active, setActive] = useState(0);
  const steps = [
    { label: "Client", sub: "HTTP Request", color: "#c778dd" },
    { label: "Controller", sub: "Route / Validate", color: "#f59e0b" },
    { label: "Service", sub: "Business Logic", color: "#a78bfa" },
    { label: "Repository", sub: "DB / Cache", color: "#34d399" },
    { label: "Response", sub: "JSON / DTO", color: "#60a5fa" },
  ];
  useEffect(() => {
    const id = setInterval(() => setActive(p => (p + 1) % steps.length), 800);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="ad-wrap">
      <div className="ad-title">REST API — Request Lifecycle</div>
      <div className="ad-backend-flow">
        {steps.map((s, i) => (
          <div key={s.label} className="ad-backend-row">
            <div
              className={`ad-backend-step ${active === i ? "ad-step-active" : active > i ? "ad-step-done" : ""}`}
              style={{ "--sc": s.color } as React.CSSProperties}
            >
              <span className="ad-step-label">{s.label}</span>
              <span className="ad-step-sub">{s.sub}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={`ad-connector ${active > i ? "ad-conn-done" : active === i ? "ad-conn-active" : ""}`}
                style={{ "--sc": s.color } as React.CSSProperties}>
                <span className="ad-conn-dot" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function FintechDiagram() {
  const [state, setState] = useState(0); // 0=init 1=proc 2=commit 3=rollback
  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      const delay = (ms: number) => new Promise<void>(r => { if (!cancelled) setTimeout(r, ms); });
      while (!cancelled) {
        setState(0); await delay(700);
        setState(1); await delay(1300);
        const commit = Math.random() > 0.4;
        setState(commit ? 2 : 3); await delay(1800);
      }
    };
    run();
    return () => { cancelled = true; };
  }, []);
  const stateData = [
    { id: "INIT", label: "INITIATED", color: "#6b7280" },
    { id: "PROC", label: "PROCESSING", color: "#f59e0b" },
    { id: "OK",   label: "COMMITTED",  color: "#34d399" },
    { id: "FAIL", label: "ROLLED BACK",color: "#f87171" },
  ];
  return (
    <div className="ad-wrap">
      <div className="ad-title">Payment Transaction — State Machine</div>
      <div className="ad-ft-flow">
        {[0, 1].map(i => (
          <div key={i} className="ad-ft-row">
            <div className={`ad-ft-state ${state === i ? "ad-ft-active" : state > i ? "ad-ft-done" : ""}`}
              style={{ "--sc": stateData[i].color } as React.CSSProperties}>
              <span className="ad-ft-id">{stateData[i].id}</span>
              <span className="ad-ft-lbl">{stateData[i].label}</span>
              {state === 1 && i === 1 && <span className="ad-spin" />}
            </div>
            {i === 0 && <div className={`ad-ft-arrow ${state >= 1 ? "ad-ft-arr-on" : ""}`}>↓</div>}
          </div>
        ))}
        <div className="ad-ft-fork">
          <div className={`ad-ft-state ${state === 2 ? "ad-ft-active" : ""}`}
            style={{ "--sc": "#34d399" } as React.CSSProperties}>
            <span className="ad-ft-id">OK</span><span className="ad-ft-lbl">COMMITTED</span>
          </div>
          <div className="ad-ft-fork-sep">|</div>
          <div className={`ad-ft-state ${state === 3 ? "ad-ft-active" : ""}`}
            style={{ "--sc": "#f87171" } as React.CSSProperties}>
            <span className="ad-ft-id">FAIL</span><span className="ad-ft-lbl">ROLLED BACK</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CloudDiagram() {
  const stages = [
    { stage: "Push",   detail: "git push → trigger", color: "#abb2bf" },
    { stage: "Build",  detail: "Compile + lint",      color: "#f59e0b" },
    { stage: "Test",   detail: "Unit + integration",  color: "#c778dd" },
    { stage: "Image",  detail: "Docker build",        color: "#60a5fa" },
    { stage: "Deploy", detail: "AWS / Beanstalk",     color: "#34d399" },
  ];
  const [status, setStatus] = useState<number[]>([0, 0, 0, 0, 0]); // 0=pending 1=running 2=done
  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      const delay = (ms: number) => new Promise<void>(r => setTimeout(r, ms));
      while (!cancelled) {
        const s = [0, 0, 0, 0, 0];
        setStatus([...s]);
        await delay(600);
        for (let i = 0; i < stages.length; i++) {
          if (cancelled) return;
          s[i] = 1; setStatus([...s]);
          await delay(850);
          s[i] = 2; setStatus([...s]);
          await delay(250);
        }
        await delay(1800);
      }
    };
    run();
    return () => { cancelled = true; };
  }, []);
  return (
    <div className="ad-wrap">
      <div className="ad-title">CI/CD Pipeline — GitHub Actions</div>
      <div className="ad-pipeline">
        {stages.map((p, i) => (
          <div key={p.stage} className="ad-pipe-row">
            <div className={`ad-pipe-stage ${status[i] === 1 ? "ad-pipe-running" : status[i] === 2 ? "ad-pipe-done" : "ad-pipe-pending"}`}
              style={{ "--sc": p.color } as React.CSSProperties}>
              <span className="ad-pipe-icon">
                {status[i] === 2 ? "✓" : status[i] === 1 ? <span className="ad-spin" /> : "·"}
              </span>
              <span className="ad-pipe-name">{p.stage}</span>
              <span className="ad-pipe-detail">{p.detail}</span>
            </div>
            {i < stages.length - 1 && (
              <div className={`ad-pipe-conn ${status[i] === 2 ? "ad-pipe-conn-done" : ""}`}>→</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductionDiagram() {
  const [cur, setCur] = useState(-1);
  const steps = [
    { num: "1", label: "Alert fires",  detail: "Error rate spike detected", color: "#f87171" },
    { num: "2", label: "Read logs",    detail: "Trace IDs → stack traces",  color: "#f59e0b" },
    { num: "3", label: "Isolate",      detail: "Narrow to service / query", color: "#c778dd" },
    { num: "4", label: "Root cause",   detail: "Race condition identified", color: "#a78bfa" },
    { num: "5", label: "Fix + verify", detail: "Patch + regression test",   color: "#34d399" },
  ];
  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      const delay = (ms: number) => new Promise<void>(r => setTimeout(r, ms));
      while (!cancelled) {
        setCur(-1); await delay(500);
        for (let i = 0; i < steps.length; i++) {
          if (cancelled) return;
          setCur(i); await delay(850);
        }
        await delay(2000);
      }
    };
    run();
    return () => { cancelled = true; };
  }, []);
  return (
    <div className="ad-wrap">
      <div className="ad-title">Production Debugging — RCA Loop</div>
      <div className="ad-rca-steps">
        {steps.map((s, i) => (
          <div key={s.num}
            className={`ad-rca-step ${i <= cur ? "ad-rca-active" : ""} ${i === cur ? "ad-rca-current" : ""}`}
            style={{ "--sc": s.color } as React.CSSProperties}>
            <span className="ad-rca-num"
              style={{ background: i <= cur ? s.color : "transparent", borderColor: s.color, color: i <= cur ? "#0d1117" : s.color } as React.CSSProperties}>
              {i < cur ? "✓" : s.num}
            </span>
            <div><span className="ad-rca-label">{s.label}</span><span className="ad-rca-detail">{s.detail}</span></div>
          </div>
        ))}
        {cur === steps.length - 1 && <div className="ad-rca-resolved">🟢 Resolved · regression test added</div>}
      </div>
    </div>
  );
}

function ConcurrencyDiagram() {
  const [tick, setTick] = useState(0);
  const tasks = ["Task A", "Task B", "Task C", "Task D", "Task E"];
  const threads = ["Thread-1", "Thread-2", "Thread-3"];
  useEffect(() => {
    const id = setInterval(() => setTick(p => p + 1), 900);
    return () => clearInterval(id);
  }, []);
  const activeThread = tick % threads.length;
  const activeTask   = tick % tasks.length;
  return (
    <div className="ad-wrap">
      <div className="ad-title">Thread Pool — Task Execution Flow</div>
      <div className="ad-cc-body">
        <div className="ad-cc-col">
          <div className="ad-cc-header">Task Queue</div>
          {tasks.map((t, i) => (
            <div key={t} className={`ad-cc-task ${i === activeTask ? "ad-cc-dispatching" : ""}`}>{t}</div>
          ))}
        </div>
        <div className="ad-cc-sep">→</div>
        <div className="ad-cc-col">
          <div className="ad-cc-header">ExecutorService</div>
          {threads.map((t, i) => (
            <div key={t} className={`ad-cc-thread ${activeThread === i ? "ad-cc-busy" : ""}`}>
              <span className="ad-cc-dot" />
              <span>{t}</span>
              <span className="ad-cc-status">{activeThread === i ? "busy" : "idle"}</span>
            </div>
          ))}
        </div>
        <div className="ad-cc-sep">→</div>
        <div className="ad-cc-col">
          <div className="ad-cc-header">Results</div>
          <div className="ad-cc-result">Aggregated<br/>Output</div>
        </div>
      </div>
    </div>
  );
}

function DatabaseDiagram() {
  const [phase, setPhase] = useState(0); // 0=before 1=transition 2=after
  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      const delay = (ms: number) => new Promise<void>(r => setTimeout(r, ms));
      while (!cancelled) {
        setPhase(0); await delay(2000);
        setPhase(1); await delay(600);
        setPhase(2); await delay(2200);
      }
    };
    run();
    return () => { cancelled = true; };
  }, []);
  return (
    <div className="ad-wrap">
      <div className="ad-title">Query Optimization — Before vs After</div>
      <div className="ad-db-split">
        <div className={`ad-db-card ${phase === 0 ? "ad-db-highlight" : "ad-db-dim"}`}>
          <div className="ad-db-badge ad-db-bad">Before</div>
          <pre className="ad-db-code">{`SELECT * FROM orders\nWHERE user_id = 42;\n-- Full table scan\n-- Cost: 8,400`}</pre>
          <div className="ad-db-bar-wrap"><div className={`ad-db-bar ad-db-bar-bad ${phase === 0 ? "ad-db-bar-fill" : ""}`} /></div>
          <div className="ad-db-metric ad-db-bad">⚠ Seq Scan · 420ms</div>
        </div>
        <div className="ad-db-mid">→</div>
        <div className={`ad-db-card ${phase === 2 ? "ad-db-highlight" : "ad-db-dim"}`}>
          <div className="ad-db-badge ad-db-good">After</div>
          <pre className="ad-db-code">{`CREATE INDEX idx_orders_user\nON orders(user_id);\n\nSELECT id, total\nWHERE user_id = 42;\n-- Cost: 4`}</pre>
          <div className="ad-db-bar-wrap"><div className={`ad-db-bar ad-db-bar-good ${phase === 2 ? "ad-db-bar-fill" : ""}`} /></div>
          <div className="ad-db-metric ad-db-good">✓ Index Scan · 3ms</div>
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

      {/* ── Stats Bar ── */}
      <div className="sk-stats-bar">
        {stats.map((s) => (
          <div key={s.label} className="sk-stat">
            <span className="sk-stat-value">{s.value}</span>
            <span className="sk-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── Engineering Principles ── */}
      <div className="sk-section-title">Engineering Principles</div>
      <div className="sk-principles">
        {principles.map((p) => (
          <div
            key={p.title}
            className="sk-principle-card"
            style={{ "--card-accent": p.accent } as React.CSSProperties}
          >
            <span className="sk-principle-icon">{p.icon}</span>
            <h4 className="sk-principle-title">{p.title}</h4>
            <p className="sk-principle-body">{p.body}</p>
          </div>
        ))}
      </div>

      {/* ── Tech Stack Grid ── */}
      <div className="sk-section-title">Technology Stack</div>
      <div className="sk-tech-grid">
        {techGroups.map((group) => (
          <div
            key={group.label}
            className="sk-tech-group"
            style={{ "--group-accent": group.accent } as React.CSSProperties}
          >
            <div className="sk-tech-group-label">{group.label}</div>
            <div className="sk-tags">
              {group.tags.map((tag) => (
                <span key={tag} className="sk-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Deep-Dive Accordions ── */}
      <div className="sk-section-title">Capability Deep-Dive</div>
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
