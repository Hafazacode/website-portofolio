import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function IdFlagSvg() {
  return (
    <span className="flag-seal" aria-hidden="true">
      <svg viewBox="0 0 20 14" width="14" height="10" className="flag-svg" preserveAspectRatio="none">
        <rect width="20" height="7" fill="#d92d20" />
        <rect y="7" width="20" height="7" fill="#ffffff" />
      </svg>
    </span>
  );
}

function EnFlagSvg() {
  return (
    <span className="flag-seal" aria-hidden="true">
      <svg viewBox="0 0 60 36" width="14" height="10" className="flag-svg" preserveAspectRatio="none">
        <rect width="60" height="36" fill="#012169" />
        <path d="M0 0 L60 36 M60 0 L0 36" stroke="#ffffff" strokeWidth="7" />
        <path d="M0 0 L60 36 M60 0 L0 36" stroke="#c8102e" strokeWidth="2.5" />
        <path d="M30 0 v36 M0 18 h60" stroke="#ffffff" strokeWidth="11" />
        <path d="M30 0 v36 M0 18 h60" stroke="#c8102e" strokeWidth="6.5" />
      </svg>
    </span>
  );
}

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className="classic-lang-bar"
      role="radiogroup"
      aria-label="Pilihan Bahasa / Language Selection"
    >
      <button
        type="button"
        role="radio"
        aria-checked={lang === 'id'}
        className={`classic-lang-tab ${lang === 'id' ? 'is-active' : ''}`}
        onClick={() => setLang('id')}
        title="Bahasa Indonesia"
      >
        <IdFlagSvg />
        <span className="tab-code">ID</span>
      </button>

      <span className="classic-lang-sep" aria-hidden="true" />

      <button
        type="button"
        role="radio"
        aria-checked={lang === 'en'}
        className={`classic-lang-tab ${lang === 'en' ? 'is-active' : ''}`}
        onClick={() => setLang('en')}
        title="English"
      >
        <EnFlagSvg />
        <span className="tab-code">EN</span>
      </button>
    </div>
  );
}
