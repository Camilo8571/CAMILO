const { test, expect } = require('@playwright/test');

test('Envío válido do formulario', async ({ page }) => {
  await page.goto('http://localhost/probas-despregue/index.php');

  await page.fill('input[name="nome"]', 'Ana');
  await page.fill('input[name="email"]', 'ana@example.com');
  await page.fill('textarea[name="mensaxe"]', 'Proba automatizada');

  await page.click('button[type="submit"]');

  await expect(page.locator('#confirmacion')).toContainText('enviada');
});

test('Envío baleiro do formulario', async ({ page }) => {
  await page.goto('http://localhost/probas-despregue/index.php');

  await page.click('button[type="submit"]');

  await expect(page.locator('.erro')).toBeVisible();
});