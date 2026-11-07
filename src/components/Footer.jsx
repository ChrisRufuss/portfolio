import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        paddingTop: '3.5rem',
        paddingBottom: '2.5rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          {/* Brand & Tagline */}
          <div style={{ maxWidth: '420px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.6rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: '#EFF6FF',
                  border: '1px solid #BFDBFE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2563EB',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                }}
              >
                CR
              </div>
              <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#172554' }}>
                {personalInfo.name}
              </span>
            </div>
            <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Second-year IT student at MKCE, Karur. Dedicated to solid code architecture, continuous skill refinement, and building practical digital solutions.
            </p>
          </div>

          {/* Quick links & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href={personalInfo.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748B',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#2563EB';
                e.currentTarget.style.borderColor = '#BFDBFE';
                e.currentTarget.style.background = '#EFF6FF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#64748B';
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.background = '#FFFFFF';
              }}
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={`mailto:${personalInfo.contact.email}`}
              aria-label="Email Chris Rufus"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748B',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#2563EB';
                e.currentTarget.style.borderColor = '#BFDBFE';
                e.currentTarget.style.background = '#EFF6FF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#64748B';
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.background = '#FFFFFF';
              }}
            >
              <Mail size={18} />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.55rem 0.95rem',
                borderRadius: 'var(--radius-md)',
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                color: '#172554',
                fontSize: '0.85rem',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#2563EB';
                e.currentTarget.style.borderColor = '#BFDBFE';
                e.currentTarget.style.background = '#EFF6FF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#172554';
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.background = '#FFFFFF';
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Notice */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            paddingTop: '1.75rem',
            fontSize: '0.82rem',
            color: '#94A3B8',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. Designed & Engineered with integrity.
          </div>
          <div>
            MKCE Karur • Tamil Nadu, India
          </div>
        </div>
      </div>
    </footer>
  );
}
