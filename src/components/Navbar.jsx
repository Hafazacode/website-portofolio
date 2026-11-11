import React from 'react';
import { profileData } from '../data/portfolioData';
import ScrambleButton from './ScrambleButton';

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="nav-brand-wrap">
          <a href="#" className="nav-logo">
            <span className="nav-monogram" aria-hidden="true">
              HFZ
            </span>
            <span className="nav-name">{profileData.brandName}</span>
          </a>
          <span className="nav-divider" aria-hidden="true" />
          <div className="nav-status">
            <span className="status-dot" />
            <span>{profileData.statusBadge}</span>
          </div>
        </div>

        <nav className="nav-menu" aria-label="Navigasi Utama">
          <a href="#sol">Profil</a>
          <a href="#projects">Hasil Proyek</a>
          <a href="#skills">Kompetensi</a>
        </nav>

        <div className="nav-end">
          <ScrambleButton
            href="#contact"
            className="nav-cta"
            text="Hubungi →"
          />
        </div>
      </div>
    </header>
  );
}
