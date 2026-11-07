import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolio';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Elevation on scroll
      setIsScrolled(window.scrollY > 15);

      // Scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Subtle Progress Bar */}
      <div 
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Reading progress"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          width: `${scrollProgress}%`,
          background: '#2563EB',
          zIndex: 100,
          transition: 'width 0.1s ease-out',
        }}
      />

      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'var(--header-height)',
          zIndex: 90,
          transition: 'all 0.25s ease',
          background: isScrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(248, 250, 252, 0.8)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: isScrolled ? '1px solid #E2E8F0' : '1px solid transparent',
          boxShadow: isScrolled ? '0 1px 3px 0 rgba(15, 23, 42, 0.05)' : 'none',
        }}
      >
        <div 
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          {/* Logo / Monogram */}
          <a
            href="#hero"
            aria-label="Chris Rufus - Return to Top"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              color: '#172554',
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: '#EFF6FF',
                border: '1px solid #BFDBFE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span 
                style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontWeight: 800, 
                  fontSize: '0.95rem',
                  color: '#2563EB',
                  letterSpacing: '-0.05em'
                }}
              >
                CR
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.02em', lineHeight: 1.2, color: '#172554' }}>
                {personalInfo.name}
              </span>
              <span style={{ fontSize: '0.75rem', color: '#64748B', fontFamily: 'var(--font-mono)' }}>
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav 
            aria-label="Main Navigation"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.92rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? '#2563EB' : '#64748B',
                    position: 'relative',
                    padding: '0.4rem 0',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#172554';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#64748B';
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: '#2563EB',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA & GitHub Quick Links */}
          <div 
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.85rem',
            }}
            className="desktop-nav"
          >
            <a
              href={personalInfo.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: '0.55rem 0.95rem', fontSize: '0.85rem' }}
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>

            <a
              href="#contact"
              className="btn btn-primary"
              style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              color: '#172554',
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)',
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: 'var(--header-height)',
              left: 0,
              right: 0,
              background: '#FFFFFF',
              borderBottom: '1px solid #E2E8F0',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.1)',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#172554',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid #F1F5F9',
                }}
              >
                {link.name}
              </a>
            ))}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <a
                href={personalInfo.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ flex: 1, padding: '0.65rem' }}
              >
                <GithubIcon size={16} /> GitHub
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary"
                style={{ flex: 1, padding: '0.65rem' }}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      <style>{`
        @media (min-width: 820px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
