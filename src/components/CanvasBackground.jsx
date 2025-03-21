import { useEffect, useRef } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({
    x: null,
    y: null,
    radius: (window.innerHeight / 80) * (window.innerWidth / 80),
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    let numberOfParticles = (canvas.width * canvas.height) / 50000;

    class Particle {
      constructor(x, y, directionX, directionY, size) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationDirection = Math.random() < 0.5 ? -0.01 : 0.01;
        this.image = new Image();
        this.image.src = "/mushroom.png";
      }

      draw() {
        const centerX = this.x + this.size * 2;
        const centerY = this.y + this.size * 2;
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(this.rotation);
        ctx.drawImage(this.image, -this.size * 2, -this.size * 2, this.size * 4, this.size * 4);
        ctx.restore();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

        // Mouse collision
        const dx = mouse.current.x - this.x;
        const dy = mouse.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const bufferSize = 5;
        if (distance < mouse.current.radius) {
          if (mouse.current.x < this.x && this.x < canvas.width - this.size * bufferSize) {
            this.x += bufferSize;
            this.directionX = -this.directionX;
          }
          if (mouse.current.y < this.y && this.y < canvas.height - this.size * bufferSize) {
            this.y += bufferSize;
            this.directionY = -this.directionY;
          }
          if (mouse.current.x > this.x && this.x > this.size * bufferSize) {
            this.x -= bufferSize;
            this.directionX = -this.directionX;
          }
          if (mouse.current.y > this.y && this.y > this.size * bufferSize) {
            this.y -= bufferSize;
            this.directionY = -this.directionY;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.rotation += this.rotationDirection;

        this.draw();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < numberOfParticles; i++) {
        const size = 15;//size depends on screen size
        const x = Math.random() * (canvas.width - size * 4);
        const y = Math.random() * (canvas.height - size * 4);
        const directionX = (Math.random() - 0.5) * 4;
        const directionY = (Math.random() - 0.5) * 4;
        particles.push(new Particle(x, y, directionX, directionY, size));
      }
    };
    const collisionDetection = () => {
        let repelFactor = 1.2;
        for (let a = 0; a < particles.length; a++) {
          for (let b = a + 1; b < particles.length; b++) {
            let dx = particles[a].x - particles[b].x;
            let dy = particles[a].y - particles[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let minDistance = particles[a].size + particles[b].size;
      
            if (distance < minDistance) {
              let overlap = 0.01 * (distance - minDistance);
      
              particles[a].x -= overlap * (dx / distance) * repelFactor;
              particles[a].y -= overlap * (dy / distance) * repelFactor;
              particles[b].x += overlap * (dx / distance) * repelFactor;
              particles[b].y += overlap * (dy / distance) * repelFactor;
      
              // Reverse directions
              particles[a].directionX = -particles[a].directionX;
              particles[a].directionY = -particles[a].directionY;
              particles[b].directionX = -particles[b].directionX;
              particles[b].directionY = -particles[b].directionY;
            }
          }
        }
      };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let particle of particles) {
        particle.update();
      }
      collisionDetection();
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      mouse.current.radius = (canvas.height / 80) * (canvas.width / 80);
      init();
    };

    const handleMouseMove = (e) => {
      mouse.current.x = e.x;
      mouse.current.y = e.y;
    };

    const handleMouseOut = () => {
      mouse.current.x = undefined;
      mouse.current.y = undefined;
    };

    init();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
};

export default CanvasBackground;
