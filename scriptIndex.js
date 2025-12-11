
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px; height: 4px;
            background: radial-gradient(circle, #ccc 0%, transparent 70%);
            pointer-events: none;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            animation: float 6s infinite linear;
            z-index: 1000;
        `;
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 6000);
    }
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            to { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    setInterval(createParticle, 800);
