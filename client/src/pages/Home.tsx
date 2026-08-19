import { useEffect, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  BrainCircuit,
  ChevronRight,
  CircleHelp,
  Code2,
  Command,
  Crosshair,
  Database,
  FileText,
  Gauge,
  Layers3,
  LockKeyhole,
  Menu,
  Network,
  PanelLeftClose,
  PanelLeftOpen,
  Play,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Terminal,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";
import { toast } from "sonner";

// RHZ LAB Home: Graphite Control Room — asymmetric command-center layout, tactile panels,
// Signal Amber interaction states, Space Grotesk + IBM Plex Mono typography.

const navItems = [
  { label: "Dashboard", icon: Gauge, active: true },
  { label: "Learn", icon: BookOpen },
  { label: "Challenges", icon: Crosshair, count: "12" },
  { label: "Labs", icon: Database },
  { label: "Machines", icon: Network },
  { label: "Academy", icon: BrainCircuit },
  { label: "Paths", icon: Layers3 },
  { label: "Leaderboard", icon: Trophy },
];

const systems = [
  { label: "Terminal", icon: Terminal },
  { label: "Notes", icon: FileText },
  { label: "Bookmarks", icon: LockKeyhole },
];

function Metric({ label, value, sub, tone = "amber" }: { label: string; value: string; sub: string; tone?: "amber" | "cyan" | "green" }) {
  return (
    <div className="metric-panel">
      <div className="metric-top"><span className={`status-dot ${tone}`} /> <span>{label}</span><ArrowUpRight size={13} /></div>
      <div className="metric-value">{value}</div>
      <div className="metric-sub mono">{sub}</div>
    </div>
  );
}

function AppIcon({ icon: Icon, active = false }: { icon: typeof Gauge; active?: boolean }) {
  return <Icon size={17} strokeWidth={active ? 2.3 : 1.8} />;
}

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
      if (event.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const action = (message: string) => toast(message, { description: "This module is ready for your content." });

  return (
    <div className="app-frame">
      <div className={`mobile-scrim ${mobileOpen ? "open" : ""}`} onClick={() => setMobileOpen(false)} />
      <aside className={`console-sidebar ${collapsed ? "collapsed" : ""} ${mobileOpen ? "mobile-open" : ""}`}>
        <div className="brand-lockup">
          <div className="brand-mark"><img src="/manus-storage/rhz-lab-logo_9afda854.png" alt="RHZ LAB symbol" /></div>
          <div className="brand-copy"><strong>RHZ<span>LAB</span></strong><small>LEARNING // CTF</small></div>
          <button className="icon-button sidebar-close" onClick={() => setMobileOpen(false)} aria-label="Close navigation"><X size={18} /></button>
        </div>
        <div className="rail-rule" />
        <div className="nav-heading mono">WORKSPACE <span>01</span></div>
        <nav className="nav-list">
          {navItems.map(({ label, icon, active, count }) => <button key={label} className={`nav-item ${active ? "active" : ""}`} onClick={() => action(`${label} selected`)}><AppIcon icon={icon} active={active} /><span>{label}</span>{count && <em>{count}</em>}</button>)}
        </nav>
        <div className="nav-heading mono second">TOOLS <span>02</span></div>
        <nav className="nav-list">
          {systems.map(({ label, icon }) => <button key={label} className="nav-item" onClick={() => action(`${label} opened`)}><AppIcon icon={icon} /><span>{label}</span></button>)}
        </nav>
        <div className="sidebar-footer">
          <div className="system-readout"><span className="pulse-dot" /><div><strong>SYSTEM ONLINE</strong><small className="mono">ALL SERVICES NOMINAL</small></div></div>
          <button className="collapse-button" onClick={() => setCollapsed(!collapsed)}>{collapsed ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}<span>{collapsed ? "Expand rail" : "Collapse rail"}</span></button>
        </div>
      </aside>

      <div className="main-column">
        <header className="utility-header">
          <button className="mobile-menu icon-button" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Menu size={20} /></button>
          <div className="breadcrumb mono"><span>RHZ /</span> COMMAND CENTER <b>///</b> <strong>OVERVIEW</strong></div>
          <button className="search-trigger" onClick={() => setSearchOpen(true)}><Search size={17} /><span>Search the lab...</span><kbd>⌘ K</kbd></button>
          <div className="header-actions"><div className="header-status"><span className="pulse-dot" /> <span className="mono">NODE 07 // ONLINE</span></div><button className="icon-button" onClick={() => action("Settings opened")} aria-label="Settings"><Settings2 size={18} /></button><div className="avatar">N<span>+</span></div></div>
        </header>

        <main className="workspace">
          <section className="intro-row">
            <div><div className="eyebrow mono"><span className="status-dot amber" /> OPERATOR CONSOLE / 08:42:16 UTC</div><h1>Good morning, <i>Nova.</i></h1><p>Pick up where you left off or choose a new operation. Your lab is standing by.</p></div>
            <button className="secondary-button" onClick={() => action("Command palette opened")}><Command size={16} /> <span>COMMAND PALETTE</span></button>
          </section>

          <section className="hero-panel">
            <div className="hero-copy"><div className="panel-kicker mono">RESUME LEARNING <span>/// 02 OF 08</span></div><h2>Web Exploitation<br /><em>Fundamentals</em></h2><p>Trace the request. Read the response. Find the boundary between what the system shows and what it hides.</p><div className="hero-actions"><button className="primary-button" onClick={() => action("Launching Web Exploitation Fundamentals")}><Play size={15} fill="currentColor" /> CONTINUE OPERATION <ChevronRight size={16} /></button><button className="text-button" onClick={() => action("Path overview opened")}>VIEW PATH <ArrowUpRight size={15} /></button></div></div>
            <div className="hero-art"><img src="/manus-storage/rhz-lab-hero_3fa98063.png" alt="Dark cybersecurity workstation with instrument panels" /><div className="hero-art-overlay" /><div className="hero-coordinates mono">SIG // 7F3A:21C0<br /><span>LATENCY 12ms</span></div></div>
            <div className="hero-progress"><div className="progress-label mono"><span>PATH PROGRESS</span><b>26%</b></div><div className="progress-track"><span style={{ width: "26%" }} /></div><div className="progress-meta mono"><span>02 / 08 MODULES</span><span>+240 XP AVAILABLE</span></div></div>
          </section>

          <section className="metrics-grid"><Metric label="TOTAL XP" value="1,840" sub="LEVEL 04  //  +180 THIS WEEK" /><Metric label="CHALLENGES SOLVED" value="12" sub="3 ACTIVE  //  0 HINTS USED" tone="cyan" /><Metric label="CURRENT STREAK" value="07 days" sub="BEST 14 DAYS  //  ON TRACK" tone="green" /><Metric label="COMPLETION RATE" value="34.8%" sub="+8.2% SINCE LAST MONTH" /></section>

          <section className="lower-grid">
            <div className="section-block progress-block"><div className="section-heading"><div><div className="eyebrow mono">TELEMETRY / PERSONAL</div><h3>Progress signal</h3></div><button className="icon-button" onClick={() => action("Detailed progress opened")}><BarChart3 size={18} /></button></div><div className="chart-panel"><div className="chart-labels mono"><span>XP GAIN / LAST 7 DAYS</span><b>+420 XP</b></div><div className="chart"><div className="chart-grid" /><svg viewBox="0 0 620 150" preserveAspectRatio="none" aria-label="XP gain trend chart"><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#f0a545" stopOpacity=".26" /><stop offset="1" stopColor="#f0a545" stopOpacity="0" /></linearGradient></defs><path d="M0,128 C28,123 42,115 66,118 S108,89 132,101 S168,112 198,90 S235,100 264,77 S300,90 332,68 S369,79 398,53 S432,74 463,48 S500,61 526,35 S565,44 620,12 L620,150 L0,150 Z" fill="url(#chartFill)" /><path d="M0,128 C28,123 42,115 66,118 S108,89 132,101 S168,112 198,90 S235,100 264,77 S300,90 332,68 S369,79 398,53 S432,74 463,48 S500,61 526,35 S565,44 620,12" fill="none" stroke="#f0a545" strokeWidth="3" vectorEffect="non-scaling-stroke" /></svg><div className="chart-days mono"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div></div></div><div className="category-row"><span>WEB</span><div><i style={{ width: "72%" }} /></div><b>72%</b><span>NETWORK</span><div><i style={{ width: "48%" }} /></div><b>48%</b></div><div className="category-row"><span>LINUX</span><div><i style={{ width: "61%" }} /></div><b>61%</b><span>DEFENSE</span><div><i style={{ width: "24%" }} /></div><b>24%</b></div></div>

            <div className="section-block next-block"><div className="section-heading"><div><div className="eyebrow mono">RECOMMENDED / QUEUE</div><h3>Next operations</h3></div><button className="text-button" onClick={() => action("All recommendations opened")}>VIEW ALL <ArrowUpRight size={15} /></button></div><div className="operation-list"><button className="operation-card" onClick={() => action("SQL Injection Basics selected")}><div className="operation-icon amber-icon"><Code2 size={18} /></div><div className="operation-info"><strong>SQL Injection Basics</strong><span>CHALLENGE <i>•</i> WEB / BEGINNER</span></div><div className="operation-meta"><b>+80 XP</b><ChevronRight size={17} /></div></button><button className="operation-card" onClick={() => action("Packet Trail room selected")}><div className="operation-icon cyan-icon"><Network size={18} /></div><div className="operation-info"><strong>Packet Trail</strong><span>ROOM <i>•</i> NETWORKING / INTERMEDIATE</span></div><div className="operation-meta"><b>+120 XP</b><ChevronRight size={17} /></div></button><button className="operation-card" onClick={() => action("Linux file permissions selected")}><div className="operation-icon green-icon"><Terminal size={18} /></div><div className="operation-info"><strong>File Permissions</strong><span>LAB <i>•</i> LINUX / BEGINNER</span></div><div className="operation-meta"><b>+60 XP</b><ChevronRight size={17} /></div></button></div></div>
          </section>

          <section className="infrastructure-section"><div className="section-heading wide"><div><div className="eyebrow mono"><span className="status-dot cyan" /> CREATOR INFRASTRUCTURE</div><h3>Build the lab you want to learn in.</h3><p>RHZ LAB is the system beneath the challenge. Define your content, connect the prerequisites, and let the platform handle the signal.</p></div><button className="secondary-button" onClick={() => action("Creator panel opening soon")}><Users size={16} /> CREATOR PANEL <ArrowUpRight size={15} /></button></div><div className="capability-grid"><div className="capability-card"><div className="capability-index mono">01</div><Sparkles size={18} /><strong>Compose</strong><span>Challenges, rooms, labs, and learning paths.</span></div><div className="capability-card"><div className="capability-index mono">02</div><Zap size={18} /><strong>Connect</strong><span>Prerequisites, skills, hints, flags, and files.</span></div><div className="capability-card"><div className="capability-index mono">03</div><ShieldCheck size={18} /><strong>Measure</strong><span>Progress, points, difficulty, and completion.</span></div><div className="capability-card"><div className="capability-index mono">04</div><Activity size={18} /><strong>Operate</strong><span>Publish from a creator panel, not source code.</span></div></div></section>

          <section className="lab-strip"><div className="lab-image"><img src="/manus-storage/rhz-lab-network-visual_320e761b.png" alt="Technical network topology visual" /></div><div className="lab-strip-copy"><div className="eyebrow mono">THE LAB IS YOURS TO SHAPE</div><h3>Turn curiosity<br /><em>into capability.</em></h3><p>One calm, precise workspace for the habits that compound: understand the system, test the edge, document the result.</p><button className="primary-button" onClick={() => action("Exploring learning paths")}>EXPLORE LEARNING PATHS <ArrowUpRight size={15} /></button></div></section>
        </main>
        <footer className="site-footer"><span className="mono">RHZ LAB / BUILD 0.4.12</span><span className="footer-center"><span className="pulse-dot" /> ALL SYSTEMS NOMINAL</span><span className="mono">© 2026 RHZ LAB</span></footer>
      </div>

      {searchOpen && <div className="search-modal" onMouseDown={(event) => event.currentTarget === event.target && setSearchOpen(false)}><div className="search-dialog"><div className="search-dialog-top"><Search size={19} /><input autoFocus placeholder="Search challenges, rooms, skills..." /><kbd>ESC</kbd></div><div className="search-results"><div className="search-group-label mono">SUGGESTED OPERATIONS</div><button onClick={() => { setSearchOpen(false); action("Web Exploitation opened"); }}><Crosshair size={16} /><span>Web Exploitation Fundamentals</span><em>PATH</em><ChevronRight size={15} /></button><button onClick={() => { setSearchOpen(false); action("Terminal opened"); }}><Terminal size={16} /><span>Open Terminal</span><em>TOOL</em><ChevronRight size={15} /></button><button onClick={() => { setSearchOpen(false); action("Skill tree opened"); }}><BrainCircuit size={16} /><span>View Skill Tree</span><em>ACADEMY</em><ChevronRight size={15} /></button></div><div className="search-hint mono"><span><kbd>↑↓</kbd> NAVIGATE</span><span><kbd>↵</kbd> SELECT</span><span><kbd>ESC</kbd> CLOSE</span></div></div></div>}
    </div>
  );
}
