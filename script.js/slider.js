// Función para crear una estrella fugaz
function createShootingStar() {
    const shootingStar = document.createElement("div");
    shootingStar.classList.add("shooting-star");

    // Posición aleatoria y velocidad de la estrella fugaz
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 2 + 1;

    shootingStar.style.left = `${startX}px`;
    shootingStar.style.animationDuration = `${duration}s`;

    document.querySelector(".shooting-stars").appendChild(shootingStar);

    // Eliminar la estrella después de la animación
    setTimeout(() => {
        shootingStar.remove();
    }, duration * 1000);
}

// Generar estrellas fugaces en intervalos
setInterval(createShootingStar, 1000);
