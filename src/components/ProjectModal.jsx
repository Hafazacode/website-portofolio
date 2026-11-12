import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ScrambleButton from './ScrambleButton';

function InfoList({ items }) {
  return (
    <dl className="md-info-list">
      {items.map((it) => (
        <div className="md-info-row" key={it.label}>
          <dt>{it.label}</dt>
          <dd>{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function ProjectModal({ project, onClose }) {
  const { t, projectsData } = useLanguage();

  if (!project) return null;

  const activeProj = projectsData.find((p) => p.id === project.id) || project;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const game = activeProj.categoryKey === 'game' ? activeProj.gameDetails : null;
  const net = activeProj.categoryKey === 'network' ? activeProj.networkDetails : null;

  return (
    <div className="modal-backdrop open" onClick={handleBackdropClick}>
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div className="modal-top">
          <span className="section-index">{activeProj.category}</span>
          <button className="modal-close" type="button" onClick={onClose}>
            {t.modalClose}
          </button>
        </div>

        <h3 id="modalTitle">{activeProj.title}</h3>

        {/* detail untuk proyek game */}
        {game && (
          <div className="md-body">
            <section className="md-section">
              <h4 className="md-label">{t.modalGameInfo}</h4>
              <InfoList
                items={[
                  { label: t.modalLabelGameTitle, value: game.gameTitle },
                  { label: t.modalLabelGenre, value: game.genre },
                  { label: t.modalLabelPlatform, value: game.platformEngine },
                  { label: t.modalLabelVisual, value: game.perspectiveVisual },
                  { label: t.modalLabelAi, value: game.coreAlgorithm },
                ]}
              />
            </section>

            <section className="md-section">
              <h4 className="md-label">{t.modalMechanics}</h4>
              <p className="md-lead">{game.mechanicsSummary}</p>
              <ul className="md-bullets">
                {game.mechanicsPoints.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </section>
          </div>
        )}

        {/* detail untuk proyek jaringan */}
        {net && (
          <div className="md-body">
            <p className="md-lead">{net.summary}</p>

            <section className="md-section">
              <h4 className="md-label">{t.modalTopology}</h4>
              <ol className="md-flow">
                {net.backbone.map((node, i) => (
                  <li key={i}>
                    <span className="md-flow-no">{i + 1}</span>
                    {node}
                  </li>
                ))}
              </ol>
            </section>

            <section className="md-section">
              <h4 className="md-label">{t.modalVlan}</h4>
              <div className="md-vlan-list">
                {net.vlanTable.map((v) => (
                  <div className="md-vlan-row" key={v.vlanId}>
                    <span className="md-vlan-id">VLAN {v.vlanId}</span>
                    <div className="md-vlan-main">
                      <strong>{v.division}</strong>
                      <span>{v.devices}</span>
                    </div>
                    <code className="md-vlan-subnet">{v.subnet}</code>
                  </div>
                ))}
              </div>
            </section>

            <section className="md-section">
              <h4 className="md-label">{t.modalSpecs}</h4>
              <InfoList items={net.specs} />
            </section>
          </div>
        )}
        <div className="modal-footer-actions">
          <ScrambleButton
            href={activeProj.actionUrl}
            target={activeProj.categoryKey === 'game' ? '_blank' : undefined}
            rel={activeProj.categoryKey === 'game' ? 'noopener noreferrer' : undefined}
            download={
              activeProj.categoryKey === 'network' || activeProj.isDownload
                ? activeProj.downloadFileName || '10-20-2026.pkt'
                : undefined
            }
            className="btn-primary"
            text={
              activeProj.actionText ||
              (activeProj.categoryKey === 'game'
                ? 'Lihat di itch.io ↗'
                : 'Download Topologi (.pkt) ↓')
            }
          />
        </div>
      </div>
    </div>
  );
}
