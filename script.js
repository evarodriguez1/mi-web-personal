// 1. Efecto Typewriter (Como el de Luca)
const text = document.getElementById('typewriter');
const phrases = ["Junior Backend Developer...", "Planeswalker...", "Forjadora de Software..."];
let i = 0;
let j = 0;
let isDeleting = false;

function loop() {
    let currentPhrase = phrases[i];
    if (isDeleting) {
        text.textContent = currentPhrase.substring(0, j - 1);
        j--;
    } else {
        text.textContent = currentPhrase.substring(0, j + 1);
        j++;
    }

    if (!isDeleting && j === currentPhrase.length) {
        isDeleting = true;
        setTimeout(loop, 2000);
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % phrases.length;
        setTimeout(loop, 500);
    } else {
        setTimeout(loop, isDeleting ? 50 : 150);
    }
}

// 2. Lluvia de Runas Élficas
const canvas = document.getElementById('canvas-runas');
const ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.onresize = resize;
resize();

const runes = "ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚻᚼᛁᛄᛈᛉᛊᛋᛏᛒᛖᛗᛚᛝᛟᛞ";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#c5a059"; // Oro
    ctx.font = fontSize + "px serif";

    for (let i = 0; i < drops.length; i++) {
        const char = runes[Math.floor(Math.random() * runes.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// Arrancar todo
setInterval(draw, 33);
loop();