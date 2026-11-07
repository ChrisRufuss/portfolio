import React, { useEffect, useRef } from 'react';

/**
 * Interactive Developer Workspace Visual:
 * Clean, lightweight canvas with orbital nodes and an elegant code editor overlay.
 * High performance, respects device pixel ratio and prefers-reduced-motion.
 */
export default function CyberCanvasVisual() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight || 450);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight || 450;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes configuration with subtle blue & slate palette
    const particleCount = width < 500 ? 22 : 38;
    const particles = [];
    const colors = ['#2563EB', '#3B82F6', '#60A5FA', '#94A3B8'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 1.8 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI,
      });
    }

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // 1. Draw subtle technical orbital rings
      const ringRadius = Math.min(width, height) * 0.36;
      
      ctx.save();
      ctx.translate(centerX, centerY);
      
      // Outer subtle orbit
      ctx.beginPath();
      ctx.arc(0, 0, ringRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.1)';
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 10]);
      ctx.stroke();

      // Inner tech orbit
      ctx.beginPath();
      ctx.arc(0, 0, ringRadius * 0.65, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.stroke();

      // Rotating subtle decorative ticks
      if (!prefersReducedMotion) {
        angle += 0.004;
      }
      ctx.rotate(angle);
      for (let i = 0; i < 8; i++) {
        const theta = (i * Math.PI * 2) / 8;
        const tx = Math.cos(theta) * ringRadius;
        const ty = Math.sin(theta) * ringRadius;
        ctx.fillStyle = i % 2 === 0 ? 'rgba(37, 99, 235, 0.4)' : 'rgba(148, 163, 184, 0.4)';
        ctx.beginPath();
        ctx.arc(tx, ty, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      // 2. Draw connecting lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 105) {
            const opacity = (1 - dist / 105) * 0.18;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // 3. Draw & update particles
      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.pulse += 0.03;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }

        const currentRadius = p.radius + Math.sin(p.pulse) * 0.4;

        // Clean node core
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '440px',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        border: '1px solid #E2E8F0',
        background: '#FFFFFF',
        boxShadow: 'var(--shadow-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      />

      {/* Code Panel Overlay floating centrally */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '88%',
          maxWidth: '430px',
          background: '#FFFFFF',
          borderRadius: '12px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)',
          overflow: 'hidden',
          fontFamily: 'var(--font-mono)',
        }}
      >
        {/* Terminal Window Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.65rem 1rem',
            background: '#F8FAFC',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444', display: 'inline-block' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B', display: 'inline-block' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
          </div>
          <span style={{ fontSize: '0.75rem', color: '#64748B', letterSpacing: '0.02em', fontWeight: 500 }}>
            rufus@dev-node:~/profile
          </span>
          <span style={{ fontSize: '0.72rem', color: '#2563EB', fontWeight: 600 }}>
            v2.0
          </span>
        </div>

        {/* Code Snippet Content */}
        <div
          style={{
            padding: '1.25rem',
            fontSize: '0.82rem',
            lineHeight: 1.75,
            color: '#1E293B',
            background: '#FFFFFF',
          }}
        >
          <div>
            <span style={{ color: '#2563EB', fontWeight: 600 }}>const</span>{' '}
            <span style={{ color: '#172554', fontWeight: 700 }}>developer</span> = &#123;
          </div>
          <div style={{ paddingLeft: '1.2rem' }}>
            <span style={{ color: '#64748B' }}>name:</span>{' '}
            <span style={{ color: '#0F766E' }}>"Chris Rufus"</span>,
          </div>
          <div style={{ paddingLeft: '1.2rem' }}>
            <span style={{ color: '#64748B' }}>education:</span>{' '}
            <span style={{ color: '#0F766E' }}>"B.Tech in IT (Year 2)"</span>,
          </div>
          <div style={{ paddingLeft: '1.2rem' }}>
            <span style={{ color: '#64748B' }}>institution:</span>{' '}
            <span style={{ color: '#0F766E' }}>"MKCE, Karur"</span>,
          </div>
          <div style={{ paddingLeft: '1.2rem' }}>
            <span style={{ color: '#64748B' }}>skills:</span> [
            <span style={{ color: '#2563EB' }}>"Java"</span>,{' '}
            <span style={{ color: '#2563EB' }}>"Python"</span>,{' '}
            <span style={{ color: '#2563EB' }}>"MySQL"</span>,{' '}
            <span style={{ color: '#2563EB' }}>"Web"</span>],
          </div>
          <div style={{ paddingLeft: '1.2rem' }}>
            <span style={{ color: '#64748B' }}>passion:</span>{' '}
            <span style={{ color: '#0F766E' }}>"Software Engineering & Problem Solving"</span>,
          </div>
          <div style={{ paddingLeft: '1.2rem' }}>
            <span style={{ color: '#64748B' }}>status:</span>{' '}
            <span style={{ color: '#16A34A', fontWeight: 600 }}>"Ready For Internships"</span>
          </div>
          <div>&#125;;</div>
          
          <div style={{ marginTop: '0.85rem', paddingTop: '0.85rem', borderTop: '1px solid #F1F5F9' }}>
            <span style={{ color: '#2563EB', fontWeight: 'bold' }}>&gt;</span>{' '}
            <span style={{ color: '#64748B' }}>buildPracticalSolutions();</span>
            <span className="blinking-cursor" style={{ marginLeft: '4px', color: '#2563EB', fontWeight: 'bold' }}>_</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .blinking-cursor {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
}
