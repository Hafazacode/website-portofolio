import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero3DStory from './components/Hero3DStory';
import HrSummary from './components/HrSummary';
import ProjectsSection from './components/ProjectsSection';
import SkillsStrip from './components/SkillsStrip';
import ContactFooter from './components/ContactFooter';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Navbar />
      <Hero3DStory />

      {/* konten utama */}
      <section id="sol">
        <div className="sol-container">
          <HrSummary />
          <ProjectsSection onSelectProject={(proj) => setSelectedProject(proj)} />
          <SkillsStrip />
          <ContactFooter />
        </div>
      </section>

      {/* modal detail proyek */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
