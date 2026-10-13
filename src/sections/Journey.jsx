import React from 'react';
import { Milestone, Compass, Sparkles, CheckCircle2, Clock } from 'lucide-react';
import { journeyData, currentExplorations } from '../data/portfolio';

export default function Journey() {
  return (
    <section id="journey" className="section-wrapper" style={{ background: 'rgba(7, 11, 30, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Milestone size={14} />
            <span>Path & Milestones</span>
          </div>
          <h2 className="section-title">
            My Developer <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            A transparent timeline of academic training, programming milestones, and active goals. Real learning steps without exaggerated credentials.
          </p>
        </div>

        {/* Timeline Layout */}
        <div style={{ position: 'relative', maxWidth: '850px', margin: '0 auto 4rem auto' }}>
          {/* Vertical Glowing Line */}
          <div
            style={{
              position: 'absolute',
              top: '15px',
              bottom: '15px',
              left: '20px',
              width: '2px',
              background: 'linear-gradient(to bottom, #00f0ff, #3b82f6, #a855f7)',
              boxShadow: '0 0 10px rgba(0, 240, 255, 0.3)',
            }}
            className="timeline-line"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {journeyData.map((item, idx) => {
              const isCurrent = item.status === 'Current Focus';
              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '2rem',
                    position: 'relative',
                  }}
                  className="timeline-item"
                >
                  {/* Milestone Node */}
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: isCurrent ? '#00f0ff' : 'var(--bg-surface)',
                      border: isCurrent ? '4px solid #0b112c' : '2px solid rgba(0, 240, 255, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isCurrent ? '#040817' : 'var(--cyan-accent)',
                      zIndex: 2,
                      flexShrink: 0,
                      boxShadow: isCurrent ? '0 0 20px rgba(0, 240, 255, 0.8)' : 'none',
                    }}
                  >
                    {item.status === 'Completed' ? (
                      <CheckCircle2 size={18} />
                    ) : (
                      <Clock size={18} />
                    )}
                  </div>

                  {/* Card Content */}
                  <div
                    style={{
                      flex: 1,
                      background: 'var(--bg-glass-card)',
                      backdropFilter: 'blur(16px)',
                      borderRadius: 'var(--radius-lg)',
                      border: isCurrent ? '1px solid rgba(0, 240, 255, 0.4)' : '1px solid var(--border-subtle)',
                      padding: '1.75rem',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-accent)', textTransform: 'uppercase' }}>
                        {item.phase} • {item.period}
                      </span>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '99px',
                          background: isCurrent ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                          color: isCurrent ? 'var(--cyan-accent)' : 'var(--text-muted)',
                          border: isCurrent ? '1px solid rgba(0, 240, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                      >
                        {item.status}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      {item.title}
                    </h3>

                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                      {item.place}
                    </p>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Currently Exploring Module */}
        <div
          style={{
            background: 'var(--bg-glass-card)',
            backdropFilter: 'blur(16px)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)',
            padding: '2.5rem',
            maxWidth: '850px',
            margin: '0 auto',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(139, 92, 246, 0.15)',
                color: 'var(--violet-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Compass size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Currently Exploring & Researching
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Concepts and modern software patterns actively being investigated outside syllabus hours.
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {currentExplorations.map((exp, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(5, 8, 20, 0.6)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--cyan-accent)', marginBottom: '0.5rem' }}>
                  <Sparkles size={15} />
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {exp.title}
                  </h4>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
