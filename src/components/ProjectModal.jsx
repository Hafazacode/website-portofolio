import React from 'react';
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
  if (!project) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const game = project.categoryKey === 'game' ? project.gameDetails : null;
  const net = project.categoryKey === 'network' ? project.networkDetails : null;

  return (
    <div className="modal-backdrop open" onClick={handleBackdropClick}>
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div className="modal-top">
          <span className="section-index">{project.category}</span>
          <button className="modal-close" type="button" onClick={onClose}>
            Tutup ✕
          </button>
        </div>

        <h3 id="modalTitle">{project.title}</h3>

        {/* detail untuk proyek game */}
        {game && (
          <div className="md-body">
            <section className="md-section">
              <h4 className="md-label">Informasi Game</h4>
              <InfoList
                items={[
                  { label: 'Nama Game', value: game.gameTitle },
                  { label: 'Genre', value: game.genre },
                  { label: 'Platform', value: game.platformEngine },
                  { label: 'Visual', value: game.perspectiveVisual },
                  { label: 'AI NPC', value: game.coreAlgorithm },
                ]}
              />
            </section>

            <section className="md-section">
              <h4 className="md-label">Mekanisme Singkat</h4>
              <p className="md-lead">{game.mechanicsSummary}</p>
              <ul className="md-bullets">
                {game.mechanicsPoints.map((pt) => (
                  <li key={pt}>{pt}</li>
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
              <h4 className="md-label">Alur Topologi</h4>
              <ol className="md-flow">
                {net.backbone.map((node, i) => (
                  <li key={node}>
                    <span className="md-flow-no">{i + 1}</span>
                    {node}
                  </li>
                ))}
              </ol>
            </section>

            <section className="md-section">
              <h4 className="md-label">Pembagian VLAN</h4>
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
              <h4 className="md-label">Konfigurasi</h4>
              <InfoList items={net.specs} />
            </section>
          </div>
        )}
        <div className="modal-footer-actions">
          <ScrambleButton
            href={project.actionUrl}
            target={project.categoryKey === 'game' ? '_blank' : undefined}
            rel={project.categoryKey === 'game' ? 'noopener noreferrer' : undefined}
            download={
              project.categoryKey === 'network' || project.isDownload
                ? project.downloadFileName || '10-20-2026.pkt'
                : undefined
            }
            className="btn-primary"
            text={
              project.actionText ||
              (project.categoryKey === 'game'
                ? 'Lihat di itch.io ↗'
                : 'Download Topologi (.pkt) ↓')
            }
          />
        </div>
      </div>
    </div>
  );
}
