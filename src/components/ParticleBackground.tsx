import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0;
    const particles: Particle[] = [];

    function resize() {
      w = canvas!.width = window.innerWidth;
      h = canvas!.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    const COUNT = 60;
    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 2 + 0.5,
      });
    }

    let animId: number;

    function draw() {
      ctx!.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(108, 92, 231, 0.25)";
        ctx!.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(108, 92, 231, ${0.08 * (1 - dist / 140)})`;
            ctx!.lineWidth = 1;
            ctx!.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
