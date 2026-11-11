import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function SkillsStrip() {
  return (
    <div id="skills" className="skills-matrix-section">
      <div className="section-header-split">
        <div>
          <span className="section-index">KOMPETENSI TEKNIS</span>
          <h2>Spesifikasi &amp; Teknologi</h2>
        </div>
      </div>

      <div className="spec-table" role="table" aria-label="Tabel Kompetensi Teknis">
        {skillsData.map((group, index) => (
          <div className="spec-table-row" role="row" key={index}>
            <div className="spec-table-cell-num" role="cell">
              0{index + 1}
            </div>
            <div className="spec-table-cell-domain" role="cell">
              <h4>{group.category}</h4>
            </div>
            <div className="spec-table-cell-items" role="cell">
              {group.tags.map((tag, tagIdx) => (
                <span className="spec-item-label" key={tagIdx}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
