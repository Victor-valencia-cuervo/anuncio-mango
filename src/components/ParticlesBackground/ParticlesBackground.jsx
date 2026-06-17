import { useEffect, useRef } from 'react';
import styles from './ParticlesBackground.module.css';

const COLORS = ['#ff7a1a', '#ffb627', '#ffd166', '#ff3d2e'];

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let width = 0;
    let height = 0;
    let particles = [];
    let animationId;

    const createParticle = () => ({
      x: Math.random() * width,
      y: height + Math.random() * 100,
      radius: Math.random() * 2.2 + 0.6,
      speed: Math.random() * 0.55 + 0.15,
      drift: (Math.random() - 0.5) * 0.4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      opacity: Math.random() * 0.45 + 0.12,
      flicker: Math.random() * 0.02 + 0.004,
    });

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    resize();
    const count = window.innerWidth < 768 ? 26 : 55;
    particles = Array.from({ length: count }, createParticle);

    window.addEventListener('resize', resize);

    if (prefersReduced) {
      // Static, motionless frame for reduced-motion preference.
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });
      return () => window.removeEventListener('resize', resize);
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.y -= p.speed;
        p.x += p.drift;
        p.opacity += (Math.random() - 0.5) * p.flicker;
        p.opacity = Math.max(0.08, Math.min(0.6, p.opacity));

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
