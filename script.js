function changeTheme(faction) {
    const body = document.body;
    if (faction === 'moria') {
        body.style.backgroundColor = "#1a1a1a";
        body.style.color = "#f4e4bc";
        alert("Has entrado en las profundidades de Moria. ¡Cuidado con el Balrog (el Bug)!");
    } else {
        body.style.backgroundColor = "#2d4c2d";
        body.style.color = "#ffffff";
        alert("La luz de los Elfos ilumina tu código.");
    }
}

// Un pequeño secreto: presionar la tecla 'A' para el Anillo
document.addEventListener('keydown', (e) => {
    if (e.key === 'a' || e.key === 'A') {
        document.body.style.filter = "sepia(100%) saturate(200%)";
        console.log("Invisibilidad activada... pero Sauron te observa.");
    }
});