document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contacto"); 
    const originalFormHTML = form.innerHTML;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Validaciones
        if (!nombre || !apellido || !telefono || !email || !mensaje) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        if (!/^[0-9]+$/.test(telefono)) {
            alert("El teléfono solo debe contener números.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Correo electrónico inválido.");
            return;
        }

        if (nombre.length > 55 || apellido.length > 55) {
            alert("Nombre y apellido no pueden superar 55 caracteres.");
            return;
        }
        form.innerHTML = `
            <div style="text-align:center; padding:20px;">
                <p style="font-size:18px; color:green; margin-bottom:20px;">
                    <strong>Mensaje enviado</strong>
                </p>
                <button id="btnAceptar" style="padding:10px 20px; background:#32A4DE; color:#fff; border:none; border-radius:6px; cursor:pointer;">
                    Aceptar
                </button>
            </div>
        `;
        document.getElementById("btnAceptar").addEventListener("click", () => {
            form.innerHTML = originalFormHTML;

            document.getElementById("form-contacto").addEventListener("submit", (e) => {
                e.preventDefault();
            });
        });
    });
});
