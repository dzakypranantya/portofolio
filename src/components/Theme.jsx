export function ThemeToggle({ dark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={dark ? "Aktifkan tema terang" : "Aktifkan tema gelap"}
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

export function GlobalStyles({ dark }) {
  const t = dark
    ? {
        bg: "#120d0f",
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
        statShadow: "0 8px 32px rgba(0,0,0,0.4)",
        educationShadow: "0 16px 48px rgba(0,0,0,0.5)",
      }
    : {
        bg: "#faf8f4",
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
        statShadow: "0 8px 24px rgba(122,40,66,0.12)",
        educationShadow: "0 16px 48px rgba(122,40,66,0.1)",
      };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght=0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');

        :root {
          --bg: ${t.bg};
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
          --stat-shadow: ${t.statShadow};
          --education-shadow: ${t.educationShadow};
        }

        @keyframes spin { to { transform: translate(-50%, -50%) rotate(360deg); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        .stat-card:hover { transform: translateY(-4px); box-shadow: var(--stat-shadow); }
        .interest-card:hover { transform: translateY(-6px); border-color: var(--border-hover); }
        .interest-card:hover .card-bg { opacity: 1; }
        .education-card:hover { transform: translateY(-4px); box-shadow: var(--education-shadow); }
        .education-card:hover .top-bar { transform: scaleX(1); }
        .top-bar { transform: scaleX(0); transform-origin: left; transition: transform 0.5s ease; }
        .portfolio-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; }
        .portfolio-link:hover { opacity: 0.7; }
        .main-nav { max-width: calc(100vw - 24px); overflow-x: auto; }
        .main-nav a { white-space: nowrap; }
        .footer-link { color: rgba(255,255,255,0.5); transition: color 0.2s; }
        .footer-link:hover { color: var(--wine-light); }
        .footer-link-instagram:hover { color: #E1306C; }
        .footer-link-whatsapp:hover { color: #25D366; }
        .footer-link-linkedin:hover { color: #0A66C2; }

        @media (min-width: 1100px) {
          .portfolio-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 480px) {
          .main-nav { top: 12px !important; }
          .main-nav a { padding: 8px 10px !important; font-size: 9px !important; }
        }

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
