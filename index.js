(() => {
    'use strict';

    window.addEventListener('load', function() {
        const forms = document.querySelectorAll('.needs-validation');
        const emailInput = document.getElementById('TxtEmail');
        const mensajeInput = document.getElementById('TxtMensaje');

        // Función para validar email con regex
        function validarEmail(email) {
            const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            return regex.test(email);
        }

        // Validación personalizada para el email
        emailInput.addEventListener('input', function() {
            if (this.value && !validarEmail(this.value)) {
                this.setCustomValidity('Por favor, ingrese un email válido');
                this.classList.add('is-invalid');
            } else {
                this.setCustomValidity('');
                this.classList.remove('is-invalid');
            }
        });

        // Validación de longitud para el mensaje
        mensajeInput.addEventListener('input', function() {
            const minLength = 10;
            const maxLength = 200;
            const currentLength = this.value.length;

            if (currentLength < minLength) {
                this.setCustomValidity(`El mensaje debe tener al menos ${minLength} caracteres`);
                this.classList.add('is-invalid');
            } else if (currentLength > maxLength) {
                this.setCustomValidity(`El mensaje no puede exceder los ${maxLength} caracteres`);
                this.classList.add('is-invalid');
            } else {
                this.setCustomValidity('');
                this.classList.remove('is-invalid');
            }

            // Actualizar el contador de caracteres si existe
            const contador = document.getElementById('contadorCaracteres');
            if (contador) {
                contador.textContent = `${currentLength}/${maxLength}`;
            }
        });

        // Validación del formulario
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                event.preventDefault();
                
                if (!form.checkValidity() || !validarEmail(emailInput.value)) {
                    event.stopPropagation();
                    form.classList.add('was-validated');
                } else {
                    // Mostrar mensaje de éxito
                    Swal.fire({
                        icon: 'success',
                        title: '¡Mensaje enviado!',
                        text: 'Tu mensaje ha sido enviado correctamente',
                        confirmButtonColor: '#3498db',
                        timer: 3000,
                        timerProgressBar: true
                    }).then(() => {
                        // Limpiar el formulario después de mostrar el mensaje
                        form.reset();
                        form.classList.remove('was-validated');
                    });
                }
            }, false);
        });
    });
})();