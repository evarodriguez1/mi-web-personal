/**
 * SISTEMA 1: LLUVIA DE RUNAS ÉLFICAS (Basado en el efecto Matrix)
 * Dibuja caracteres en un Canvas que caen continuamente.
 */
const canvas = document.getElementById('canvas-runas');
const ctx = canvas.getContext('2d');

// Ajustamos el tamaño del canvas al de la ventana
function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', setupCanvas);
setupCanvas();

const runes = "ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚻᚼᛁᛄᛈᛉᛊᛋᛏᛒᛖᛗᛚᛝᛟᛞ";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawRunes() {
    // Fondo semi-transparente para crear el rastro de la runa
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#c5a059"; // Dorado
    ctx.font = fontSize + "px Cinzel";

    for (let i = 0; i < drops.length; i++) {
        const text = runes.charAt(Math.floor(Math.random() * runes.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Si la gota llega al final, hay una probabilidad de reiniciarla
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

/**
 * SISTEMA 2: EFECTO TYPEWRITER (Escritura dinámica)
 * Escribe y borra frases en el encabezado.
 */
const typewriterElement = document.getElementById('typewriter');
const phrases = ["Junior Backend Developer...", "Caminante de Planos...", "Forjadora de Software..."];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function handleTypewriter() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        // Borrando letras
        typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Escribiendo letras
        typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    // Lógica de cambio de estado
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(handleTypewriter, 2000); // Pausa cuando termina de escribir
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(handleTypewriter, 500); // Pausa antes de empezar nueva frase
    } else {
        // Velocidad de tipeo vs velocidad de borrado
        setTimeout(handleTypewriter, isDeleting ? 50 : 150);
    }
}

// LANZAMIENTO DE SISTEMAS
setInterval(drawRunes, 35); // Ejecuta la animación de runas a 30 FPS aprox.
document.addEventListener('DOMContentLoaded', handleTypewriter);