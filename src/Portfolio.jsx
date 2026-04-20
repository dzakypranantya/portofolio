import { useState, useEffect, useRef } from "react";

// ─── SMOOTH SCROLL ───────────────────────────────────────────────────────────
function smoothScrollTo(targetId) {
  const target = document.querySelector(targetId);
  if (!target) return;
  const targetY = target.getBoundingClientRect().top + window.scrollY - 80;
  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = 900;
  let startTime = null;
  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#interests", label: "Interests" },
  { href: "#education", label: "Study" },
  { href: "#karya", label: "Portofolio" },
];

const STATS = [
  { num: "3+", label: "Years of experience in web development." },
  { num: "SI", label: "Informatics System - Telkom University" },
  { num: "∞", label: "Ideas yet to be realized." },
  { num: "✦", label: "Available for any jobs." },
];

const SKILLS = [
  { name: "Java",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "HTML5",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "JavaScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "C#",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
  { name: "Node.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "React.js",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "MySQL",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "MariaDB",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg" },
  { name: "Express.js",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "AJAX",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" },
  { name: "Tailwind CSS",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Bootstrap",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
  { name: "WordPress",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" },
  { name: "Power BI",    icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
  { name: "Git",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "Figma",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Adobe PS",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
  { name: "MS Office",   icon: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg" },
  { name: "Vite.js",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  { name: "Lua",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg" },
  { name: "Python",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
];

const EDUCATION = [
  {
    badge: "SMK · 2022–2025",
    name: "SMK Telkom Malang",
    desc: "Completed three years of vocational education in Software Engineering as an active student.",
    gradeText: "Completed",
    pct: "100%",
  },
  {
    badge: "S1 · 2025–NOW",
    name: "Telkom University",
    desc: "Currently pursuing a Bachelor’s degree in Information Systems, with a focus on system design, software development, and IT-driven digital transformation.",
    gradeText: "On Progress",
    pct: "25%",
  },
];

const PORTFOLIO_DATA = [
  {
    category: "Backend",
    title: "Core logic & DB Architecture",
    desc: "Building scalable APIs, microservices, and database schemas with efficiency in mind.",
    items: [
      { name: "Untitled", link: "https://github.com/dzakypranantya" },
      { name: "Untitled", link: "https://github.com/dzakypranantya" },
      { name: "Untitled", link: "https://github.com/dzakypranantya" },
    ]
  },
  {
    category: "Frontend",
    title: "Modern Web Interfaces",
    desc: "Crafting responsive, high-performance web applications using React and modern CSS.",
    items: [
      { name: "Untitled", link: "https://github.com/dzakypranantya" },
      { name: "Untitled", link: "https://github.com/dzakypranantya" },
      { name: "Untitled", link: "https://github.com/dzakypranantya" },
    ]
  },
  {
    category: "UI/UX",
    title: "User-Centered Experiences",
    desc: "Designing intuitive interfaces that balance aesthetics with functionality to solve user problems.",
    items: [
      { name: "Untitled", link: "https://www.behance.net/dzakypranantya" },
      { name: "Untitled", link: "https://www.behance.net/dzakypranantya" },
      { name: "Untitled", link: "https://www.behance.net/dzakypranantya" },
    ]
  },
  {
    category: "Design",
    title: "Visual Storytelling & Identity",
    desc: "Developing strong visual identities through graphic design, typography, and color theory.",
    items: [
      { name: "Untitled", link: "https://www.behance.net/dzakypranantya" },
      { name: "Untitled", link: "https://www.behance.net/dzakypranantya" },
      { name: "Untitled", link: "https://www.behance.net/dzakypranantya" },
    ]
  },
];

// ─── HOOKS ───────────────────────────────────────────────────────────────────
function useInView(threshold = 0.3) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ─── THEME TOGGLE BUTTON ─────────────────────────────────────────────────────
function ThemeToggle({ dark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle theme"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 200,
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        border: dark ? "1px solid rgba(176,83,112,0.35)" : "1px solid rgba(122,40,66,0.18)",
        background: dark ? "#1e1419" : "#faf8f4",
        boxShadow: dark
          ? "0 4px 24px rgba(176,83,112,0.25)"
          : "0 4px 16px rgba(122,40,66,0.12)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
        transition: "all 0.35s cubic-bezier(.4,0,.2,1)",
      }}
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}

// ─── GLOBAL STYLES ───────────────────────────────────────────────────────────
function GlobalStyles({ dark }) {
  const t = dark
    ? {
        bg: "#120d0f",
        bgAlt: "#1a1114",
        bgCard: "#1e1419",
        ink: "#f0e8ea",
        muted: "#a0868e",
        wine: "#c9607e",
        wineLight: "#e08aa0",
        winePale: "#2a1820",
        border: "rgba(201,96,126,0.18)",
        borderHover: "rgba(224,138,160,0.5)",
        footerBg: "#0a0608",
        statCard: "#1e1419",
      }
    : {
        bg: "#faf8f4",
        bgAlt: "#faf8f4",
        bgCard: "#ffffff",
        ink: "#1a1614",
        muted: "#7c716e",
        wine: "#7a2842",
        wineLight: "#b05370",
        winePale: "#f5eaed",
        border: "rgba(122,40,66,0.12)",
        borderHover: "rgba(176,83,112,0.6)",
        footerBg: "#1a1614",
        statCard: "#ffffff",
      };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght=0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');

        :root {
          --bg: ${t.bg};
          --bg-alt: ${t.bgAlt};
          --bg-card: ${t.bgCard};
          --ink: ${t.ink};
          --muted: ${t.muted};
          --wine: ${t.wine};
          --wine-light: ${t.wineLight};
          --wine-pale: ${t.winePale};
          --border: ${t.border};
          --border-hover: ${t.borderHover};
          --footer-bg: ${t.footerBg};
          --stat-card: ${t.statCard};
        }

        @keyframes spin { to { transform: translate(-50%, -50%) rotate(360deg); } }
        @keyframes nameShift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scrollAnim { 0%, 100% { opacity: 0.3; transform: scaleY(0.6); transform-origin: top; } 50% { opacity: 1; transform: scaleY(1); } }

        * { transition: background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease; }

        .noise-overlay::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: ${dark ? 0.8 : 0.5};
        }

        ::selection { background: var(--wine); color: white; }

        @media (max-width: 768px) {
          .hamburger-btn { display: flex !important; }
          .nav-links-container {
            flex-direction: column;
            width: 100%;
            max-height: 0;
            opacity: 0;
            pointer-events: none;
            padding: 0;
          }
          .nav-links-container.show {
            max-height: 400px;
            opacity: 1;
            pointer-events: auto;
            padding: 10px 0 15px;
          }
          .nav-links-container a {
            width: 100%;
            text-align: center;
            padding: 12px !important;
          }
        }
      `}</style>
    </>
  );
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────
function Navbar({ active, dark, isOpen, setIsOpen }) {
  return (
    <nav style={{
      position: "fixed",
      top: "24px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 1000,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: dark ? "rgba(18,13,15,0.88)" : "rgba(250,248,244,0.88)",
      backdropFilter: "blur(12px)",
      border: `1px solid var(--border)`,
      borderRadius: isOpen ? "24px" : "999px",
      padding: "6px",
      boxShadow: dark ? "0 4px 24px rgba(0,0,0,0.4)" : "0 2px 12px rgba(122,40,66,0.08)",
      width: isOpen ? "85%" : "auto",
      maxWidth: "500px",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
    }}>
      <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", position: "relative" }}>
        <button 
          className="hamburger-btn"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "12px",
            zIndex: 1001
          }}
        >
          <div style={{ width: "20px", height: "2px", background: "var(--wine)", transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none", transition: "0.3s" }} />
          <div style={{ width: "20px", height: "2px", background: "var(--wine)", opacity: isOpen ? 0 : 1, transition: "0.3s" }} />
          <div style={{ width: "20px", height: "2px", background: "var(--wine)", transform: isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none", transition: "0.3s" }} />
        </button>

        <div className={`nav-links-container ${isOpen ? 'show' : ''}`} style={{ display: "flex", gap: "4px", overflow: "hidden", transition: "all 0.3s ease" }}>
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => { 
                e.preventDefault(); 
                smoothScrollTo(href); 
                setIsOpen(false);
              }}
              style={{
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "8px 16px",
                borderRadius: "999px",
                textDecoration: "none",
                transition: "all 0.2s ease",
                background: active === href ? "var(--wine)" : "transparent",
                color: active === href ? "white" : "var(--muted)",
                whiteSpace: "nowrap"
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero({ dark }) {
  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 40px", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: "520px", height: "520px", borderRadius: "50%", border: `1px solid var(--border)`, top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "spin 40s linear infinite" }} />
      <div style={{ position: "absolute", width: "340px", height: "340px", borderRadius: "50%", border: `1px solid var(--border)`, top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "spin 25s linear infinite reverse" }} />
      <div style={{ position: "absolute", top: "50%", left: "-10%", width: "120%", height: "1px", background: `var(--border)`, transform: "rotate(-6deg)" }} />

      <p style={{ position: "relative", zIndex: 10, fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--wine-light)", marginBottom: "20px", animation: "fadeUp 0.8s ease both" }}>
        ✦ Full Stack Developer
      </p>
      <h1 style={{
        position: "relative", zIndex: 10,
        fontFamily: "'Caveat', cursive",
        fontSize: "clamp(90px,18vw,180px)",
        fontWeight: "700",
        lineHeight: 0.85,
        color: dark ? "#e08aa0" : "#7a2842",
        margin: 0,
      }}>
        Dzaky
      </h1>
      <p style={{ position: "relative", zIndex: 10, marginTop: "16px", color: "var(--muted)", fontStyle: "italic", fontWeight: 300, fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(20px,3vw,30px)", animation: "fadeUp 0.8s 0.2s ease both" }}>
        Frontend in the streets, backend in the sheets.
      </p>
      <p style={{ position: "relative", zIndex: 10, marginTop: "28px", maxWidth: "480px", fontSize: "14px", lineHeight: 1.8, color: "var(--muted)", animation: "fadeUp 0.8s 0.3s ease both" }}>
        The kind of guy who architects the database, writes the API, and designs the UI — all before lunch.
        From raw logic to polished interfaces, the full stack is just home turf. <br />
        <strong style={{ color: "var(--wine)", fontWeight: 500 }}>No brain required.</strong>
      </p>

      <div style={{ position: "absolute", bottom: "36px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", animation: "fadeUp 0.8s 0.5s ease both" }}>
        <div style={{ width: "1px", height: "40px", background: `linear-gradient(to bottom, var(--wine), transparent)`, animation: "scrollAnim 1.8s ease-in-out infinite" }} />
        <span style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)" }}>scroll</span>
      </div>
    </section>
  );
}

function About({ dark }) {
  const [ref, inView] = useInView();
  return (
    <section id="about" ref={ref} style={{
      padding: "80px 8vw",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "80px",
      alignItems: "center",
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(40px)",
      transition: "opacity 1s ease, transform 1s ease",
    }}>
      <div>
        <p style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--wine-light)", marginBottom: "12px" }}>About Me</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(42px,6vw,72px)", fontWeight: 300, lineHeight: 1, marginBottom: "40px", color: "var(--ink)" }}>
          Built different.<br />Ships at dawn,<br />debugs at dusk.
        </h2>
        <p style={{ fontSize: "15px", lineHeight: 1.9, color: "var(--muted)", marginBottom: "16px" }}>
          A <strong style={{ color: "var(--ink)", fontWeight: 500 }}>full stack developer</strong> who lives at the intersection of code and craft — turning complex problems into elegant systems that actually work.
        </p>
        <p style={{ fontSize: "15px", lineHeight: 1.9, color: "var(--muted)" }}>
          From backend architecture to pixel-perfect frontends, every layer of the stack is fair game — and every project ships.
        </p>
        <blockquote style={{ marginTop: "32px", paddingLeft: "24px", borderLeft: `2px solid var(--wine)`, fontStyle: "italic", fontSize: "28px", lineHeight: 1.5, color: "var(--wine)", fontFamily: "'Cormorant Garamond', serif" }}>
          "Why pick a lane when you can own the whole road — <em style={{ fontStyle: "normal" }}>without a BRAIN</em>"
        </blockquote>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        {STATS.map((s) => (
          <div key={s.label} style={{
            background: "var(--stat-card)",
            border: `1px solid var(--border)`,
            borderRadius: "16px",
            padding: "24px",
            transition: "all 0.3s ease",
            cursor: "default",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = dark ? "0 8px 32px rgba(0,0,0,0.4)" : "0 8px 24px rgba(122,40,66,0.12)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
          >
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "58px", lineHeight: 1, color: "var(--wine)", fontWeight: 300 }}>{s.num}</div>
            <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "4px", letterSpacing: "0.04em" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Interests({ dark }) {
  return (
    <section id="interests" style={{ background: "var(--bg-card)", padding: "80px 8vw" }}>
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <p style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--wine-light)", marginBottom: "12px" }}>What I Work With</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(42px,6vw,72px)", fontWeight: 300, lineHeight: 1, color: "var(--ink)" }}>My Skills</h2>
        <p style={{ marginTop: "12px", fontSize: "14px", color: "var(--muted)", fontStyle: "italic" }}>The tools and technologies I use to build and solve.</p>
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
        gap: "20px",
        maxWidth: "900px",
        margin: "0 auto",
      }}>
        {SKILLS.map((skill) => (
          <div key={skill.name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              background: dark ? "rgba(255,255,255,0.04)" : "#ffffff",
              border: `1px solid var(--border)`,
              borderRadius: "20px",
              padding: "20px 12px",
              transition: "all 0.3s ease",
              cursor: "default",
              boxShadow: dark ? "none" : "0 2px 8px rgba(122,40,66,0.06)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = dark ? "0 12px 32px rgba(0,0,0,0.4)" : "0 12px 28px rgba(122,40,66,0.14)";
              e.currentTarget.style.borderColor = "var(--border-hover)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = dark ? "none" : "0 2px 8px rgba(122,40,66,0.06)";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          >
            <img src={skill.icon} alt={skill.name} style={{ width: "48px", height: "48px", objectFit: "contain" }} />
            <span style={{ fontSize: "11px", color: "var(--muted)", textAlign: "center", fontWeight: 500, letterSpacing: "0.02em" }}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education({ dark }) {
  const [ref, inView] = useInView();
  return (
    <section id="education" ref={ref} style={{ padding: "80px 8vw", background: "var(--bg)" }}>
      <p style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--wine-light)", marginBottom: "12px" }}>Background</p>
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(42px,6vw,72px)", fontWeight: 300, lineHeight: 1, marginBottom: "40px", color: "var(--ink)" }}>Study</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
        {EDUCATION.map((edu) => (
          <div key={edu.name}
            style={{
              position: "relative",
              background: "var(--bg-card)",
              border: `1px solid var(--border)`,
              borderRadius: "24px",
              padding: "36px",
              overflow: "hidden",
              transition: "all 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = dark ? "0 16px 48px rgba(0,0,0,0.5)" : "0 16px 48px rgba(122,40,66,0.1)";
              e.currentTarget.querySelector(".top-bar").style.transform = "scaleX(1)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "";
              e.currentTarget.querySelector(".top-bar").style.transform = "scaleX(0)";
            }}
          >
            <div className="top-bar" style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(to right, var(--wine), var(--wine-light))", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.5s ease" }} />
            <span style={{ display: "inline-block", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--wine)", background: "var(--wine-pale)", borderRadius: "999px", padding: "4px 12px", marginBottom: "16px" }}>{edu.badge}</span>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px", lineHeight: 1.2, color: "var(--ink)", marginBottom: "12px" }}>{edu.name}</h3>
            <p style={{ fontSize: "13.5px", lineHeight: 1.8, color: "var(--muted)" }}>{edu.desc}</p>
            <div style={{ marginTop: "20px", display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ flex: 1, height: "4px", background: "var(--wine-pale)", borderRadius: "999px", overflow: "hidden" }}>
                <div style={{ height: "100%", background: "linear-gradient(to right, var(--wine), var(--wine-light))", width: inView ? edu.pct : "0%", transition: "width 1.2s ease 0.3s", borderRadius: "999px" }} />
              </div>
              <span style={{ fontSize: "11px", fontWeight: 500, color: "var(--wine)", whiteSpace: "nowrap" }}>{edu.gradeText}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PortfolioSection({ dark }) {
  const [openCardIndex, setOpenCardIndex] = useState(null);
  const toggle = (index) => {
    setOpenCardIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section id="karya" style={{ background: "var(--bg-card)", padding: "80px 8vw" }}>
      <p style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--wine-light)", marginBottom: "12px" }}>Portfolio</p>
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(42px,6vw,72px)", fontWeight: 300, lineHeight: 1, marginBottom: "48px", color: "var(--ink)" }}>Portofolio</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "12px",
      }}>
        {PORTFOLIO_DATA.map((item, index) => {
          const isOpen = openCardIndex === index;
          return (
            <div key={item.category} style={{
              border: `1px solid ${isOpen ? "var(--wine-light)" : "var(--border)"}`,
              borderRadius: "14px",
              overflow: "hidden",
              background: dark ? "#1a1114" : "#faf8f4",
              transition: "border-color 0.3s ease",
            }}>
              <button
                onClick={() => toggle(index)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 20px",
                  background: "transparent",
                  border: "none",
                  borderBottom: isOpen ? `1px solid var(--border)` : "1px solid transparent",
                  cursor: "pointer",
                }}
              >
                <div style={{ textAlign: "left" }}>
                    <p style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--wine-light)", margin: "0 0 4px" }}>
                        {item.category}
                    </p>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", color: "var(--ink)", fontWeight: 400 }}>
                      {item.title}
                    </span>
                </div>
                <span style={{ color: isOpen ? "var(--wine-light)" : "var(--muted)", fontSize: "9px", transition: "transform 0.3s ease", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▼</span>
              </button>
              <div style={{ maxHeight: isOpen ? "300px" : "0px", overflow: "hidden", transition: "max-height 0.4s ease" }}>
                <div style={{ padding: "16px 20px 20px" }}>
                  <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "16px", lineHeight: 1.6 }}>{item.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                    {item.items.map((subItem, i) => (
                      <li key={i}>
                        <a 
                          href={subItem.link} 
                          rel="noopener noreferrer" 
                          style={{ fontSize: "12px", color: "var(--wine-light)", textDecoration: "none", fontWeight: 500, display: "block" }}
                        >
                          🔗 {subItem.name} →
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Footer({ dark }) {
  return (
    <footer style={{ background: "var(--footer-bg)", color: "white", padding: "56px 8vw" }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "40px", paddingBottom: "40px", borderBottom: "1px solid rgba(255,255,255,0.08)", marginBottom: "32px" }}>
        <div>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: "62px", fontWeight: "bold", lineHeight: 1, color: "white" }}>
            Dzaky Pranantya<span style={{ color: "var(--wine-light)" }}>.</span>
          </div>
          <p style={{ color: "rgba(255,255,255,0.4)", fontStyle: "italic", marginTop: "4px", fontFamily: "'Cormorant Garamond', serif", fontSize: "16px" }}>
            Full Stack Developer · East Java, Indonesia
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", textAlign: "right" }}>
          <a href="#hero" onClick={(e) => { e.preventDefault(); smoothScrollTo("#hero"); }} style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Back to top ↑</a>
          <a href="mailto:dzakypranantyaa@gmail.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Email</a>
          <a href="https://www.instagram.com/dzakypranantya" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Instagram</a>
          <a href="https://wa.me/6289630803000" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>WhatsApp</a>
          <a href="https://www.linkedin.com/in/dzaky-pranantya-7096b22b4/" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>LinkedIn</a>
          <a href="https://github.com/dzakypranantya" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>GitHub</a>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>
        <span>Copyright © 2024 Dzaky Pranantya®</span>
        <span>Made with craft ✦</span>
      </div>
    </footer>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function Portfolio() {
  const [activeNav, setActiveNav] = useState("#hero");
  const [dark, setDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveNav(`#${e.target.id}`);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="noise-overlay" style={{
      background: "var(--bg)",
      color: "var(--ink)",
      fontFamily: "'DM Sans', sans-serif",
      overflowX: "hidden",
    }}>
      <GlobalStyles dark={dark} />
      <Navbar active={activeNav} dark={dark} isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <ThemeToggle dark={dark} onToggle={() => setDark(d => !d)} />
      <Hero dark={dark} />
      <About dark={dark} />
      <Interests dark={dark} />
      <Education dark={dark} />
      <PortfolioSection dark={dark} />
      <Footer dark={dark} />
    </div>
  );
}