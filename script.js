// Ejemplo simple de comportamiento: mensajes al enviar formularios
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("¡Gracias! Hemos recibido tu solicitud.");
    form.reset();
  });
});

// Menú móvil
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
