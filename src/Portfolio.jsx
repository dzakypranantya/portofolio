import { useEffect, useState } from 'react';
import { ThemeToggle, GlobalStyles } from './components/Theme';
import Navbar from './components/Navbar';
import { Hero, About, Interests } from './components/IntroSections';
import { Education, PortfolioSection, Footer } from './components/PortfolioSections';

export default function Portfolio() {
  const [activeNav, setActiveNav] = useState('#hero');
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveNav('#' + entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="noise-overlay" style={{
      background: 'var(--bg)',
      color: 'var(--ink)',
      fontFamily: "'DM Sans', sans-serif",
      overflowX: 'hidden',
    }}>
      <GlobalStyles dark={dark} />
      <Navbar active={activeNav} dark={dark} />
      <ThemeToggle dark={dark} onToggle={() => setDark((current) => !current)} />
      <Hero dark={dark} />
      <About />
      <Interests dark={dark} />
      <Education />
      <PortfolioSection />
      <Footer />
    </div>
  );
}
