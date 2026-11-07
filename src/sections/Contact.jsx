import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Phone } from 'lucide-react';
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
        particleCount: 30,
        spread: 55,
        origin: { y: 0.8 },
        colors: ['#2563EB', '#3B82F6', '#60A5FA', '#172554'],
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
        particleCount: 30,
        spread: 55,
        origin: { y: 0.8 },
        colors: ['#2563EB', '#3B82F6', '#60A5FA', '#172554'],
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
            background: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid #E2E8F0',
            boxShadow: 'var(--shadow-md)',
            padding: '3rem 2rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: '#EFF6FF',
              border: '1px solid #BFDBFE',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#2563EB',
              margin: '0 auto 1.5rem auto',
            }}
          >
            <Send size={26} />
          </div>

          <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#172554', marginBottom: '0.5rem' }}>
            Get In Touch Directly
          </h3>

          <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem auto' }}>
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
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: 'var(--radius-md)',
                padding: '0.85rem 1.15rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: '#EFF6FF',
                    color: '#2563EB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={18} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <span style={{ fontSize: '0.72rem', color: '#94A3B8', display: 'block', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                    Email Address
                  </span>
                  <a
                    href={`mailto:${personalInfo.contact.email}`}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.88rem',
                      color: '#172554',
                      fontWeight: 600,
                      display: 'block',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#2563EB')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#172554')}
                    title={personalInfo.contact.email}
                  >
                    {personalInfo.contact.email}
                  </a>
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
                    <Check size={13} style={{ color: '#059669' }} />
                    <span style={{ color: '#059669' }}>Copied!</span>
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
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: 'var(--radius-md)',
                padding: '0.85rem 1.15rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: '#EFF6FF',
                    color: '#2563EB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={18} />
                </div>
                <div>
                  <span style={{ fontSize: '0.72rem', color: '#94A3B8', display: 'block', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                    Phone / Call
                  </span>
                  <a
                    href={`tel:${personalInfo.contact.phoneRaw}`}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.92rem',
                      color: '#172554',
                      textDecoration: 'none',
                      fontWeight: 600,
                      display: 'block',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#2563EB')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#172554')}
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
                      <Check size={13} style={{ color: '#059669' }} />
                      <span style={{ color: '#059669' }}>Copied!</span>
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
            {/* Primary Working Mailto Button: Solid #2563EB, text #FFFFFF */}
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

            {/* LinkedIn Button: Only appears when configured! */}
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
