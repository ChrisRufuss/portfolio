import React, { useEffect, useRef } from 'react';

/**
 * Interactive futuristic Canvas: orbital particle mesh with reactive cyber nodes
 * Lightweight, high performance, respects device pixel ratio and prefers-reduced-motion.
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

    // Particle nodes configuration
    const particleCount = width < 500 ? 25 : 45;
    const particles = [];
    const colors = ['#00f0ff', '#3b82f6', '#8b5cf6', '#ec4899'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI,
      });
    }

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // 1. Draw glowing concentric orbital rings
      const ringRadius = Math.min(width, height) * 0.35;
      
      ctx.save();
      ctx.translate(centerX, centerY);
      
      // Outer subtle orbit
      ctx.beginPath();
      ctx.arc(0, 0, ringRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.08)';
      ctx.lineWidth = 1;
      ctx.setLineDash([8, 12]);
      ctx.stroke();

      // Inner tech orbit
      ctx.beginPath();
      ctx.arc(0, 0, ringRadius * 0.65, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.12)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 6]);
      ctx.stroke();

      // Rotating decorative ticks
      if (!prefersReducedMotion) {
        angle += 0.005;
      }
      ctx.rotate(angle);
      for (let i = 0; i < 8; i++) {
        const theta = (i * Math.PI * 2) / 8;
        const tx = Math.cos(theta) * ringRadius;
        const ty = Math.sin(theta) * ringRadius;
        ctx.fillStyle = i % 2 === 0 ? 'rgba(0, 240, 255, 0.5)' : 'rgba(139, 92, 246, 0.5)';
        ctx.beginPath();
        ctx.arc(tx, ty, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      // 2. Draw connecting lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const opacity = (1 - dist / 110) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${opacity})`;
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

        const currentRadius = p.radius + Math.sin(p.pulse) * 0.5;

        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius * 2, 0, Math.PI * 2);
        ctx.fillStyle = p.color === '#00f0ff' ? 'rgba(0, 240, 255, 0.1)' : 'rgba(139, 92, 246, 0.1)';
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.8, currentRadius), 0, Math.PI * 2);
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
        border: '1px solid rgba(0, 240, 255, 0.18)',
        background: 'linear-gradient(145deg, rgba(11, 17, 44, 0.8) 0%, rgba(5, 8, 20, 0.95) 100%)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.6), inset 0 0 40px rgba(0, 240, 255, 0.04)',
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

      {/* Cyber Code Panel Overlay floating centrally */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '88%',
          maxWidth: '430px',
          background: 'rgba(9, 14, 38, 0.82)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: '14px',
          border: '1px solid rgba(0, 240, 255, 0.25)',
          boxShadow: '0 16px 40px rgba(0,0,0,0.7), 0 0 25px rgba(0, 240, 255, 0.12)',
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
            background: 'rgba(5, 8, 20, 0.9)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308', display: 'inline-block' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
            rufus@dev-node:~/profile
          </span>
          <span style={{ fontSize: '0.7rem', color: 'var(--cyan-accent)', opacity: 0.8 }}>
            v2.0
          </span>
        </div>

        {/* Code Snippet Content */}
        <div
          style={{
            padding: '1.2rem',
            fontSize: '0.82rem',
            lineHeight: 1.7,
            color: '#e2e8f0',
          }}
        >
          <div>
            <span style={{ color: '#a855f7' }}>const</span>{' '}
            <span style={{ color: '#38bdf8' }}>developer</span> = &#123;
          </div>
          <div style={{ paddingLeft: '1.2rem' }}>
            <span style={{ color: '#94a3b8' }}>name:</span>{' '}
            <span style={{ color: '#34d399' }}>"Chris Rufus"</span>,
          </div>
          <div style={{ paddingLeft: '1.2rem' }}>
            <span style={{ color: '#94a3b8' }}>education:</span>{' '}
            <span style={{ color: '#34d399' }}>"B.Tech in IT (Year 2)"</span>,
          </div>
          <div style={{ paddingLeft: '1.2rem' }}>
            <span style={{ color: '#94a3b8' }}>institution:</span>{' '}
            <span style={{ color: '#34d399' }}>"MKCE, Karur"</span>,
          </div>
          <div style={{ paddingLeft: '1.2rem' }}>
            <span style={{ color: '#94a3b8' }}>skills:</span> [
            <span style={{ color: '#f59e0b' }}>"Java"</span>,{' '}
            <span style={{ color: '#f59e0b' }}>"Python"</span>,{' '}
            <span style={{ color: '#f59e0b' }}>"MySQL"</span>,{' '}
            <span style={{ color: '#f59e0b' }}>"Web"</span>],
          </div>
          <div style={{ paddingLeft: '1.2rem' }}>
            <span style={{ color: '#94a3b8' }}>passion:</span>{' '}
            <span style={{ color: '#38bdf8' }}>"Software Engineering & Problem Solving"</span>,
          </div>
          <div style={{ paddingLeft: '1.2rem' }}>
            <span style={{ color: '#94a3b8' }}>status:</span>{' '}
            <span style={{ color: '#00f0ff', fontWeight: 600 }}>"Ready For Internships"</span>
          </div>
          <div>&#125;;</div>
          
          <div style={{ marginTop: '0.8rem', paddingTop: '0.8rem', borderTop: '1px dashed rgba(255,255,255,0.08)' }}>
            <span style={{ color: '#00f0ff' }}>&gt;</span>{' '}
            <span style={{ color: '#94a3b8' }}>buildPracticalSolutions();</span>
            <span className="blinking-cursor" style={{ marginLeft: '4px', color: '#00f0ff', fontWeight: 'bold' }}>_</span>
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
