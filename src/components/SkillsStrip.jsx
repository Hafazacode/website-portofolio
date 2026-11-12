import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function SkillsStrip() {
  const { skillsData, t } = useLanguage();

  return (
    <div id="skills" className="skills-matrix-section">
      <div className="section-header-split">
        <div>
          <span className="section-index">{t.skillsBadge}</span>
          <h2>{t.skillsTitle}</h2>
        </div>
      </div>

      <div className="spec-table" role="table" aria-label={t.skillsTitle}>
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
