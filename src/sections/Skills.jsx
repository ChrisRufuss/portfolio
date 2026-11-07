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
    <section id="skills" className="section-wrapper" style={{ background: '#F1F5F9' }}>
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
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: isLearning ? '1px dashed #BFDBFE' : '1px solid #E2E8F0',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'all 0.25s ease',
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
                        color: '#172554',
                      }}
                    >
                      {cat.title}
                    </h3>
                    {isLearning && (
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 600,
                          padding: '0.2rem 0.65rem',
                          borderRadius: '99px',
                          background: '#EFF6FF',
                          color: '#2563EB',
                          border: '1px solid #BFDBFE',
                        }}
                      >
                        In Progress
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.5 }}>
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
                          background: '#F8FAFC',
                          border: '1px solid #E2E8F0',
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
                              background: '#EFF6FF',
                              color: '#2563EB',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <IconComponent size={18} />
                          </div>
                          <div>
                            <span style={{ fontWeight: 600, fontSize: '0.95rem', color: '#172554', display: 'block' }}>
                              {skill.name}
                            </span>
                            <span style={{ fontSize: '0.78rem', color: '#64748B' }}>
                              {skill.level}
                            </span>
                          </div>
                        </div>

                        <div style={{ color: '#2563EB' }}>
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
          transform: translateY(-2px);
          border-color: #CBD5E1;
          box-shadow: 0 10px 20px -3px rgba(15, 23, 42, 0.08);
        }
        .skill-pill:hover {
          background: #EFF6FF;
          border-color: #BFDBFE;
        }
      `}</style>
    </section>
  );
}
