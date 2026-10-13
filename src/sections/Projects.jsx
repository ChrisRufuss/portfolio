import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  X, 
  Check, 
  Code2, 
  ShieldCheck, 
  Building2, 
  FileSpreadsheet, 
  Scale,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { projects } from '../data/projects';

// Custom futuristic visual artwork for each project card
function ProjectVisualArtwork({ type, title }) {
  if (type === 'cyber-vault') {
    return (
      <div
        style={{
          width: '100%',
          height: '200px',
          background: 'linear-gradient(135deg, #071329 0%, #030814 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(0, 240, 255, 0.15)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.15) 0%, transparent 65%)',
          }}
        />
        {/* Memory game keypad abstract art */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 38px)',
            gap: '8px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {['●', '★', '▲', '◆', '9', 'X', '7', '!', '●', '✦', '8', 'Q'].map((val, i) => (
            <div
              key={i}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: i === 5 || i === 9 ? 'rgba(0, 240, 255, 0.25)' : 'rgba(16, 25, 61, 0.8)',
                border: i === 5 || i === 9 ? '1px solid #00f0ff' : '1px solid rgba(79, 140, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: i === 5 || i === 9 ? '#00f0ff' : 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                fontWeight: 'bold',
                boxShadow: i === 5 ? '0 0 12px rgba(0, 240, 255, 0.4)' : 'none',
              }}
            >
              {val}
            </div>
          ))}
        </div>
        <div style={{ position: 'absolute', bottom: '10px', right: '14px', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-accent)' }}>
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
          height: '200px',
          background: 'linear-gradient(135deg, #0a1128 0%, #030712 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(59, 130, 246, 0.2)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 65%)',
          }}
        />
        {/* Java banking visual mock */}
        <div
          style={{
            width: '82%',
            maxWidth: '300px',
            background: 'rgba(15, 23, 42, 0.85)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '10px',
            padding: '12px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#93c5fd', marginBottom: '8px' }}>
            <span>ACC #8492-****</span>
            <span style={{ color: '#34d399' }}>AUTH_VERIFIED</span>
          </div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>
            $ 12,480.00 <span style={{ fontSize: '0.7rem', color: '#64748b' }}>USD</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', fontSize: '0.7rem' }}>
            <span>TX_TYPE: RELATIONAL_LEDGER</span>
            <span style={{ color: '#00f0ff' }}>MYSQL_SYNCED</span>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '10px', right: '14px', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#60a5fa' }}>
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
          height: '200px',
          background: 'linear-gradient(135deg, #0d1226 0%, #040714 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 65%)',
          }}
        />
        <div
          style={{
            width: '82%',
            maxWidth: '300px',
            background: 'rgba(15, 23, 42, 0.85)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '10px',
            padding: '12px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#c084fc', marginBottom: '6px' }}>
            <span>INVOICE #INV-2024-09</span>
            <span>STOCK_MONITOR</span>
          </div>
          <div style={{ borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1' }}>
              <span>Retail Stock Item A x 2</span>
              <span>$48.00</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#34d399', fontWeight: 600 }}>
              <span>NET TOTAL + GST</span>
              <span>$52.80</span>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '10px', right: '14px', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#c084fc' }}>
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
        height: '200px',
        background: 'linear-gradient(135deg, #09101f 0%, #030611 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(236, 72, 153, 0.2)',
      }}
    >
      <div
        style={{
          width: '82%',
          maxWidth: '300px',
          background: 'rgba(15, 23, 42, 0.85)',
          border: '1px solid rgba(236, 72, 153, 0.3)',
          borderRadius: '10px',
          padding: '12px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#f472b6', marginBottom: '6px' }}>
          <span>DOSSIER_INDEX_#074</span>
          <span>RESEARCH_DOC</span>
        </div>
        <div style={{ color: '#94a3b8', fontSize: '0.7rem' }}>
          • Chronological Case Timeline<br />
          • Exhibit Cross-Referencing & Tags<br />
          • Note: Early exploratory utility
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '10px', right: '14px', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#f472b6' }}>
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
            background: 'rgba(16, 185, 129, 0.15)',
            color: '#34d399',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            fontSize: '0.75rem',
            fontWeight: 600,
            fontFamily: 'var(--font-mono)',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399', display: 'inline-block' }} />
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
            background: 'rgba(59, 130, 246, 0.15)',
            color: '#60a5fa',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            fontSize: '0.75rem',
            fontWeight: 600,
            fontFamily: 'var(--font-mono)',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#60a5fa', display: 'inline-block' }} />
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
          background: 'rgba(236, 72, 153, 0.15)',
          color: '#f472b6',
          border: '1px solid rgba(236, 72, 153, 0.3)',
          fontSize: '0.75rem',
          fontWeight: 600,
          fontFamily: 'var(--font-mono)',
        }}
      >
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f472b6', display: 'inline-block' }} />
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
                background: 'var(--bg-glass-card)',
                backdropFilter: 'blur(16px)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: 'var(--shadow-md)',
              }}
              className="project-card"
            >
              {/* Card Visual Artwork */}
              <ProjectVisualArtwork type={proj.visualType} title={proj.title} />

              {/* Card Body */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                {/* Meta Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                  <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-accent)', textTransform: 'uppercase' }}>
                    {proj.category}
                  </span>
                  {getStatusBadge(proj.statusType, proj.status)}
                </div>

                {/* Project Title */}
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.65rem' }}>
                  {proj.title}
                </h3>

                {/* Short Description */}
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.93rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
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
                        background: 'rgba(16, 25, 61, 0.8)',
                        border: '1px solid rgba(79, 140, 255, 0.15)',
                        color: '#94a3b8',
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
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
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
                      style={{ flex: 1, padding: '0.55rem', fontSize: '0.85rem', opacity: 0.5, cursor: 'not-allowed' }}
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
                    style={{ padding: '0.55rem 0.85rem', fontSize: '0.85rem' }}
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
            background: 'rgba(3, 6, 18, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
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
              background: '#090e24',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 30px rgba(0, 240, 255, 0.1)',
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
                <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-accent)' }}>
                  {activeModalProject.category}
                </span>
                <h3 id="modal-title" style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Tagline */}
            <p style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.05rem', marginBottom: '1.25rem', lineHeight: 1.5 }}>
              {activeModalProject.tagline}
            </p>

            {/* Full Detailed Description */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
                System Overview & Engineering Scope
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.7 }}>
                {activeModalProject.fullDescription}
              </p>
            </div>

            {/* Implemented Features List */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem' }}>
                Key Implemented / Planned Features
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {activeModalProject.implementedFeatures.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                    <Check size={17} style={{ color: 'var(--cyan-accent)', marginTop: '2px', flexShrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
                Technologies Used
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {activeModalProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: '0.3rem 0.75rem',
                      borderRadius: '6px',
                      background: 'rgba(0, 240, 255, 0.08)',
                      border: '1px solid rgba(0, 240, 255, 0.25)',
                      color: 'var(--cyan-accent)',
                      fontSize: '0.82rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div style={{ display: 'flex', gap: '1rem' }}>
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
          transform: translateY(-5px);
          border-color: rgba(0, 240, 255, 0.4);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6), 0 0 25px rgba(0, 240, 255, 0.08);
        }
      `}</style>
    </section>
  );
}
