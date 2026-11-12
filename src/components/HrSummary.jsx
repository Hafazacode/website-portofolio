import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function HrSummary() {
  const { profileData, personalBioData, hrSummaryData, t } = useLanguage();

  return (
    <div className="editorial-summary-section">
      {/* foto profil & biodata */}
      <div className="summary-lead-col">
        <div className="popout-portrait-wrapper">
          <div className="portrait-offset-layer" aria-hidden="true" />

          <div className="portrait-backdrop-window">
            <div className="backdrop-window-panes" aria-hidden="true">
              <div className="window-arch-ornament" />
            </div>

            <div className="portrait-caption-bar">
              <span className="portrait-caption-rule" aria-hidden="true" />
              <span className="backdrop-window-label">“We Can If We Try”</span>
            </div>
          </div>

          <div className="portrait-popout-subject">
            <img
              src={profileData.photoUrl}
              alt={profileData.fullName}
              className="portrait-popout-img"
            />
          </div>
        </div>

        <div className="classic-biodata-window">
          <div className="classic-biodata-inner">
            <div className="classic-window-header">
              <span className="classic-ornament-line" aria-hidden="true" />
              <span className="classic-crest-title">{t.hrBioTitle}</span>
              <span className="classic-ornament-line" aria-hidden="true" />
            </div>

            <div className="classic-bio-plaque-grid">
              {personalBioData.map((bio, idx) => (
                <div className="classic-bio-item" key={idx}>
                  <div className="classic-bio-kicker">{bio.label}</div>
                  <div className="classic-bio-val">{bio.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ringkasan kualifikasi */}
      <div className="summary-list-col">
        <div className="summary-right-header">
          <span className="section-index">{t.hrBadge}</span>
          <h2 className="summary-right-title">{t.hrTitle}</h2>
        </div>

        {hrSummaryData.map((item, index) => (
          <div className="summary-row" key={index}>
            <span className="summary-row-num">0{index + 1}</span>
            <div className="summary-row-body">
              <div className="summary-row-kicker">{item.label}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
