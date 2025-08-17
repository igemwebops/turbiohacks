'use client';

export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-links">
          <button onClick={() => scrollToSection('about')} className="nav-link">
            ABOUT
          </button>
          <button onClick={() => scrollToSection('tracks')} className="nav-link">
            TRACKS
          </button>
          <button onClick={() => scrollToSection('schedule')} className="nav-link">
            SCHEDULE
          </button>
          <button onClick={() => scrollToSection('educational-material')} className="nav-link">
            EDUCATIONAL MATERIAL
          </button>
          <button onClick={() => scrollToSection('faq')} className="nav-link">
            FAQ
          </button>
          <button onClick={() => scrollToSection('sponsors')} className="nav-link">
            SPONSORS
          </button>
        </div>
      </div>
    </nav>
  );
}
