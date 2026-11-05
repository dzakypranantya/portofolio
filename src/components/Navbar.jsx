import { NAV_LINKS } from '../data/portfolioData';
import { smoothScrollTo } from '../utils/smoothScroll';

export default function Navbar({ active, dark }) {
  return (
    <nav className="main-nav" aria-label="Navigasi utama" style={{
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
          aria-current={active === href ? "location" : undefined}
          onClick={(event) => {
            event.preventDefault();
            smoothScrollTo(href);
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
          }}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
