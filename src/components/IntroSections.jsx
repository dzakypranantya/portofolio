import foto from '../foto.png';
import { INTERESTS, STATS } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export function Hero({ dark }) {
  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 40px", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: "520px", height: "520px", borderRadius: "50%", border: `1px solid var(--border)`, top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "spin 40s linear infinite" }} />
      <div style={{ position: "absolute", width: "340px", height: "340px", borderRadius: "50%", border: `1px solid var(--border)`, top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "spin 25s linear infinite reverse" }} />
      <div style={{ position: "absolute", top: "50%", left: "-10%", width: "120%", height: "1px", background: `var(--border)`, transform: "rotate(-6deg)" }} />

      <div style={{ position: "relative", display: "grid", placeItems: "center", width: "min(100%, 780px)", minHeight: "clamp(260px, 48vh, 480px)" }}>
        <img
          src={foto}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            transform: "translate(30px, -50px)",
            inset: 0,
            margin: "auto",
            height: "100%",
            maxWidth: "100%",
            objectFit: "contain",
            opacity: dark ? 0.82 : 0.9,
            filter: dark ? "drop-shadow(0 18px 38px rgba(0,0,0,0.5))" : "drop-shadow(0 18px 38px rgba(28,16,20,0.24))",
          }}
        />
        <h1 style={{
          position: "relative", zIndex: 2,
          fontFamily: "'Caveat', cursive",
          fontSize: "clamp(90px,18vw,180px)",
          fontWeight: "700",
          lineHeight: 0.85,
          color: dark ? "#fff4f6" : "#fff",
          textShadow: dark ? "0 3px 30px rgba(18,13,15,0.9)" : "0 3px 30px rgba(26,22,20,0.72)",
          margin: 0,
        }}>
          DZAKY
        </h1>
      </div>
      <p style={{ position: "relative", zIndex: 10, marginTop: "16px", color: "var(--muted)", fontStyle: "italic", fontWeight: 300, fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(20px,3vw,30px)", animation: "fadeUp 0.8s 0.2s ease both" }}>
        Belajar, merancang, lalu membangun pengalaman digital.
      </p>
      <p style={{ position: "relative", zIndex: 10, marginTop: "28px", maxWidth: "480px", fontSize: "14px", lineHeight: 1.8, color: "var(--muted)", animation: "fadeUp 0.8s 0.3s ease both" }}>
        Saya Dzaky Pranantya, mahasiswa Sistem Informasi di Telkom University.
        Saya tertarik pada pengembangan web dan desain antarmuka, dan terus belajar lewat proses mencoba dan membuat.
      </p>

    </section>
  );
}

export function About() {
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
        <p style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--wine-light)", marginBottom: "12px" }}>Tentang Saya</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(42px,6vw,72px)", fontWeight: 300, lineHeight: 1, marginBottom: "40px", color: "var(--ink)" }}>
          Rasa ingin tahu,<br />ide yang dirancang,<br />solusi yang dibangun.
        </h2>
        <p style={{ fontSize: "15px", lineHeight: 1.9, color: "var(--muted)", marginBottom: "16px" }}>
          Saya lulusan Rekayasa Perangkat Lunak dari SMK Telkom Malang dan saat ini menempuh studi <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Sistem Informasi</strong> di Telkom University.
        </p>
        <p style={{ fontSize: "15px", lineHeight: 1.9, color: "var(--muted)" }}>
          Saya tertarik pada pengembangan web, UI/UX, dan desain visual. Saat ini saya terus memperdalam dasar-dasarnya melalui belajar dan eksplorasi.
        </p>
        <blockquote style={{ marginTop: "32px", paddingLeft: "24px", borderLeft: `2px solid var(--wine)`, fontStyle: "italic", fontSize: "28px", lineHeight: 1.5, color: "var(--wine)", fontFamily: "'Cormorant Garamond', serif" }}>
          &quot;Setiap hal yang baik dimulai dari <em style={{ fontStyle: "normal" }}>rasa ingin tahu.</em>&quot;
        </blockquote>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        {STATS.map((s) => (
          <div key={s.label} className="stat-card" style={{
            background: "var(--stat-card)",
            border: `1px solid var(--border)`,
            borderRadius: "16px",
            padding: "24px",
            transition: "all 0.3s ease",
            cursor: "default",
          }}
          >
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "52px", lineHeight: 1, color: "var(--wine)" }}>{s.num}</div>
            <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "4px", letterSpacing: "0.04em" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Interests({ dark }) {
  return (
    <section id="interests" style={{ background: "var(--bg-card)", padding: "80px 8vw" }}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <p style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--wine-light)", marginBottom: "12px" }}>Yang Saya Pelajari</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(42px,6vw,72px)", fontWeight: 300, lineHeight: 1, color: "var(--ink)" }}>Minat</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
        {INTERESTS.map((item) => (
          <div key={item.title} className="interest-card"
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
