import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopiedEmail(true);
    
    // Subtle confetti burst on copy
    try {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#00f0ff', '#3b82f6', '#8b5cf6'],
      });
    } catch (e) {
      // Ignore if confetti fails
    }

    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.contact.phoneRaw || "9994450878");
    setCopiedPhone(true);
    
    try {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#00f0ff', '#3b82f6', '#8b5cf6'],
      });
    } catch (e) {
      // Ignore if confetti fails
    }

    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-badge" style={{ margin: '0 auto 0.85rem auto' }}>
            <Mail size={14} />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Whether you're looking for an enthusiastic engineering intern, want to discuss software ideas, or simply want to say hello—my inbox is always open.
          </p>
        </div>

        {/* Contact Interaction Card */}
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            background: 'linear-gradient(145deg, rgba(16, 25, 61, 0.75) 0%, rgba(9, 14, 38, 0.9) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 240, 255, 0.08)',
            padding: '3rem 2rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle top light bar */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '25%',
              right: '25%',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #00f0ff, transparent)',
            }}
          />

          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(0, 240, 255, 0.12)',
              border: '1px solid rgba(0, 240, 255, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--cyan-accent)',
              margin: '0 auto 1.5rem auto',
              boxShadow: '0 0 25px rgba(0, 240, 255, 0.2)',
            }}
          >
            <Send size={28} />
          </div>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            Get In Touch Directly
          </h3>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem auto' }}>
            Feel free to reach out directly via email or phone for internship roles, engineering collaborations, or inquiries.
          </p>

          {/* Contact Channels Grid (Email & Phone) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem',
              textAlign: 'left',
            }}
          >
            {/* Email Channel */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.85rem',
                background: 'rgba(5, 8, 20, 0.85)',
                border: '1px solid rgba(79, 140, 255, 0.3)',
                borderRadius: 'var(--radius-md)',
                padding: '0.85rem 1.15rem',
                boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.5)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(0, 240, 255, 0.1)',
                    color: 'var(--cyan-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={18} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                    Email Address
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.88rem',
                      color: 'var(--cyan-accent)',
                      display: 'block',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                    title={personalInfo.contact.email}
                  >
                    {personalInfo.contact.email}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="btn btn-secondary"
                style={{
                  padding: '0.45rem 0.75rem',
                  fontSize: '0.78rem',
                  gap: '0.35rem',
                  flexShrink: 0,
                }}
              >
                {copiedEmail ? (
                  <>
                    <Check size={13} style={{ color: '#34d399' }} />
                    <span style={{ color: '#34d399' }}>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone Channel */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.85rem',
                background: 'rgba(5, 8, 20, 0.85)',
                border: '1px solid rgba(79, 140, 255, 0.3)',
                borderRadius: 'var(--radius-md)',
                padding: '0.85rem 1.15rem',
                boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.5)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(59, 130, 246, 0.15)',
                    color: '#60a5fa',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={18} />
                </div>
                <div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                    Phone / Call
                  </span>
                  <a
                    href={`tel:${personalInfo.contact.phoneRaw}`}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.92rem',
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      fontWeight: 600,
                      display: 'block',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan-accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                  >
                    {personalInfo.contact.phone}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.4rem', flexShrink: 0 }}>
                <a
                  href={`tel:${personalInfo.contact.phoneRaw}`}
                  className="btn btn-secondary"
                  style={{
                    padding: '0.45rem 0.65rem',
                    fontSize: '0.78rem',
                  }}
                  aria-label="Call phone number"
                >
                  Call
                </a>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  aria-label="Copy phone number"
                  className="btn btn-secondary"
                  style={{
                    padding: '0.45rem 0.75rem',
                    fontSize: '0.78rem',
                    gap: '0.35rem',
                  }}
                >
                  {copiedPhone ? (
                    <>
                      <Check size={13} style={{ color: '#34d399' }} />
                      <span style={{ color: '#34d399' }}>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* External Action Links */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem',
              alignItems: 'center',
            }}
          >
            {/* Primary Working Mailto Button */}
            <a
              href={`mailto:${personalInfo.contact.email}?subject=Collaboration%20or%20Internship%20Inquiry%20-%20Chris%20Rufus`}
              className="btn btn-primary"
              style={{ minWidth: '180px' }}
            >
              <Mail size={18} />
              <span>Send An Email</span>
            </a>

            {/* GitHub Profile Button */}
            <a
              href={personalInfo.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ minWidth: '180px' }}
              aria-label="Chris Rufus GitHub Profile"
            >
              <GithubIcon size={18} />
              <span>GitHub Profile</span>
            </a>

            {/* Optional LinkedIn Button: Only appears when configured! */}
            {personalInfo.contact.linkedin.enabled && (
              <a
                href={personalInfo.contact.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ minWidth: '180px' }}
                aria-label="Chris Rufus LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
