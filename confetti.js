// ==========================================
// NextSem – confetti.js
// Lightweight canvas-based confetti celebration
// ==========================================

(function() {
  let canvas = null;
  let ctx = null;
  let animationFrameId = null;
  let particles = [];

  const colors = [
    '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
    '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50',
    '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800',
    '#ff5722', '#68a063', '#00d4aa', '#7c3aed'
  ];

  function initCanvas() {
    canvas = document.getElementById('confetti-canvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'confetti-canvas';
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '99999';
      document.body.appendChild(canvas);
    }
    ctx = canvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
  }

  function resizeCanvas() {
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }

  class ConfettiParticle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 8 + 4;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.speedX = Math.random() * 12 - 6; // side velocity
      this.speedY = Math.random() * -16 - 8; // initial upward velocity
      this.gravity = 0.45;
      this.rotation = Math.random() * 360;
      this.rotationSpeed = Math.random() * 12 - 6;
      this.opacity = 1.0;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.speedY += this.gravity;
      this.rotation += this.rotationSpeed;
      if (this.speedY > 0) {
        this.opacity -= 0.015;
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
      ctx.restore();
    }
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.update();
      p.draw();
      if (p.opacity <= 0 || p.y > canvas.height) {
        particles.splice(i, 1);
      }
    }

    if (particles.length > 0) {
      animationFrameId = requestAnimationFrame(tick);
    } else {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  }

  window.triggerConfetti = function() {
    if (!canvas) initCanvas();
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Left burst
    for (let i = 0; i < 65; i++) {
      const p = new ConfettiParticle(width * 0.05, height * 0.95);
      p.speedX = Math.random() * 9 + 3; // shoot rightwards
      particles.push(p);
    }

    // Right burst
    for (let i = 0; i < 65; i++) {
      const p = new ConfettiParticle(width * 0.95, height * 0.95);
      p.speedX = Math.random() * -9 - 3; // shoot leftwards
      particles.push(p);
    }

    if (!animationFrameId) {
      tick();
    }
  };
})();
