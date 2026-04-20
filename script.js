// 1. LLUVIA DE RUNAS (Ajustado para Responsive)
const canvas = document.getElementById('canvas-runas');
const ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

const runes = "ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚻᚼᛁᛄᛈᛉᛊᛋᛏᛒᛖᛗᛚᛝᛟᛞ";
const fontSize = 16;
let columns = canvas.width / fontSize;
let drops = Array(Math.floor(columns)).fill(1);

function drawRunes() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#c5a059";
    ctx.font = fontSize + "px Cinzel";

    for (let i = 0; i < drops.length; i++) {
        const text = runes.charAt(Math.floor(Math.random() * runes.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// 2. TYPEWRITER (Optimizado)
const typewriter = document.getElementById('typewriter');
const phrases = ["Junior Backend Developer...", "Caminante de Planos...", "Forjadora de Software..."];
let pIdx = 0, cIdx = 0, isDel = false;

function type() {
    const current = phrases[pIdx];
    typewriter.textContent = isDel ? current.substring(0, cIdx--) : current.substring(0, cIdx++);

    if (!isDel && cIdx > current.length) {
        isDel = true;
        setTimeout(type, 2000);
    } else if (isDel && cIdx === 0) {
        isDel = false;
        pIdx = (pIdx + 1) % phrases.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDel ? 50 : 120);
    }
}

setInterval(drawRunes, 35);
document.addEventListener('DOMContentLoaded', type);