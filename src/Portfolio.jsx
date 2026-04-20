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
  { num: "ㅋㅋ", label: "Nice Guy." },
];

const INTERESTS = [
  { icon: "🖌", title: "UI/UX Design", desc: "Designing user experiences that are intuitive, visually appealing, and meaningful." },
  { icon: "💻", title: "Full Stack Dev", desc: "Proficient across all layers — from databases and APIs to user interfaces that are easy on the eyes." },
  { icon: "🎨", title: "Graphic Design", desc: "Transforming abstract concepts into strong and memorable visuals." },
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
    gradeText: "Studied",
    pct: "25%",
  },
];

// Data disederhanakan: Masing-masing kategori hanya punya satu "kartu utama"
const PORTFOLIO_DATA = [
  {
    category: "Backend",
    title: "Core logic & DB Architecture", // Judul baru untuk kartu
    link: "https://github.com/dzakypranantya",
    linkLabel: "GitHub",
    desc: "Building scalable APIs, microservices, and database schemas with efficiency in mind.", // Deskripsi baru
  },
  {
    category: "Frontend",
    title: "Modern Web Interfaces",
    link: "https://github.com/dzakypranantya",
    linkLabel: "GitHub",
    desc: "Crafting responsive, high-performance web applications using React and modern CSS.",
  },
  {
    category: "UI/UX",
    title: "User-Centered Experiences",
    link: "https://www.behance.net/dzakypranantya",
    linkLabel: "Behance",
    desc: "Designing intuitive interfaces that balance aesthetics with functionality to solve user problems.",
  },
  {
    category: "Design",
    title: "Visual Storytelling & Identity",
    link: "https://www.behance.net/dzakypranantya",
    linkLabel: "Behance",
    desc: "Developing strong visual identities through graphic design, typography, and color theory.",
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
      `}</style>
    </>
  );
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────
function Navbar({ active, dark }) {
  return (
    <nav style={{
      position: "fixed",
      top: "24px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      gap: "4px",
      background: dark ? "rgba(18,13,15,0.88)" : "rgba(250,248,244,0.88)",
      backdropFilter: "blur(12px)",
      border: `1px solid var(--border)`,
      borderRadius: "999px",
      padding: "6px",
      boxShadow: dark
        ? "0 4px 24px rgba(0,0,0,0.4)"
        : "0 2px 12px rgba(122,40,66,0.08)",
    }}>
      {NAV_LINKS.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          onClick={(e) => { e.preventDefault(); smoothScrollTo(href); }}
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
          }}
        >
          {label}
        </a>
      ))}
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
        DDzaky
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
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "52px", lineHeight: 1, color: "var(--wine)" }}>{s.num}</div>
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
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <p style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--wine-light)", marginBottom: "12px" }}>What I Love</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(42px,6vw,72px)", fontWeight: 300, lineHeight: 1, color: "var(--ink)" }}>Interests</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
        {INTERESTS.map((item) => (
          <div key={item.title}
            style={{
              position: "relative",
              border: `1px solid var(--border)`,
              borderRadius: "20px",
              padding: "40px 32px",
              textAlign: "center",
              overflow: "hidden",
              transition: "all 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.borderColor = "var(--border-hover)";
              e.currentTarget.querySelector(".card-bg").style.opacity = "1";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.querySelector(".card-bg").style.opacity = "0";
            }}
          >
            <div className="card-bg" style={{ position: "absolute", inset: 0, background: dark ? "linear-gradient(135deg, rgba(201,96,126,0.12), transparent)" : "linear-gradient(135deg, #f5eaed, transparent)", opacity: 0, transition: "opacity 0.3s ease" }} />
            <span style={{ position: "relative", zIndex: 1, display: "block", fontSize: "48px", marginBottom: "16px" }}>{item.icon}</span>
            <div style={{ position: "relative", zIndex: 1, fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", color: "var(--ink)", marginBottom: "8px" }}>{item.title}</div>
            <p style={{ position: "relative", zIndex: 1, fontSize: "13px", color: "var(--muted)", lineHeight: 1.7 }}>{item.desc}</p>
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
  // State untuk menyimpan index kartu yang sedang terbuka
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const toggle = (index) => {
    setOpenCardIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section id="karya" style={{ background: "var(--bg-card)", padding: "80px 8vw" }}>
      <p style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--wine-light)", marginBottom: "12px" }}>Portfolio</p>
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(42px,6vw,72px)", fontWeight: 300, lineHeight: 1, marginBottom: "48px", color: "var(--ink)" }}>Portofolio</h2>

      {/* Grid disesuaikan menjadi 4 kolom yang sejajar pada layar besar */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", // Ini akan membuat kartu sejajar jika ruang cukup
        gap: "12px",
        // Menambahkan grid-template-columns spesifik untuk memastikan 4 kolom sejajar jika layar cukup lebar (di atas minmax)
        "@media (min-width: 1100px)": {
          gridTemplateColumns: "repeat(4, 1fr)",
        }
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
              {/* Header / Toggle (Accordion style) */}
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
                  transition: "border-color 0.3s ease",
                }}
              >
                <div style={{ textAlign: "left" }}>
                    <p style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--wine-light)", margin: "0 0 4px" }}>
                        {item.category}
                    </p>
                    <span style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "18px",
                      color: "var(--ink)",
                      fontWeight: 400,
                    }}>
                      {item.title}
                    </span>
                </div>
                <span style={{
                  color: isOpen ? "var(--wine-light)" : "var(--muted)",
                  fontSize: "9px",
                  transition: "transform 0.3s ease, color 0.3s ease",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  display: "inline-block",
                  flexShrink: 0,
                  marginLeft: "12px",
                }}>▼</span>
              </button>

              {/* Dropdown Content */}
              <div style={{
                maxHeight: isOpen ? "200px" : "0px", // Menyesuaikan tinggi agar muat deskripsi
                overflow: "hidden",
                transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}>
                <div style={{ padding: "16px 20px 20px" }}>
                  <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "16px", marginTop: 0, lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "12px",
                      color: "var(--wine-light)",
                      textDecoration: "none",
                      fontWeight: 500,
                      letterSpacing: "0.05em",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
                    onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                  >
                    🔗 View on {item.linkLabel} →
                  </a>
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
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "40px", paddingBottom: "40px", borderBottom: "1px solid rgba(255,255,255,0.08)", marginBottom: "32px" }}>
        <div>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: "62px", fontWeight: "bold", lineHeight: 1, color: "white" }}>
            Dzaky Pranantya<span style={{ color: "var(--wine-light)" }}>.</span>
          </div>
          <p style={{ color: "rgba(255,255,255,0.4)", fontStyle: "italic", marginTop: "4px", fontFamily: "'Cormorant Garamond', serif", fontSize: "16px" }}>
            Full Stack Developer · East Java, Indonesia
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", textAlign: "right" }}>
          <a href="#hero" onClick={(e) => { e.preventDefault(); smoothScrollTo("#hero"); }}
            style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--wine-light)"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
            Back to top ↑
          </a>
          <a href="https://github.com/dzakypranantya" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--wine-light)"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
            GitHub
          </a>
          <a href="https://www.instagram.com/dzakypranantya" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s", display: "flex", alignItems: "center", gap: "6px", justifyContent: "flex-end" }}
            onMouseEnter={e => e.currentTarget.style.color = "#E1306C"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            Instagram
          </a>
          <a href="https://wa.me/6289630803000" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s", display: "flex", alignItems: "center", gap: "6px", justifyContent: "flex-end" }}
            onMouseEnter={e => e.currentTarget.style.color = "#25D366"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
          <a href="https://www.linkedin.com/in/dzaky-pranantya-7096b22b4/" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s", display: "flex", alignItems: "center", gap: "6px", justifyContent: "flex-end" }}
            onMouseEnter={e => e.currentTarget.style.color = "#0A66C2"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
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
      <Navbar active={activeNav} dark={dark} />
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