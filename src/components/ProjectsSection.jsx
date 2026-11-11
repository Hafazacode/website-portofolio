import React, { useState } from 'react';
import { projectsData, projectCategories } from '../data/portfolioData';

// Ilustrasi kartu blueprint di belakang thumbnail proyek
function ProjectBlueprintCardSvg({ categoryKey, index }) {
  const isGame = categoryKey === 'game';
  const gridId = `bpGrid-${index}`;

  return (
    <svg
      className="case-blueprint-svg"
      viewBox="0 0 180 124"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id={gridId} width="12" height="12" patternUnits="userSpaceOnUse">
          <path
            d="M 12 0 L 0 0 0 12"
            fill="none"
            stroke="rgba(17, 19, 21, 0.08)"
            strokeWidth="0.7"
          />
        </pattern>
      </defs>

      <rect
        x="1"
        y="1"
        width="178"
        height="122"
        rx="5"
        fill="#F6F5F2"
        stroke="#111315"
        strokeWidth="1.3"
      />
      <rect x="2" y="2" width="176" height="120" rx="4" fill={`url(#${gridId})`} />

      <path
        d="M1 6C1 3.2 3.2 1 6 1H22V123H6C3.2 123 1 120.8 1 118V6Z"
        fill="#14171c"
      />
      <line x1="22" y1="1" x2="22" y2="123" stroke="#c84b31" strokeWidth="1.2" />

      <text
        x="14"
        y="62"
        fill="#F6F5F2"
        fontSize="6.3"
        fontWeight="700"
        letterSpacing="1.3"
        fontFamily="Plus Jakarta Sans, sans-serif"
        textAnchor="middle"
        transform="rotate(-90 14 62)"
      >
        {isGame ? 'GAME DESIGN' : 'NETWORK DESIGN'}
      </text>

      {isGame ? (
        <g>
          <text
            x="30"
            y="16"
            fill="#c84b31"
            fontSize="6.4"
            fontWeight="800"
            letterSpacing="0.7"
            fontFamily="Plus Jakarta Sans, sans-serif"
          >
            GAME DESIGN BLUEPRINT
          </text>
          <line x1="30" y1="21" x2="168" y2="21" stroke="#111315" strokeWidth="0.8" />

          <rect
            x="30"
            y="26"
            width="84"
            height="15"
            rx="2"
            fill="#EAE8E1"
            stroke="#111315"
            strokeWidth="0.8"
          />
          <text
            x="35"
            y="36"
            fill="#111315"
            fontSize="6.1"
            fontWeight="700"
            fontFamily="monospace"
          >
            CORE LOOP &amp; MECHANICS
          </text>

          <rect
            x="30"
            y="46"
            width="84"
            height="48"
            fill="#14171c"
            stroke="#111315"
            strokeWidth="0.9"
          />
          <polygon
            points="72,53 104,67 72,81 40,67"
            fill="#1e232b"
            stroke="#646d7a"
            strokeWidth="0.9"
          />
          <line x1="56" y1="60" x2="88" y2="74" stroke="rgba(246,245,242,0.16)" strokeWidth="0.7" />
          <line x1="88" y1="60" x2="56" y2="74" stroke="rgba(246,245,242,0.16)" strokeWidth="0.7" />
          <rect x="68" y="58" width="8" height="9" rx="1.5" fill="#c84b31" stroke="#F6F5F2" strokeWidth="0.8" />
          <circle cx="52" cy="67" r="2.3" fill="#22c55e" />
          <circle cx="92" cy="67" r="2.3" fill="#38bdf8" />
          <line x1="55" y1="67" x2="67" y2="64" stroke="#EAE8E1" strokeWidth="0.9" strokeDasharray="2 1.5" />
          <line x1="77" y1="64" x2="89" y2="67" stroke="#EAE8E1" strokeWidth="0.9" strokeDasharray="2 1.5" />
          <rect x="36" y="86" width="28" height="3.2" rx="1" fill="#22c55e" />
          <rect x="68" y="86" width="40" height="3.2" rx="1" fill="#3f4652" />

          <text
            x="30"
            y="106"
            fill="#111315"
            fontSize="6.1"
            fontWeight="700"
            fontFamily="Plus Jakarta Sans, sans-serif"
          >
            GAMEPLAY · LEVEL DESIGN
          </text>
          <text
            x="30"
            y="115"
            fill="#525866"
            fontSize="5.7"
            fontWeight="600"
            fontFamily="monospace"
          >
            Engine · Logic · Interactive
          </text>
        </g>
      ) : (
        <g>
          <text
            x="30"
            y="16"
            fill="#0284c7"
            fontSize="6.4"
            fontWeight="800"
            letterSpacing="0.7"
            fontFamily="Plus Jakarta Sans, sans-serif"
          >
            TOPOLOGY BLUEPRINT
          </text>
          <line x1="30" y1="21" x2="168" y2="21" stroke="#111315" strokeWidth="0.8" />

          <rect
            x="30"
            y="26"
            width="84"
            height="15"
            rx="2"
            fill="#EAE8E1"
            stroke="#111315"
            strokeWidth="0.8"
          />
          <text
            x="35"
            y="36"
            fill="#111315"
            fontSize="6.1"
            fontWeight="700"
            fontFamily="monospace"
          >
            ROUTING &amp; SWITCHING
          </text>

          <rect
            x="30"
            y="46"
            width="84"
            height="48"
            fill="#14171c"
            stroke="#111315"
            strokeWidth="0.9"
          />
          <line x1="72" y1="58" x2="46" y2="80" stroke="#38bdf8" strokeWidth="1.1" />
          <line x1="72" y1="58" x2="72" y2="80" stroke="#38bdf8" strokeWidth="1.1" />
          <line x1="72" y1="58" x2="98" y2="80" stroke="#38bdf8" strokeWidth="1.1" />
          <circle cx="72" cy="57" r="5.5" fill="#0284c7" stroke="#F6F5F2" strokeWidth="1" />
          {[46, 72, 98].map((nx, nIdx) => (
            <g key={nIdx}>
              <rect
                x={nx - 7}
                y="76"
                width="14"
                height="8"
                rx="1.5"
                fill="#1e232b"
                stroke="#EAE8E1"
                strokeWidth="0.9"
              />
              <circle cx={nx} cy="71" r="1.7" fill="#22c55e" />
            </g>
          ))}

          <text
            x="30"
            y="106"
            fill="#111315"
            fontSize="6.1"
            fontWeight="700"
            fontFamily="Plus Jakarta Sans, sans-serif"
          >
            LAN / WAN · ARCHITECTURE
          </text>
          <text
            x="30"
            y="115"
            fill="#525866"
            fontSize="5.7"
            fontWeight="600"
            fontFamily="monospace"
          >
            Topology · Subnet · Protocol
          </text>
        </g>
      )}
    </svg>
  );
}

function HandDrawnInkLoop() {
  return (
    <svg
      className="case-ink-loop"
      viewBox="0 0 76 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14 26C13 13 27 6 43 7C59 8 69 16 68 27C67 39 52 46 35 45C19 44 9 35 12 22C14 14 24 10 34 10"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Gambar SVG cadangan kalau proyek belum pakai screenshot
function ProjectArtSvg({ artType }) {
  if (artType === 'network') {
    return (
      <svg viewBox="0 0 360 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="360" height="140" fill="#14171a" />
        <rect x="28" y="18" width="68" height="22" fill="#1c2026" stroke="#525866" strokeWidth="1" />
        <text x="62" y="32" fill="#EAE8E1" fontFamily="Plus Jakarta Sans,sans-serif" fontSize="8.5" fontWeight="700" textAnchor="middle">
          RTR 2911 ISP
        </text>
        <line x1="96" y1="29" x2="132" y2="29" stroke="#c84b31" strokeWidth="1.5" />
        <rect x="132" y="18" width="84" height="22" fill="#1c2026" stroke="#c84b31" strokeWidth="1.2" />
        <text x="174" y="32" fill="#f6f5f2" fontFamily="Plus Jakarta Sans,sans-serif" fontSize="8.5" fontWeight="700" textAnchor="middle">
          CORE SW 2960
        </text>
        <line x1="216" y1="29" x2="252" y2="29" stroke="#22c55e" strokeWidth="1.5" />
        <rect x="252" y="18" width="80" height="22" fill="#111315" stroke="#525866" strokeWidth="1" />
        <text x="292" y="32" fill="#22c55e" fontFamily="Plus Jakarta Sans,sans-serif" fontSize="8.5" fontWeight="700" textAnchor="middle">
          TRUNK 802.1Q
        </text>

        <line x1="174" y1="40" x2="174" y2="54" stroke="#646d7a" strokeWidth="1.2" />
        <line x1="56" y1="54" x2="304" y2="54" stroke="#646d7a" strokeWidth="1.2" />
        <line x1="56" y1="54" x2="56" y2="66" stroke="#646d7a" strokeWidth="1.2" />
        <line x1="135" y1="54" x2="135" y2="66" stroke="#646d7a" strokeWidth="1.2" />
        <line x1="215" y1="54" x2="215" y2="66" stroke="#646d7a" strokeWidth="1.2" />
        <line x1="304" y1="54" x2="304" y2="66" stroke="#646d7a" strokeWidth="1.2" />

        <rect x="20" y="66" width="72" height="36" fill="#111315" stroke="#5394af" strokeWidth="1.1" />
        <text x="56" y="81" fill="#f6f5f2" fontFamily="Plus Jakarta Sans,sans-serif" fontSize="8.5" fontWeight="700" textAnchor="middle">
          VLAN 10 · HRD
        </text>
        <text x="56" y="93" fill="#848b98" fontFamily="Plus Jakarta Sans,sans-serif" fontSize="7.5" textAnchor="middle">
          .10.0/27 (3 Host)
        </text>

        <rect x="99" y="66" width="72" height="36" fill="#111315" stroke="#5394af" strokeWidth="1.1" />
        <text x="135" y="81" fill="#f6f5f2" fontFamily="Plus Jakarta Sans,sans-serif" fontSize="8.5" fontWeight="700" textAnchor="middle">
          VLAN 20 · IT
        </text>
        <text x="135" y="93" fill="#848b98" fontFamily="Plus Jakarta Sans,sans-serif" fontSize="7.5" textAnchor="middle">
          .20.0/27 (4 PC)
        </text>

        <rect x="179" y="66" width="72" height="36" fill="#111315" stroke="#5394af" strokeWidth="1.1" />
        <text x="215" y="81" fill="#f6f5f2" fontFamily="Plus Jakarta Sans,sans-serif" fontSize="8.5" fontWeight="700" textAnchor="middle">
          VLAN 30 · FIN
        </text>
        <text x="215" y="93" fill="#848b98" fontFamily="Plus Jakarta Sans,sans-serif" fontSize="7.5" textAnchor="middle">
          .30.0/27 (4 Unit)
        </text>

        <rect x="259" y="66" width="82" height="36" fill="#111315" stroke="#c84b31" strokeWidth="1.2" />
        <text x="300" y="81" fill="#f6f5f2" fontFamily="Plus Jakarta Sans,sans-serif" fontSize="8.5" fontWeight="700" textAnchor="middle">
          VLAN 40 · SRV
        </text>
        <text x="300" y="93" fill="#c84b31" fontFamily="Plus Jakarta Sans,sans-serif" fontSize="7.5" fontWeight="600" textAnchor="middle">
          DNS &amp; DHCP /28
        </text>

        <text x="20" y="122" fill="#848b98" fontFamily="Plus Jakarta Sans,sans-serif" fontSize="9.5">
          Cisco Packet Tracer · 2× Router 2911 · 5× Switch 2960
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 360 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="360" height="140" fill="#14171a" />
      <polygon points="180,14 306,64 180,114 54,64" fill="#1c2026" stroke="#646d7a" strokeWidth="1.2" />
      <line x1="117" y1="39" x2="243" y2="89" stroke="rgba(246,245,242,0.1)" strokeWidth="1" />
      <line x1="243" y1="39" x2="117" y2="89" stroke="rgba(246,245,242,0.1)" strokeWidth="1" />
      <rect x="166" y="42" width="26" height="24" fill="rgba(246,245,242,0.12)" stroke="#EAE8E1" strokeWidth="1.2" />
      <polyline
        points="106,66 146,48 182,82 246,58"
        fill="none"
        stroke="#c84b31"
        strokeWidth="2.4"
        strokeDasharray="4 3"
      />
      <circle cx="106" cy="66" r="4.5" fill="#f6f5f2" />
      <circle cx="246" cy="58" r="5" fill="#c84b31" />
      <text x="20" y="26" fill="#EAE8E1" fontFamily="Plus Jakarta Sans,sans-serif" fontSize="8.5" fontWeight="700">
        PIXEL 3D · A* NPC
      </text>
      <text x="20" y="124" fill="#848b98" fontFamily="Plus Jakarta Sans,sans-serif" fontSize="9.5">
        Godot Engine 4 · A* Pathfinding NPC · Skripsi S1
      </text>
    </svg>
  );
}

export default function ProjectsSection({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.categoryKey === activeCategory);

  return (
    <div id="projects" className="projects-editorial-section">
      <div className="section-header-split">
        <div>
          <span className="section-index">KARYA &amp; STUDI KASUS</span>
          <h2>Proyek</h2>
        </div>

        <div className="project-category-tabs" role="tablist" aria-label="Filter Kategori Proyek">
          {projectCategories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.key}
              className={`project-cat-btn ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="case-study-list">
        {filteredProjects.map((project, index) => (
          <article
            key={project.id}
            className="case-row"
            onClick={() => onSelectProject(project)}
          >
            <div className="case-col-meta">
              <div className="case-num-wrap">
                <span className="case-num">0{index + 1}</span>
                <HandDrawnInkLoop />
              </div>
              <span className="case-domain">{project.category}</span>
            </div>

            <div className="case-col-content">
              <h3>{project.title}</h3>
              <p>{project.shortDesc}</p>
              <div className="case-tech-line">
                {project.badges.map((badge, idx) => (
                  <React.Fragment key={idx}>
                    <span className="case-tech-pill">{badge}</span>
                    {idx < project.badges.length - 1 && (
                      <span className="tech-sep" aria-hidden="true">
                        /
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="case-col-visual">
              <div className="case-sleeve-stage">
                <div className="case-blueprint-card" aria-hidden="true">
                  <ProjectBlueprintCardSvg categoryKey={project.categoryKey} index={index} />
                </div>

                <div
                  className="case-art-frame"
                  style={{
                    aspectRatio: '16 / 9',
                    width: '100%',
                    overflow: 'hidden',
                    borderRadius: '6px',
                    backgroundColor:
                      project.image && project.categoryKey === 'network'
                        ? '#ffffff'
                        : '#14171a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`Screenshot ${project.title}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: project.categoryKey === 'network' ? 'contain' : 'cover',
                        objectPosition: 'center',
                        padding: project.categoryKey === 'network' ? '8px' : '0',
                        display: 'block',
                      }}
                    />
                  ) : (
                    <ProjectArtSvg artType={project.artType} />
                  )}
                </div>
              </div>

              <div className="case-action-link">
                <span className="case-action-text">
                  {project.categoryKey === 'game' ? 'Lihat Detail Game' : 'Lihat Detail Topologi'}
                  <svg
                    className="case-ink-underline"
                    viewBox="0 0 140 8"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 5.5C38 2.2 98 2.5 138 5.2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="case-arrow" aria-hidden="true">
                  →
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
