import { useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion.js';

const COLORS = ['#3B82F6', '#6366F1', '#8B5CF6', '#38BDF8', '#D946EF'];

/**
 * Drives the hero's mouse-reactive particle constellation on a canvas.
 * All imperative canvas/RAF logic is contained here so the Hero component
 * stays declarative. Pauses when the tab is hidden; paints once if motion
 * is reduced.
 */
export function useOrbitalField(canvasRef) {
  const reduced = useReducedMotion();

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    let W, H, dpr, nodes = [], raf, visible = true;
    const mouse = { x: -999, y: -999 };

    const build = () => {
      const count = Math.min(72, Math.floor((W * H) / 16000));
      nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          r: Math.random() * 1.8 + 0.8,
          c: COLORS[i % COLORS.length],
        });
      }
      // central "atom" cluster echoing the logo
      const cx = W * 0.74, cy = H * 0.46;
      for (let k = 0; k < 3; k++) {
        const ang = k * 2.09, rad = 58;
        nodes.push({
          x: cx + Math.cos(ang) * rad,
          y: cy + Math.sin(ang) * rad,
          vx: 0, vy: 0, r: 2.4, c: COLORS[k],
          orbit: { cx, cy, rad, ang, sp: 0.004 + k * 0.0015 },
        });
      }
    };

    const size = () => {
      dpr = Math.min(devicePixelRatio || 1, 2);
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    };

    const frame = () => {
      ctx.clearRect(0, 0, W, H);
      for (const n of nodes) {
        if (n.orbit) {
          n.orbit.ang += n.orbit.sp;
          n.x = n.orbit.cx + Math.cos(n.orbit.ang) * n.orbit.rad;
          n.y = n.orbit.cy + Math.sin(n.orbit.ang) * n.orbit.rad * 0.5;
        } else {
          n.x += n.vx; n.y += n.vy;
          if (n.x < 0 || n.x > W) n.vx *= -1;
          if (n.y < 0 || n.y > H) n.vy *= -1;
          const dx = n.x - mouse.x, dy = n.y - mouse.y, d = Math.hypot(dx, dy);
          if (d < 120) { n.x += (dx / d) * 1.4; n.y += (dy / d) * 1.4; }
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 128) {
            ctx.strokeStyle = a.c;
            ctx.globalAlpha = (1 - d / 128) * 0.22;
            ctx.lineWidth = 0.7;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      for (const n of nodes) {
        ctx.fillStyle = n.c;
        ctx.globalAlpha = n.orbit ? 0.95 : 0.7;
        ctx.shadowBlur = n.orbit ? 14 : 6;
        ctx.shadowColor = n.c;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, 7); ctx.fill();
      }
      ctx.shadowBlur = 0; ctx.globalAlpha = 1;
      if (visible) raf = requestAnimationFrame(frame);
    };

    const onMouseMove = (e) => {
      const r = cv.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onMouseOut = () => { mouse.x = mouse.y = -999; };
    const onVisibility = () => {
      visible = !document.hidden;
      if (visible) raf = requestAnimationFrame(frame);
      else cancelAnimationFrame(raf);
    };

    size();
    window.addEventListener('resize', size);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseout', onMouseOut);
    document.addEventListener('visibilitychange', onVisibility);

    if (reduced) {
      ctx.clearRect(0, 0, W, H);
      for (const n of nodes) {
        ctx.fillStyle = n.c; ctx.globalAlpha = 0.6;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, 7); ctx.fill();
      }
    } else {
      frame();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', size);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [reduced]);
}
