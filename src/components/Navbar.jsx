import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import ScrambleButton from './ScrambleButton';

export default function Navbar() {
  const { profileData, t } = useLanguage();

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
          <a href="#sol">{t.navProfile}</a>
          <a href="#projects">{t.navProjects}</a>
          <a href="#skills">{t.navSkills}</a>
        </nav>

        <div className="nav-end">
          <LanguageSwitcher />
          <ScrambleButton
            href="#contact"
            className="nav-cta"
            text={t.navContact}
          />
        </div>
      </div>
    </header>
  );
}
