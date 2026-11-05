import { EDUCATION, PORTFOLIO_DATA } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import { smoothScrollTo } from '../utils/smoothScroll';

export function Education() {
  const [ref] = useInView();
  return (
    <section id="education" ref={ref} style={{ padding: "80px 8vw", background: "var(--bg)" }}>
      <p style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--wine-light)", marginBottom: "12px" }}>Latar Belakang</p>
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(42px,6vw,72px)", fontWeight: 300, lineHeight: 1, marginBottom: "40px", color: "var(--ink)" }}>Pendidikan</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
        {EDUCATION.map((edu) => (
          <div key={edu.name} className="education-card"
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
          >
            <div className="top-bar" style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(to right, var(--wine), var(--wine-light))" }} />
            <span style={{ display: "inline-block", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--wine)", background: "var(--wine-pale)", borderRadius: "999px", padding: "4px 12px", marginBottom: "16px" }}>{edu.badge}</span>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px", lineHeight: 1.2, color: "var(--ink)", marginBottom: "12px" }}>{edu.name}</h3>
            <p style={{ fontSize: "13.5px", lineHeight: 1.8, color: "var(--muted)" }}>{edu.desc}</p>
            <span style={{ display: "inline-block", marginTop: "20px", fontSize: "11px", fontWeight: 500, color: "var(--wine)", background: "var(--wine-pale)", borderRadius: "999px", padding: "6px 12px" }}>{edu.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PortfolioSection() {
  return (
    <section id="karya" style={{ background: "var(--bg-card)", padding: "80px 8vw" }}>
      <p style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--wine-light)", marginBottom: "12px" }}>Jejak Karya</p>
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(42px,6vw,72px)", fontWeight: 300, lineHeight: 1, marginBottom: "16px", color: "var(--ink)" }}>Portofolio</h2>
      <p style={{ maxWidth: "620px", fontSize: "14px", lineHeight: 1.8, color: "var(--muted)", marginBottom: "40px" }}>
        Saya sedang mengembangkan dan mengumpulkan karya. Untuk melihat profil serta hal yang saya bagikan, kunjungi:
      </p>

      <div className="portfolio-grid">
        {PORTFOLIO_DATA.map((item) => (
          <a
            key={item.category}
            className="portfolio-link"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              border: "1px solid var(--border)",
              borderRadius: "14px",
              padding: "24px",
              background: "var(--bg)",
              textDecoration: "none",
              transition: "border-color 0.3s ease, transform 0.3s ease",
            }}
          >
            <p style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--wine-light)", margin: "0 0 8px" }}>{item.category}</p>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px", color: "var(--ink)", margin: "0 0 8px" }}>{item.title}</h3>
            <p style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--muted)", margin: "0 0 18px" }}>{item.desc}</p>
            <span style={{ fontSize: "12px", color: "var(--wine-light)", fontWeight: 500 }}>{item.linkLabel} ↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer style={{ background: "var(--footer-bg)", color: "white", padding: "56px 8vw" }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "40px", paddingBottom: "40px", borderBottom: "1px solid rgba(255,255,255,0.08)", marginBottom: "32px" }}>
        <div>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: "62px", fontWeight: "bold", lineHeight: 1, color: "white" }}>
            Dzaky Pranantya<span style={{ color: "var(--wine-light)" }}>.</span>
          </div>
          <p style={{ color: "rgba(255,255,255,0.4)", fontStyle: "italic", marginTop: "4px", fontFamily: "'Cormorant Garamond', serif", fontSize: "16px" }}>
            Mahasiswa Sistem Informasi · Indonesia
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", textAlign: "right" }}>
          <a className="footer-link" href="#hero" onClick={(event) => {
            event.preventDefault();
            smoothScrollTo("#hero");
          }}
            style={{ fontSize: "13px", textDecoration: "none" }}>
            Kembali ke atas ↑
          </a>
          <a className="footer-link" href="https://github.com/dzakypranantya" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "13px", textDecoration: "none" }}>
            GitHub
          </a>
          <a className="footer-link footer-link-instagram" href="https://www.instagram.com/dzakypranantya" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "13px", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px", justifyContent: "flex-end" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            Instagram
          </a>
          <a className="footer-link footer-link-whatsapp" href="https://wa.me/6289630803000" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "13px", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px", justifyContent: "flex-end" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
          <a className="footer-link footer-link-linkedin" href="https://www.linkedin.com/in/dzaky-pranantya-7096b22b4/" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "13px", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px", justifyContent: "flex-end" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>
        <span>© {new Date().getFullYear()} Dzaky Pranantya</span>
        <span>Belajar dan terus bertumbuh.</span>
      </div>
    </footer>
  );
}
