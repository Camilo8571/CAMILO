(() => {
    'use strict';

    window.addEventListener('load', function() {
        const forms = document.querySelectorAll('.needs-validation');
        const emailInput = document.getElementById('TxtEmail');

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

        // Validación del formulario
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity() || !validarEmail(emailInput.value)) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    });
})();