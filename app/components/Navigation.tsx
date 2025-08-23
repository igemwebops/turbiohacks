'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-links">
          <Link href="/#about" className="nav-link">
            ABOUT
          </Link>
          <Link href="/#tracks" className="nav-link">
            TRACKS
          </Link>
          <Link href="/#schedule" className="nav-link">
            SCHEDULE
          </Link>
          <Link href="/#educational-material" className="nav-link">
            EDUCATIONAL MATERIAL
          </Link>
          <Link href="/#faq" className="nav-link">
            FAQ
          </Link>
          <Link href="/#sponsors" className="nav-link">
            SPONSORS
          </Link>
          <Link href="/awards" className="nav-link">
            AWARDS
          </Link>
        </div>
      </div>
    </nav>
  );
}

