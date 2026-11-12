import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ScrambleButton from './ScrambleButton';

export default function ContactFooter() {
  const { profileData, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(profileData.email);
    } else {
      // fallback kalau clipboard API belum didukung browser
      const temp = document.createElement('textarea');
      temp.value = profileData.email;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const contactDescText = t.contactDesc.replace('{name}', profileData.fullName);

  return (
    <footer className="editorial-footer" id="contact">
      <div className="footer-main-row">
        <div className="footer-copy-col">
          <span className="section-index">{t.contactBadge}</span>
          <h3>{t.contactTitle}</h3>
          <p>{contactDescText}</p>
        </div>

        <div className="footer-actions-col">
          <ScrambleButton
            className="btn-primary"
            type="button"
            onClick={handleCopyEmail}
            text={
              copied
                ? t.contactCopied.replace('{email}', profileData.email)
                : t.contactCopyBtn.replace('{email}', profileData.email)
            }
          />
          <div className="footer-links-row">
            <ScrambleButton
              href={profileData.githubPrimary}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              text="GitHub (@Hafazacode) ↗"
            />
          </div>
        </div>
      </div>
      <div className="footer-colophon">
      </div>
    </footer>
  );
}
