import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  color: string;
  layer: number; // 1=far, 2=mid, 3=near (parallax depth)
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  active: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

export const StarfieldBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse parallax
    let mouseX = width / 2, mouseY = height / 2;
    let targetMouseX = width / 2, targetMouseY = height / 2;

    // Scroll parallax
    let scrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
      initParticles();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // Star colors
    const starColors = ['#ffffff', '#e0f2fe', '#93c5fd', '#60a5fa', '#2c67ed', '#c084fc', '#38bdf8', '#ddd6fe'];

    let stars: Star[] = [];
    const numStars = Math.min(380, Math.floor((width * height) / 4000));

    const initStars = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        const layer = i % 3 + 1;
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: layer === 3 ? Math.random() * 2 + 1 : Math.random() * 1.5 + 0.3,
          baseAlpha: Math.random() * 0.7 + 0.15,
          alpha: Math.random() * 0.7 + 0.15,
          twinkleSpeed: Math.random() * 0.018 + 0.004,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          layer,
        });
      }
    };

    // Floating dust particles
    let particles: Particle[] = [];
    const dustColors = ['rgba(44,103,237,0.5)', 'rgba(56,189,248,0.4)', 'rgba(129,140,248,0.4)', 'rgba(192,132,252,0.3)'];

    const initParticles = () => {
      particles = [];
      const count = Math.min(40, Math.floor((width * height) / 35000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.1,
          size: Math.random() * 3 + 1,
          alpha: Math.random() * 0.35 + 0.05,
          color: dustColors[Math.floor(Math.random() * dustColors.length)],
        });
      }
    };

    initStars();
    initParticles();

    // Meteors
    const meteors: Meteor[] = [];
    const createMeteor = () => {
      if (meteors.length < 4 && Math.random() < 0.012) {
        meteors.push({
          x: Math.random() * width * 1.3,
          y: -60,
          length: Math.random() * 100 + 60,
          speed: Math.random() * 8 + 7,
          angle: Math.PI / 4 + (Math.random() * 0.25 - 0.12),
          alpha: 1,
          active: true,
        });
      }
    };

    const render = () => {
      // Smooth mouse easing
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const mx = (mouseX - width / 2) * 0.018;
      const my = (mouseY - height / 2) * 0.018;
      const scrollOffset = scrollY * 0.08;

      ctx.clearRect(0, 0, width, height);

      // -- Nebula clouds --
      const drawNebula = (cx: number, cy: number, r: number, color: string) => {
        const g = ctx.createRadialGradient(cx, cy, 10, cx, cy, r);
        g.addColorStop(0, color);
        g.addColorStop(1, 'rgba(3,7,18,0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, width, height);
      };

      drawNebula(
        width * 0.25 + mx * 4,
        height * 0.18 + my * 4 - scrollOffset * 0.3,
        width * 0.4,
        'rgba(44,103,237,0.1)'
      );
      drawNebula(
        width * 0.78 - mx * 3,
        height * 0.65 - my * 3 + scrollOffset * 0.2,
        width * 0.42,
        'rgba(99,102,241,0.08)'
      );
      drawNebula(
        width * 0.5 + mx * 1.5,
        height * 0.5 + my * 1.5 - scrollOffset * 0.1,
        width * 0.3,
        'rgba(56,189,248,0.05)'
      );

      // -- Stars (parallax by layer) --
      for (const star of stars) {
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 1 || star.alpha < star.baseAlpha * 0.25) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        const depthFactor = star.layer * 0.007;
        const px = star.x + mx * star.layer * 1.2;
        const py = star.y + my * star.layer * 1.2 - scrollOffset * depthFactor;
        const currentAlpha = Math.max(0.05, Math.min(1, star.alpha));

        // Soft outer glow for bright/larger stars without expensive shadowBlur
        if (star.size > 1.4) {
          ctx.globalAlpha = currentAlpha * 0.3;
          ctx.fillStyle = star.color;
          ctx.beginPath();
          ctx.arc(px, py, star.size * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }

        // Core star
        ctx.globalAlpha = currentAlpha;
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(px, py, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // -- Floating dust particles --
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x + mx * 2, p.y + my * 2, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // -- Meteors --
      createMeteor();
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        if (!m.active) { meteors.splice(i, 1); continue; }

        const vx = Math.cos(m.angle) * m.speed;
        const vy = Math.sin(m.angle) * m.speed;
        m.x += vx;
        m.y += vy;
        m.alpha -= 0.01;

        if (m.y > height + 120 || m.x > width + 120 || m.alpha <= 0) {
          m.active = false;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, m.alpha);
        const mg = ctx.createLinearGradient(
          m.x, m.y,
          m.x - Math.cos(m.angle) * m.length,
          m.y - Math.sin(m.angle) * m.length
        );
        mg.addColorStop(0, 'rgba(255,255,255,1)');
        mg.addColorStop(0.25, 'rgba(56,189,248,0.9)');
        mg.addColorStop(0.6, 'rgba(44,103,237,0.4)');
        mg.addColorStop(1, 'rgba(44,103,237,0)');
        ctx.strokeStyle = mg;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - Math.cos(m.angle) * m.length, m.y - Math.sin(m.angle) * m.length);
        ctx.stroke();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 1 }}
    />
  );
};
