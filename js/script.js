// Puedes añadir funcionalidad JavaScript aquí si es necesario
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada correctamente');

    // Ejemplo de funcionalidad: Cambiar clase activa en el menú
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
