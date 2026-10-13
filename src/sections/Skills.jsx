import React from 'react';
import { 
  Coffee, 
  Terminal, 
  Cpu, 
  Code2, 
  Palette, 
  Database, 
  FileCode, 
  GitBranch, 
  Layers, 
  Wrench,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { skillsData } from '../data/portfolio';

// Icon mapping dictionary
const iconMap = {
  Coffee: Coffee,
  Terminal: Terminal,
  Cpu: Cpu,
  Code2: Code2,
  Palette: Palette,
  Database: Database,
  FileCode: FileCode,
  GitBranch: GitBranch,
  Layers: Layers,
};

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper" style={{ background: 'rgba(7, 11, 30, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Wrench size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Engineering Tools</span>
          </h2>
          <p className="section-subtitle">
            Categorized strictly by actual working competencies and academic foundations. No inflated percentages or simulated scores.
          </p>
        </div>

        {/* Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {skillsData.categories.map((cat) => {
            const isLearning = cat.id === 'currently-learning';
            return (
              <div
                key={cat.id}
                style={{
                  background: isLearning ? 'rgba(16, 25, 61, 0.5)' : 'var(--bg-glass-card)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  borderRadius: 'var(--radius-lg)',
                  border: isLearning 
                    ? '1px dashed rgba(139, 92, 246, 0.35)' 
                    : '1px solid var(--border-subtle)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  boxShadow: 'var(--shadow-sm)',
                }}
                className="skill-category-card"
              >
                {/* Category Header */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: isLearning ? '#c084fc' : 'var(--text-primary)',
                      }}
                    >
                      {cat.title}
                    </h3>
                    {isLearning && (
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '99px',
                          background: 'rgba(139, 92, 246, 0.15)',
                          color: '#c084fc',
                          border: '1px solid rgba(139, 92, 246, 0.3)',
                        }}
                      >
                        In Progress
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {cat.description}
                  </p>
                </div>

                {/* Skill List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: 'auto' }}>
                  {cat.skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || Code2;
                    return (
                      <div
                        key={skill.name}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.85rem 1rem',
                          borderRadius: 'var(--radius-md)',
                          background: 'rgba(5, 8, 20, 0.6)',
                          border: '1px solid rgba(255, 255, 255, 0.04)',
                          transition: 'all 0.2s ease',
                        }}
                        className="skill-pill"
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                          <div
                            style={{
                              width: '36px',
                              height: '36px',
                              borderRadius: '8px',
                              background: isLearning ? 'rgba(139, 92, 246, 0.12)' : 'rgba(0, 240, 255, 0.1)',
                              color: isLearning ? '#c084fc' : 'var(--cyan-accent)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <IconComponent size={18} />
                          </div>
                          <div>
                            <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)', display: 'block' }}>
                              {skill.name}
                            </span>
                            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                              {skill.level}
                            </span>
                          </div>
                        </div>

                        <div style={{ color: isLearning ? '#a855f7' : 'var(--cyan-accent)', opacity: 0.8 }}>
                          {isLearning ? <Sparkles size={16} /> : <CheckCircle2 size={16} />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .skill-category-card:hover {
          transform: translateY(-3px);
          border-color: rgba(0, 240, 255, 0.35);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 240, 255, 0.06);
        }
        .skill-pill:hover {
          background: rgba(16, 25, 61, 0.8);
          border-color: rgba(0, 240, 255, 0.2);
        }
      `}</style>
    </section>
  );
}
