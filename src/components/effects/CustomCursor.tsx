import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Nonaktifkan jika di touch device
    if (window.matchMedia('(hover: none)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animId: number;
    let isVisible = false;
    let isHovering = false;
    let isClicking = false;

    const show = () => {
      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }
    };

    const hide = () => {
      isVisible = false;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    // Update dot INSTAN saat mouse bergerak tanpa menunggu next frame
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) show();

      // GPU-accelerated instant positioning untuk dot (0ms delay)
      const dotScale = isClicking ? 'scale(0.6)' : isHovering ? 'scale(1.25)' : 'scale(1)';
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) ${dotScale}`;
    };

    const onMouseDown = () => {
      isClicking = true;
      const dotScale = 'scale(0.6)';
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) ${dotScale}`;
      ring.style.borderColor = '#38bdf8';
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(0.85)`;
    };

    const onMouseUp = () => {
      isClicking = false;
      const dotScale = isHovering ? 'scale(1.25)' : 'scale(1)';
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) ${dotScale}`;
      ring.style.borderColor = isHovering ? '#2c67ed' : 'rgba(44, 103, 237, 0.7)';
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(1)`;
    };

    const onHoverEnter = () => {
      isHovering = true;
      dot.style.width = '12px';
      dot.style.height = '12px';
      dot.style.background = '#ffffff';
      dot.style.boxShadow = '0 0 16px rgba(56, 189, 248, 1)';
      ring.style.width = '50px';
      ring.style.height = '50px';
      ring.style.borderColor = '#2c67ed';
      ring.style.boxShadow = '0 0 24px rgba(44, 103, 237, 0.5)';
      const dotScale = isClicking ? 'scale(0.6)' : 'scale(1.25)';
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) ${dotScale}`;
    };

    const onHoverLeave = () => {
      isHovering = false;
      dot.style.width = '8px';
      dot.style.height = '8px';
      dot.style.background = '#38bdf8';
      dot.style.boxShadow = '0 0 8px rgba(56, 189, 248, 0.8)';
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'rgba(44, 103, 237, 0.7)';
      ring.style.boxShadow = 'none';
      const dotScale = isClicking ? 'scale(0.6)' : 'scale(1)';
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) ${dotScale}`;
    };

    // Smooth animation loop khusus untuk Ring (dengan GPU transform)
    const animate = () => {
      // Lerp responsif (0.28) membuat ring mengikuti sangat mulus tanpa tertinggal jauh
      ringX += (mouseX - ringX) * 0.28;
      ringY += (mouseY - ringY) * 0.28;

      const ringScale = isClicking ? 'scale(0.85)' : 'scale(1)';
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) ${ringScale}`;

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    // Sembunyikan default cursor browser di semua elemen
    const styleEl = document.createElement('style');
    styleEl.id = 'cursor-none-override';
    styleEl.textContent = `
      *, *::before, *::after {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleEl);

    // Event listener untuk interactive elements
    const SELECTORS = 'a, button, input, textarea, select, [role="button"], label, [tabindex]';
    const attachListeners = (root: Document | Element = document) => {
      root.querySelectorAll(SELECTORS).forEach((el) => {
        el.removeEventListener('mouseenter', onHoverEnter);
        el.removeEventListener('mouseleave', onHoverLeave);
        el.addEventListener('mouseenter', onHoverEnter);
        el.addEventListener('mouseleave', onHoverLeave);
      });
    };

    attachListeners();

    const observer = new MutationObserver(() => attachListeners());
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', hide);
    document.addEventListener('mouseenter', show);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', hide);
      document.removeEventListener('mouseenter', show);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      observer.disconnect();
      document.getElementById('cursor-none-override')?.remove();
    };
  }, []);

  return (
    <>
      {/* Dot: Instant 0ms hardware GPU translate */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          background: '#38bdf8',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: 0,
          boxShadow: '0 0 8px rgba(56, 189, 248, 0.8)',
          mixBlendMode: 'screen',
          willChange: 'transform',
          // HANYA animasikan size dan warna, JANGAN posisi transform agar 100% responsif tanpa delay!
          transition: 'width 0.15s ease, height 0.15s ease, background 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease',
        }}
      />

      {/* Ring: Smooth lerp GPU translate */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '36px',
          height: '36px',
          border: '1.5px solid rgba(44, 103, 237, 0.7)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          opacity: 0,
          willChange: 'transform',
          // HANYA animasikan size dan border/glow, JANGAN posisi transform agar mulus di rAF!
          transition: 'width 0.2s cubic-bezier(0.16, 1, 0.3, 1), height 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease, box-shadow 0.2s ease, opacity 0.15s ease',
        }}
      />
    </>
  );
};
