// 1. Variable global del color
let particleColor = '#00ffff'; // Modo Tron por defecto

// 1. Función para obtener el color dinámico según el modo actual
function getParticleColor() {
  return document.body.classList.contains('villain-mode') ? '#ff003c' : '#00ffff';
}

// 2. Crear partícula con color dinámico
function createParticle() {
  const color = getParticleColor(); // ← Se obtiene el color actual al instante

  const particle = document.createElement('div');
  particle.style.position = 'fixed';
  particle.style.width = '2px';
  particle.style.height = '2px';
  particle.style.background = color;
  particle.style.borderRadius = '50%';
  particle.style.pointerEvents = 'none';
  particle.style.zIndex = '1';
  particle.style.left = Math.random() * window.innerWidth + 'px';
  particle.style.top = window.innerHeight + 'px';
  particle.style.boxShadow = `0 0 10px ${color}`;

  document.body.appendChild(particle);

  const animation = particle.animate([
    { transform: 'translateY(0px)', opacity: 1 },
    { transform: `translateY(-${window.innerHeight + 100}px)`, opacity: 0 }
  ], {
    duration: Math.random() * 3000 + 2000,
    easing: 'linear'
  });

  animation.onfinish = () => particle.remove();
}

// 3. Activar las partículas automáticamente
setInterval(createParticle, 300);




// Al cargar la página, aplicar modo guardado
window.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');

  if (theme === 'villain') {
    document.body.classList.add('villain-mode');
  } else {
    document.body.classList.add('tron-mode'); // ← Establece modo Tron por defecto
  }

  activarBrilloTron(); // ← Asegúra activar el brillo al cargar
  aplicarEstilosVillano(); // ← Aplica clases a los textos según el modo
});

// Alerta personalizada
function mostrarAlertaPersonalizada(mensaje) {
  alert(mensaje);
}

// Hover en tarjetas
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.02)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});

// Detectar si estamos en modo villano y actualizar clases visuales
function aplicarEstilosVillano() {
  const tituloPrincipal = document.getElementById('main-title');

  if (document.body.classList.contains('villain-mode')) {
    tituloPrincipal.classList.remove('neon-text');
    tituloPrincipal.classList.add('villain-text');
  } else {
    tituloPrincipal.classList.remove('villain-text');
    tituloPrincipal.classList.add('neon-text');
  }
}

function toggleDescripcion(elemento) {
  elemento.classList.toggle('active');
}

function activarBrilloTron() {
  const body = document.body;
  const tronSections = document.querySelectorAll('.tron-section');

  if (body.classList.contains('tron-mode')) {
    tronSections.forEach(section => {
      section.classList.add('brillo-tron');
    });
  } else {
    tronSections.forEach(section => {
      section.classList.remove('brillo-tron');
    });
  }
}

// Llamar esta función cuando se active el modo Tron
document.addEventListener('DOMContentLoaded', activarBrilloTron);

// También si cambias de modo en un botón:
document.getElementById('temaToggleBtn').addEventListener('click', () => {
  setTimeout(activarBrilloTron, 100); // da un pequeño tiempo para que se aplique la clase
});

function toggleMode() {
  const body = document.body;

  if (body.classList.contains("villain-mode")) {
    body.classList.remove("villain-mode");
    body.classList.add("tron-mode");
    localStorage.setItem('theme', 'tron');
  } else {
    body.classList.remove("tron-mode");
    body.classList.add("villain-mode");
    localStorage.setItem('theme', 'villain');
  }
}


window.addEventListener("scroll", function () {
  const capsula = document.getElementById("capsulaInfo");
  if (window.scrollY > 150) {
    capsula.style.display = "block";
  } else {
    capsula.style.display = "none";
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'villain') {
    document.body.classList.add('villain-mode');
  } else {
    document.body.classList.add('tron-mode');
  }

  aplicarEstilosVillano(); 
  activarBrilloTron();      
});

