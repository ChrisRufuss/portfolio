import React from 'react';
import { ArrowRight, Mail, FileText } from 'lucide-react';
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
                background: '#EFF6FF',
                border: '1px solid #BFDBFE',
                marginBottom: '1.5rem',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10B981',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  color: '#2563EB',
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
                  color: '#64748B',
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
                  fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  color: '#172554',
                  marginBottom: '1rem',
                }}
              >
                {personalInfo.name}
              </h1>
            </div>

            {/* Headline */}
            <h2
              style={{
                fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)',
                fontWeight: 600,
                color: '#172554',
                lineHeight: 1.35,
                marginBottom: '1.25rem',
              }}
            >
              Building ideas into <span style={{ color: '#2563EB' }}>digital reality.</span>
            </h2>

            {/* Introduction paragraph */}
            <p
              style={{
                color: '#64748B',
                fontSize: '1.05rem',
                lineHeight: 1.75,
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

              {/* Resume Button: Rendered only when resume is enabled */}
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
                borderTop: '1px solid #E2E8F0',
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
                    gap: '0.45rem',
                    color: '#64748B',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#2563EB')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
                >
                  <GithubIcon size={16} />
                  <span>github.com/ChrisRufuss</span>
                </a>
              </div>

              <div style={{ height: '16px', width: '1px', background: '#E2E8F0' }} />

              <span style={{ fontSize: '0.85rem', color: '#64748B', fontFamily: 'var(--font-mono)' }}>
                MKCE • Karur, TN
              </span>
            </div>
          </div>

          {/* Right Hero Interactive Visual */}
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
