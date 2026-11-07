import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  X, 
  Check, 
  Code2
} from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { projects } from '../data/projects';

// Clean, professional visual preview for each project card
function ProjectVisualArtwork({ type, title }) {
  if (type === 'cyber-vault') {
    return (
      <div
        style={{
          width: '100%',
          height: '190px',
          background: '#F8FAFC',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid #E2E8F0',
        }}
      >
        {/* Memory game keypad preview */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 38px)',
            gap: '8px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {['●', '★', '▲', '◆', '9', 'X', '7', '!', '●', '✦', '8', 'Q'].map((val, i) => {
            const isHighlight = i === 5 || i === 9;
            return (
              <div
                key={i}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: isHighlight ? '#EFF6FF' : '#FFFFFF',
                  border: isHighlight ? '1.5px solid #2563EB' : '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isHighlight ? '#2563EB' : '#64748B',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  boxShadow: '0 1px 2px rgba(15, 23, 42, 0.05)',
                }}
              >
                {val}
              </div>
            );
          })}
        </div>
        <div style={{ position: 'absolute', bottom: '10px', right: '14px', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#2563EB', fontWeight: 600 }}>
          SECURE_RECALL_V1
        </div>
      </div>
    );
  }

  if (type === 'bank-ledger') {
    return (
      <div
        style={{
          width: '100%',
          height: '190px',
          background: '#F8FAFC',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid #E2E8F0',
        }}
      >
        {/* Banking mock preview */}
        <div
          style={{
            width: '82%',
            maxWidth: '300px',
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '10px',
            padding: '12px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            boxShadow: '0 1px 3px rgba(15, 23, 42, 0.06)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B', marginBottom: '8px' }}>
            <span>ACC #8492-****</span>
            <span style={{ color: '#10B981', fontWeight: 600 }}>AUTH_VERIFIED</span>
          </div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#172554', marginBottom: '8px' }}>
            $ 12,480.00 <span style={{ fontSize: '0.7rem', color: '#64748B' }}>USD</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: '0.7rem' }}>
            <span>TX_TYPE: RELATIONAL</span>
            <span style={{ color: '#2563EB', fontWeight: 600 }}>MYSQL_SYNCED</span>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '10px', right: '14px', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#2563EB', fontWeight: 600 }}>
          JAVAFX_CORE
        </div>
      </div>
    );
  }

  if (type === 'billing-system') {
    return (
      <div
        style={{
          width: '100%',
          height: '190px',
          background: '#F8FAFC',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid #E2E8F0',
        }}
      >
        <div
          style={{
            width: '82%',
            maxWidth: '300px',
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '10px',
            padding: '12px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            boxShadow: '0 1px 3px rgba(15, 23, 42, 0.06)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#2563EB', marginBottom: '6px', fontWeight: 600 }}>
            <span>INVOICE #INV-2024-09</span>
            <span>STOCK_MONITOR</span>
          </div>
          <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B' }}>
              <span>Retail Stock Item A x 2</span>
              <span style={{ fontWeight: 600, color: '#172554' }}>$48.00</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#10B981', fontWeight: 600 }}>
              <span>NET TOTAL + GST</span>
              <span>$52.80</span>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '10px', right: '14px', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#2563EB', fontWeight: 600 }}>
          INVOICE_ENGINE
        </div>
      </div>
    );
  }

  // Fallback: Case Dossier
  return (
    <div
      style={{
        width: '100%',
        height: '190px',
        background: '#F8FAFC',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      <div
        style={{
          width: '82%',
          maxWidth: '300px',
          background: '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '10px',
          padding: '12px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          boxShadow: '0 1px 3px rgba(15, 23, 42, 0.06)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#2563EB', marginBottom: '6px', fontWeight: 600 }}>
          <span>DOSSIER_INDEX_#074</span>
          <span>RESEARCH_DOC</span>
        </div>
        <div style={{ color: '#64748B', fontSize: '0.7rem', lineHeight: 1.5 }}>
          • Chronological Case Timeline<br />
          • Exhibit Cross-Referencing & Tags<br />
          • Early exploratory research utility
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '10px', right: '14px', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#2563EB', fontWeight: 600 }}>
        TIMELINE_MAPPING
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const getStatusBadge = (statusType, statusLabel) => {
    if (statusType === 'live') {
      return (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.25rem 0.65rem',
            borderRadius: '99px',
            background: '#ECFDF5',
            color: '#059669',
            border: '1px solid #A7F3D0',
            fontSize: '0.75rem',
            fontWeight: 600,
            fontFamily: 'var(--font-mono)',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#059669', display: 'inline-block' }} />
          {statusLabel}
        </span>
      );
    }
    if (statusType === 'progress') {
      return (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.25rem 0.65rem',
            borderRadius: '99px',
            background: '#EFF6FF',
            color: '#2563EB',
            border: '1px solid #BFDBFE',
            fontSize: '0.75rem',
            fontWeight: 600,
            fontFamily: 'var(--font-mono)',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563EB', display: 'inline-block' }} />
          {statusLabel}
        </span>
      );
    }
    return (
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.25rem 0.65rem',
          borderRadius: '99px',
          background: '#F1F5F9',
          color: '#475569',
          border: '1px solid #E2E8F0',
          fontSize: '0.75rem',
          fontWeight: 600,
          fontFamily: 'var(--font-mono)',
        }}
      >
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#64748B', display: 'inline-block' }} />
        {statusLabel}
      </span>
    );
  };

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Featured Showcase</span>
          </div>
          <h2 className="section-title">
            Engineered Works & <span className="gradient-text">Practical Projects</span>
          </h2>
          <p className="section-subtitle">
            Authentic applications built to practice system architecture, interactive logic, and software workflows.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {projects.map((proj) => (
            <article
              key={proj.id}
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid #E2E8F0',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.25s ease',
                boxShadow: 'var(--shadow-sm)',
              }}
              className="project-card"
            >
              {/* Card Visual Artwork */}
              <ProjectVisualArtwork type={proj.visualType} title={proj.title} />

              {/* Card Body */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                {/* Meta Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                  <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#2563EB', fontWeight: 600, textTransform: 'uppercase' }}>
                    {proj.category}
                  </span>
                  {getStatusBadge(proj.statusType, proj.status)}
                </div>

                {/* Project Title */}
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#172554', marginBottom: '0.65rem' }}>
                  {proj.title}
                </h3>

                {/* Short Description */}
                <p style={{ color: '#64748B', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {proj.shortDescription}
                </p>

                {/* Technology Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem', marginTop: 'auto' }}>
                  {proj.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        background: '#F1F5F9',
                        border: '1px solid #E2E8F0',
                        color: '#475569',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid #F1F5F9',
                  }}
                >
                  {/* Live Demo Button */}
                  {proj.liveUrl ? (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ flex: 1, padding: '0.55rem', fontSize: '0.85rem' }}
                      aria-label={`Open Live Demo of ${proj.title}`}
                    >
                      <ExternalLink size={15} />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="btn btn-secondary"
                      style={{ flex: 1, padding: '0.55rem', fontSize: '0.85rem', color: '#94A3B8', background: '#F8FAFC', cursor: 'not-allowed' }}
                      title="Demo coming soon / Desktop System"
                    >
                      <span>Demo In Progress</span>
                    </button>
                  )}

                  {/* Details Modal Trigger */}
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(proj)}
                    className="btn btn-secondary"
                    style={{ padding: '0.55rem 0.95rem', fontSize: '0.85rem' }}
                    aria-label={`View deep details of ${proj.title}`}
                  >
                    Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Detailed Project View Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.55)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setActiveModalProject(null)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid #E2E8F0',
              boxShadow: '0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 10px 10px -5px rgba(15, 23, 42, 0.04)',
              width: '100%',
              maxWidth: '680px',
              maxHeight: '85vh',
              overflowY: 'auto',
              padding: '2rem',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
              <div>
                <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#2563EB', fontWeight: 600 }}>
                  {activeModalProject.category}
                </span>
                <h3 id="modal-title" style={{ fontSize: '1.65rem', fontWeight: 800, color: '#172554', marginTop: '0.2rem' }}>
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
                style={{
                  background: '#F1F5F9',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  color: '#64748B',
                  cursor: 'pointer',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Tagline */}
            <p style={{ color: '#172554', fontWeight: 600, fontSize: '1.05rem', marginBottom: '1.25rem', lineHeight: 1.5 }}>
              {activeModalProject.tagline}
            </p>

            {/* Full Detailed Description */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', color: '#64748B', fontFamily: 'var(--font-mono)', fontWeight: 600, marginBottom: '0.5rem' }}>
                System Overview & Engineering Scope
              </h4>
              <p style={{ color: '#64748B', fontSize: '0.96rem', lineHeight: 1.7 }}>
                {activeModalProject.fullDescription}
              </p>
            </div>

            {/* Implemented Features List */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', color: '#64748B', fontFamily: 'var(--font-mono)', fontWeight: 600, marginBottom: '0.75rem' }}>
                Key Implemented / Planned Features
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {activeModalProject.implementedFeatures.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: '#64748B' }}>
                    <Check size={17} style={{ color: '#2563EB', marginTop: '2px', flexShrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', color: '#64748B', fontFamily: 'var(--font-mono)', fontWeight: 600, marginBottom: '0.5rem' }}>
                Technologies Used
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {activeModalProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: '0.3rem 0.75rem',
                      borderRadius: '6px',
                      background: '#EFF6FF',
                      border: '1px solid #BFDBFE',
                      color: '#2563EB',
                      fontSize: '0.82rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 500,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {activeModalProject.liveUrl && (
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  <ExternalLink size={16} /> Open Live Application
                </a>
              )}
              {activeModalProject.githubUrl && (
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: 1 }}
                >
                  <GithubIcon size={16} /> View GitHub Profile/Repo
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .project-card:hover {
          transform: translateY(-4px);
          border-color: #CBD5E1;
          box-shadow: 0 12px 24px -4px rgba(37, 99, 235, 0.08), 0 4px 8px -2px rgba(15, 23, 42, 0.04);
        }
      `}</style>
    </section>
  );
}
