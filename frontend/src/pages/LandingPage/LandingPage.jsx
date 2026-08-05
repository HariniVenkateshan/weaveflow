import { useState } from "react";
import "./LandingPage.css";

const CREDENTIALS = [
  {
    role: "Admin",
    badge: "badge-gold",
    username: "demo_admin",
    password: "admin@123",
    note: "Full access — add weavers, looms, advances, payments.",
  },
  {
    role: "Staff",
    badge: "badge-sage",
    username: "demo_staff",
    password: "staff@123",
    note: "Day-to-day access — update sarees, view history and search.",
  },
];

const WHY_POINTS = [
  {
    title: "Registers get lost",
    copy: "Paper ledgers tear, go missing, or get misread — and there's no backup.",
  },
  {
    title: "Advances slip through",
    copy: "Without a running record, it's hard to know who's been paid and who hasn't.",
  },
  {
    title: "History is unsearchable",
    copy: "Finding one weaver's record from six months ago means flipping through pages.",
  },
];

const TECH_STACK = [
  "Spring Boot",
  "REST API",
  "React",
  "MySQL",
  "JWT",
  "Vercel",
  "Render",
  "Railway",
];

const WORKFLOW = [
  { label: "Open", badge: "badge-neutral" },
  { label: "In Progress", badge: "badge-gold" },
  { label: "Waiting for Payment", badge: "badge-maroon" },
  { label: "Completed", badge: "badge-sage" },
];

const FEATURES = [
  {
    title: "Weavers",
    copy: "Keep a record for every weaver on the floor — contact details, role and status, in one place.",
  },
  {
    title: "Looms & Sarees",
    copy: "Assign looms, log sarees by type — silk, cotton, soft silk — and track each loom's status to completion.",
  },
  {
    title: "Advances",
    copy: "Record advances as they're given, and see at a glance which ones are still open.",
  },
  {
    title: "Salary Payments",
    copy: "Pay by cash or UPI, and track every payment from pending to paid.",
  },
  {
    title: "History",
    copy: "Pull up any weaver's full production and payment history in a click.",
  },
  {
    title: "Search",
    copy: "Find a weaver by name in an instant, no scrolling through spreadsheets.",
  },
];

function WeaveMark() {
  return (
    <svg
      className="weave-mark"
      viewBox="0 0 320 320"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Interlaced warp and weft threads"
    >
      <rect x="0" y="0" width="320" height="320" rx="20" fill="var(--indigo-950)" />
      {[40, 90, 140, 190, 240, 290].map((x, i) => (
        <line
          key={`v-${x}`}
          x1={x}
          y1="20"
          x2={x}
          y2="300"
          stroke={i % 2 === 0 ? "var(--gold-500)" : "var(--ivory-100)"}
          strokeWidth="6"
          strokeOpacity="0.85"
        />
      ))}
      {[60, 110, 160, 210, 260].map((y, i) => (
        <line
          key={`h-${y}`}
          x1="20"
          y1={y}
          x2="300"
          y2={y}
          stroke={i % 2 === 0 ? "var(--maroon-700)" : "var(--sage-700)"}
          strokeWidth="6"
          strokeOpacity="0.9"
        />
      ))}
    </svg>
  );
}

function CredentialCard({ cred }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = `Username: ${cred.username}\nPassword: ${cred.password}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — the fields are still visible to copy by hand.
    }
  };

  return (
    <div className="card lp-cred-card">
      <div className="lp-cred-head">
        <span className={`badge ${cred.badge}`}>{cred.role}</span>
      </div>
      <dl className="lp-cred-fields">
        <div>
          <dt>Username</dt>
          <dd>{cred.username}</dd>
        </div>
        <div>
          <dt>Password</dt>
          <dd>{cred.password}</dd>
        </div>
      </dl>
      <p className="lp-cred-note">{cred.note}</p>
      <div className="lp-cred-actions">
        <a
          className="lp-btn lp-btn-primary lp-btn-small"
          href={`/login?u=${encodeURIComponent(cred.username)}&p=${encodeURIComponent(cred.password)}`}
        >
          Sign in as {cred.role}
        </a>
        <button type="button" className="lp-btn lp-btn-secondary lp-btn-small" onClick={handleCopy}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="lp">
      <header className="lp-nav">
        <div className="lp-brand">
          <span className="lp-brand-mark">WF</span>
          <span className="lp-brand-name">WeaveFlow</span>
        </div>
        <a href="/login" className="lp-nav-link">
          Log in
        </a>
      </header>

      <section className="lp-hero">
        <div className="lp-hero-copy">
          <p className="lp-eyebrow">Weavers Management System</p>
          <h1 className="lp-title">
            Every thread of your
            <br />
            handloom business,
            <br />
            tracked in one place.
          </h1>
          <p className="lp-description">
            Weavers, looms, sarees, advances and salary payments — replacing
            the register with a system built for the floor and the ledger
            alike.
          </p>
          <div className="lp-actions">
            <a href="/login" className="lp-btn lp-btn-primary">
              Live Demo
            </a>
            <a
              href="https://github.com/HariniVenkateshan/weaveflow"
              target="_blank"
              rel="noreferrer"
              className="lp-btn lp-btn-secondary"
            >
              View on GitHub
            </a>
          </div>
        </div>
        <div className="lp-hero-visual">
          <WeaveMark />
        </div>
      </section>

      <section className="lp-why">
        <h2 className="lp-section-title">Why WeaveFlow</h2>
        <div className="weave-divider" />
        <p className="lp-why-intro">
          Most handloom units still run on paper — a register for weavers, a
          notebook for advances, memory for everything else. WeaveFlow was
          built to replace all three with one system.
        </p>
        <div className="lp-why-grid">
          {WHY_POINTS.map((point) => (
            <div className="lp-why-item" key={point.title}>
              <h3 className="lp-why-title">{point.title}</h3>
              <p className="lp-why-copy">{point.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lp-workflow">
        <h2 className="lp-section-title">From loom to payment, at a glance</h2>
        <div className="weave-divider" />
        <div className="lp-workflow-strip">
          {WORKFLOW.map((step, i) => (
            <div className="lp-workflow-step" key={step.label}>
              <span className={`badge ${step.badge}`}>{step.label}</span>
              {i < WORKFLOW.length - 1 && (
                <span className="lp-workflow-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="lp-credentials">
        <h2 className="lp-section-title">Try it yourself</h2>
        <div className="weave-divider" />
        <p className="lp-credentials-intro">
          This is a live demo, not a mockup. Sign in with either account below
          to explore it — no request needed.
        </p>
        <div className="lp-cred-grid">
          {CREDENTIALS.map((cred) => (
            <CredentialCard cred={cred} key={cred.role} />
          ))}
        </div>
      </section>

      <section className="lp-features">
        <h2 className="lp-section-title">Everything the register used to hold</h2>
        <div className="weave-divider" />
        <div className="lp-feature-grid">
          {FEATURES.map((f) => (
            <div className="card lp-feature-card" key={f.title}>
              <h3 className="lp-feature-title">{f.title}</h3>
              <p className="lp-feature-copy">{f.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lp-tech">
        <h2 className="lp-section-title">Built with</h2>
        <div className="weave-divider" />
        <div className="lp-tech-row">
          {TECH_STACK.map((tech) => (
            <span className="lp-tech-chip" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </section>

      <footer className="lp-footer">
        <div className="lp-footer-links">
          <a href="/login">Log in</a>
          <a
            href="https://github.com/HariniVenkateshan/weaveflow"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        <span className="lp-footer-copyright">
          © 2026 WeaveFlow. Created by Harini JV.
        </span>
      </footer>
    </div>
  );
}
