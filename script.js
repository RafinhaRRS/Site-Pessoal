// LOADER
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

// TYPING
const text = "Desenvolvedor | Criador | Gamer";
let i = 0;

function typing() {
  const el = document.getElementById("typing");
  if (!el) return;

  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 60);
  }
}
typing();

// PARTICLES (HOME)
if (document.getElementById("particles-js")) {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80 },
      size: { value: 3 },
      move: { speed: 2 }
    }
  });
}

// MATRIX EFFECT (EDUCAÇÃO)
const canvas = document.getElementById("matrix");
if (canvas) {
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const letters = "01";
  const fontSize = 14;
  const columns = canvas.width / fontSize;

  const drops = Array.from({length: columns}).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0f0";
    ctx.font = fontSize + "px monospace";

    drops.forEach((y, i) => {
      const text = letters[Math.floor(Math.random()*letters.length)];
      ctx.fillText(text, i*fontSize, y*fontSize);

      if (y*fontSize > canvas.height && Math.random() > 0.975)
        drops[i] = 0;

      drops[i]++;
    });
  }

  setInterval(draw, 33);
}