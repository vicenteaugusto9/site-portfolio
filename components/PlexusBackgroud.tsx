"use client";
/**
 * Este componente cria um fundo animado com partículas conectadas por linhas,
 *  usando canvas e React. Ele é responsivo, ajustando o número de partículas com base na largura da tela
 *  para garantir uma boa performance em dispositivos móveis.
 */
import { useEffect, useRef } from "react";

export function PlexusBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W: number, H: number;
    let mouse = { x: -9999, y: -9999 };
    const particles: any[] = [];
    const PARTICLE_COUNT = 190;
    const MAX_DIST = 220;
    const MOUSE_DIST = 200;

   const resize = () => {
  if (canvas.parentElement) {
    W = canvas.width = canvas.parentElement.clientWidth;
    H = canvas.height = canvas.parentElement.clientHeight;
    
    // Ajuste dinâmico de partículas
    // Se a largura (W) for menor que 768px (mobile/tablet), usamos menos pontos
    const isMobile = W < 768; 
    const targetCount = isMobile ? 40 : 190; // 40 no mobile fica bem mais limpo

    // Se o número de partículas mudar, limpamos e reiniciamos
    if (particles.length !== targetCount) {
      particles.length = 0;
      for (let i = 0; i < targetCount; i++) {
        particles.push(new Particle());
      }
    }
  }
};

    class Particle {
      x: number = 0; y: number = 0; vx: number = 0; vy: number = 0;
      r: number = 0; alpha: number = 0;

      constructor() { this.reset(true); }

      reset(init = false) {
        this.x = Math.random() * W;
        this.y = init ? Math.random() * H : (Math.random() > 0.5 ? -10 : H + 10);
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.r = Math.random() * 2 + 1;
        this.alpha = Math.random() * 0.6 + 0.2;
      }

      update() {
        this.x += this.vx; this.y += this.vy;
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_DIST) {
          const force = (MOUSE_DIST - dist) / MOUSE_DIST;
          this.x += (dx / dist) * force * 2.5;
          this.y += (dy / dist) * force * 2.5;
        }
        if (this.x < -20) this.x = W + 20;
        if (this.x > W + 20) this.x = -20;
        if (this.y < -20) this.y = H + 20;
        if (this.y > H + 20) this.y = -20;
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(145,129,244,${this.alpha})`; // Cor roxo lavanda
        ctx!.fill();
      }
    }

    const init = () => {
      resize();
      for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());
    };

    const isMobileScreen = () => W < 768;

    const drawLines = () => {
      if (isMobileScreen()) return;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const opacity = (1 - dist / MAX_DIST) * 0.35;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.strokeStyle = `rgba(162,133,255,${opacity})`;
            ctx!.lineWidth = 0.8;
            ctx!.stroke();
          }
        }
      }
    };

    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => { p.update(); p.draw(); });
      drawLines();
      requestAnimationFrame(loop);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener("resize", resize);
    canvas.parentElement?.addEventListener("mousemove", onMouseMove);
    
    init();
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.parentElement?.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.9 }} // Ajuste a intensidade aqui
    />
  );
}