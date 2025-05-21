const { test, expect } = require('playwright/test');

test.describe('Pruebas del formulario de contacto', () => {
    test.beforeEach(async ({ page }) => {
        // Navegar a la página antes de cada prueba
        await page.goto('http://localhost/CAMILO/index.html');
    });

    test('Envío válido del formulario', async ({ page }) => {
        // Rellenar el formulario con datos válidos
        await page.fill('#TxtNombre', 'Ana García');
        await page.fill('#TxtEmail', 'ana@example.com');
        await page.fill('#TxtMensaje', 'Este es un mensaje de prueba que cumple con el mínimo de caracteres requeridos.');

        // Enviar el formulario
        await page.click('button[type="submit"]');

        // Verificar que aparece el mensaje de éxito de SweetAlert2
        await expect(page.locator('.swal2-title')).toContainText('¡Mensaje enviado!');
    });

    test('Envío de formulario vacío', async ({ page }) => {
        // Intentar enviar el formulario sin rellenar
        await page.click('button[type="submit"]');

        // Verificar que aparecen los mensajes de error
        await expect(page.locator('.was-validated')).toBeVisible();
    });

    test('Validación de email incorrecto', async ({ page }) => {
        // Rellenar el formulario con email inválido
        await page.fill('#TxtNombre', 'Ana García');
        await page.fill('#TxtEmail', 'correo_invalido');
        await page.fill('#TxtMensaje', 'Mensaje de prueba');

        // Enviar el formulario
        await page.click('button[type="submit"]');

        // Verificar mensaje de error de email
        await expect(page.locator('#TxtEmail')).toHaveClass(/is-invalid/);
    });

    test('Validación de longitud del mensaje', async ({ page }) => {
        // Rellenar el formulario con mensaje muy corto
        await page.fill('#TxtNombre', 'Ana García');
        await page.fill('#TxtEmail', 'ana@example.com');
        await page.fill('#TxtMensaje', 'Corto');

        // Enviar el formulario
        await page.click('button[type="submit"]');

        // Verificar mensaje de error de longitud
        await expect(page.locator('#TxtMensaje')).toHaveClass(/is-invalid/);
    });
});