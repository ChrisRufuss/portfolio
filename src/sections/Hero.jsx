import { ArrowRight, Mail, FileText, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { personalInfo } from '../data/portfolio';
import CyberCanvasVisual from '../components/CyberCanvasVisual';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--header-height) + 2rem)',
        paddingBottom: '4rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Hero Content */}
          <div style={{ maxWidth: '620px' }}>
            {/* Status / Availability Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 0.95rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(0, 240, 255, 0.08)',
                border: '1px solid rgba(0, 240, 255, 0.25)',
                marginBottom: '1.5rem',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 10px #10b981',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  color: 'var(--cyan-accent)',
                  textTransform: 'uppercase',
                }}
              >
                {personalInfo.statusBadge}
              </span>
            </div>

            {/* Greeting & Name */}
            <div style={{ marginBottom: '0.5rem' }}>
              <span
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1.15rem',
                  fontWeight: 500,
                  display: 'block',
                  marginBottom: '0.25rem',
                }}
              >
                Hello, I'm
              </span>
              <h1
                style={{
                  fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  marginBottom: '1rem',
                }}
              >
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>
            </div>

            {/* Animated Headline */}
            <h2
              style={{
                fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                lineHeight: 1.3,
                marginBottom: '1.25rem',
              }}
            >
              {personalInfo.roleHeadline}
            </h2>

            {/* Introduction paragraph */}
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                marginBottom: '2rem',
                maxWidth: '540px',
              }}
            >
              {personalInfo.introduction}
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '2.5rem',
              }}
            >
              <a href="#projects" className="btn btn-primary">
                <span>Explore My Projects</span>
                <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn btn-secondary">
                <Mail size={18} />
                <span>Get In Touch</span>
              </a>

              {/* Resume Button: Rendered only when resume is genuinely enabled */}
              {personalInfo.resume.enabled && (
                <a
                  href={personalInfo.resume.filePath}
                  download={personalInfo.resume.fileName}
                  className="btn btn-outline"
                  aria-label="Download Chris Rufus Resume"
                >
                  <FileText size={18} />
                  <span>Resume</span>
                </a>
              )}
            </div>

            {/* Micro Social & Tech Badges */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(79, 140, 255, 0.12)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <a
                  href={personalInfo.contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Chris Rufus GitHub profile"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan-accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <GithubIcon size={16} />
                  <span>github.com/ChrisRufuss</span>
                </a>
              </div>

              <div style={{ height: '16px', width: '1px', background: 'rgba(255,255,255,0.1)' }} />

              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                MKCE • Karur, TN
              </span>
            </div>
          </div>

          {/* Right Hero Interactive 3D/Canvas Visual */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            <CyberCanvasVisual />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
