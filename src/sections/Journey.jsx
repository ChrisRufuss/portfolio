import React from 'react';
import { Milestone, Compass, Sparkles, CheckCircle2, Clock } from 'lucide-react';
import { journeyData, currentExplorations } from '../data/portfolio';

export default function Journey() {
  return (
    <section id="journey" className="section-wrapper" style={{ background: '#F1F5F9' }}>
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
          {/* Vertical Clean Line */}
          <div
            style={{
              position: 'absolute',
              top: '15px',
              bottom: '15px',
              left: '20px',
              width: '2px',
              background: '#CBD5E1',
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
                      background: isCurrent ? '#2563EB' : '#FFFFFF',
                      border: isCurrent ? '4px solid #EFF6FF' : '2px solid #CBD5E1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isCurrent ? '#FFFFFF' : '#64748B',
                      zIndex: 2,
                      flexShrink: 0,
                      boxShadow: isCurrent ? '0 0 0 2px #2563EB' : 'var(--shadow-sm)',
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
                      background: '#FFFFFF',
                      borderRadius: 'var(--radius-lg)',
                      border: isCurrent ? '1px solid #BFDBFE' : '1px solid #E2E8F0',
                      padding: '1.75rem',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#2563EB', fontWeight: 600, textTransform: 'uppercase' }}>
                        {item.phase} • {item.period}
                      </span>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 600,
                          padding: '0.2rem 0.65rem',
                          borderRadius: '99px',
                          background: isCurrent ? '#EFF6FF' : '#F1F5F9',
                          color: isCurrent ? '#2563EB' : '#64748B',
                          border: isCurrent ? '1px solid #BFDBFE' : '1px solid #E2E8F0',
                        }}
                      >
                        {item.status}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', marginBottom: '0.25rem' }}>
                      {item.title}
                    </h3>

                    <p style={{ fontSize: '0.88rem', color: '#64748B', marginBottom: '0.75rem' }}>
                      {item.place}
                    </p>

                    <p style={{ color: '#64748B', fontSize: '0.94rem', lineHeight: 1.6 }}>
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
            background: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid #E2E8F0',
            padding: '2.5rem',
            maxWidth: '850px',
            margin: '0 auto',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: '#EFF6FF',
                color: '#2563EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Compass size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554' }}>
                Currently Exploring & Researching
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#64748B' }}>
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
                  background: '#F8FAFC',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  border: '1px solid #E2E8F0',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2563EB', marginBottom: '0.5rem' }}>
                  <Sparkles size={15} />
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#172554' }}>
                    {exp.title}
                  </h4>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.5 }}>
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
