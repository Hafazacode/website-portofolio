import React, { useState } from 'react';
import { profileData } from '../data/portfolioData';
import ScrambleButton from './ScrambleButton';

export default function ContactFooter() {
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

  return (
    <footer className="editorial-footer" id="contact">
      <div className="footer-main-row">
        <div className="footer-copy-col">
          <span className="section-index">DISKUSI &amp; KONTAK</span>
          <h3>Tertarik berdiskusi atau menjadwalkan sesi wawancara?</h3>
          <p>
            {profileData.fullName} · Cilacap, Jawa Tengah — Terbuka untuk peran penuh waktu
            (Full-Time) pada bidang IT Support, Network, maupun Software Engineering.
          </p>
        </div>

        <div className="footer-actions-col">
          <ScrambleButton
            className="btn-primary"
            type="button"
            onClick={handleCopyEmail}
            text={copied ? `Tersalin: ${profileData.email}` : `Salin Email (${profileData.email})`}
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
