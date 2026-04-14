// 1. EFECTO TYPEWRITER (Como el de Luca)
const textElement = document.getElementById('typewriter-text');
const phrases = ["Junior Backend Developer", "Planeswalker", "Forjadora de Software"];
let phraseIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < phrases[phraseIndex].length) {
        textElement.textContent += phrases[phraseIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        textElement.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", type);

// 2. LLUVIA DE RUNAS (Versión mejorada del Matrix de Luca)
const canvas = document.getElementById('canvas-runas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const runes = "ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚻᚼᛁᛄᛈᛉᛊᛋᛏᛒᛖᛗᛚᛝᛟᛞ";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawRunes() {
    ctx.fillStyle = "rgba(10, 10, 10, 0.05)";
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

setInterval(drawRunes, 35);