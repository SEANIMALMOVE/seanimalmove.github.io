document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img'); // Selecciona todas las imágenes

    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.classList.add('animate-image');
        });

        image.addEventListener('mouseout', () => {
            image.classList.remove('animate-image');
        });
    });
});