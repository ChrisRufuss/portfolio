import React from 'react';
import { GraduationCap, MapPin, Target, Compass, BookOpen, Rocket } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Compass size={14} />
            <span>Profile & Direction</span>
          </div>
          <h2 className="section-title">
            Passionate About Turning Concepts Into <span className="gradient-text">Working Code</span>
          </h2>
          <p className="section-subtitle">
            A second-year engineering student combining structured programming foundations with real-world application experiments.
          </p>
        </div>

        {/* Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Narrative Column */}
          <div
            style={{
              background: 'var(--bg-glass-card)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              padding: '2.5rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <h3
              style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                marginBottom: '1.25rem',
                color: 'var(--text-primary)',
              }}
            >
              Engineering Student & Software Builder
            </h3>

            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.02rem',
                lineHeight: 1.8,
                marginBottom: '1.25rem',
              }}
            >
              I am currently pursuing my <strong>B.Tech in Information Technology</strong> at <strong>M. Kumaraswamy College of Engineering</strong> in Karur, Tamil Nadu. As a second-year student, my daily routine centers on solidifying core computer science principles—data handling, object-oriented concepts, and algorithmic reasoning.
            </p>

            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.02rem',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
              }}
            >
              Rather than staying purely theoretical, I actively build functional projects like the <em>Memory Password Game</em> and the <em>SmartBank</em> application. My technical interests span <strong>software engineering</strong>, <strong>intelligent systems & AI tools</strong>, <strong>modern web interfaces</strong>, and <strong>practical software entrepreneurship</strong>—building tools that streamline tasks for real users.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                  Current Level
                </span>
                <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  2nd Year Undergraduate
                </p>
              </div>

              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                  Active Focus
                </span>
                <p style={{ fontWeight: 600, color: 'var(--cyan-accent)', marginTop: '0.2rem' }}>
                  Software Development & Projects
                </p>
              </div>
            </div>
          </div>

          {/* Structured Info Card Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Education Card */}
            <div
              style={{
                background: 'var(--bg-glass-card)',
                backdropFilter: 'blur(16px)',
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  background: 'linear-gradient(to bottom, #00f0ff, #3b82f6)',
                }}
              />

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    padding: '0.6rem',
                    borderRadius: '10px',
                    background: 'rgba(0, 240, 255, 0.1)',
                    color: 'var(--cyan-accent)',
                  }}
                >
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                    {personalInfo.education.degree}
                  </h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {personalInfo.education.period}
                  </span>
                </div>
              </div>

              <p style={{ fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                {personalInfo.education.institution}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <MapPin size={15} />
                <span>{personalInfo.education.location}</span>
              </div>
            </div>

            {/* Strategic Goals Panel */}
            <div
              style={{
                background: 'var(--bg-glass-card)',
                backdropFilter: 'blur(16px)',
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    padding: '0.6rem',
                    borderRadius: '10px',
                    background: 'rgba(139, 92, 246, 0.15)',
                    color: 'var(--violet-accent)',
                  }}
                >
                  <Target size={22} />
                </div>
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                  Core Objectives & Direction
                </h4>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {personalInfo.careerGoals.map((goal, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      fontSize: '0.92rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      style={{
                        color: 'var(--cyan-accent)',
                        marginTop: '0.2rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                      }}
                    >
                      0{idx + 1}.
                    </span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
