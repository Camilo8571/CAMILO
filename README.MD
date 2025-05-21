# Formulario de Contacto

Un formulario de contacto interactivo con validaciones y pruebas automatizadas.

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5.3
- SweetAlert2
- Playwright para pruebas E2E

## Requisitos Previos

- Node.js (versión 14 o superior)
- XAMPP (para servidor local)
- NPM (Node Package Manager)

## Estructura del Proyecto

```
CAMILO/
├── index.html          # Página principal con el formulario
├── index.css           # Estilos personalizados
├── index.js           # Lógica del formulario
├── tests/             # Directorio de pruebas
│   └── formulario.spec.js  # Pruebas del formulario
├── package.json       # Dependencias del proyecto
├── playwright.config.js    # Configuración de Playwright
└── README.md         # Documentación del proyecto
```

## Instalación

1. Clona el repositorio:
```bash
git clone <https://github.com/Camilo8571/CAMILO.git>
cd CAMILO
```

2. Instala las dependencias:
```bash
npm install
```

3. Instala Playwright y sus navegadores:
```bash
npm init playwright@latest
```

4. Copia los archivos al directorio de XAMPP:
```bash
C:\xampp\htdocs\CAMILO
```

## Configuración

1. Asegúrate de que XAMPP está corriendo (Apache)
2. El proyecto debe ser accesible en: `http://localhost/CAMILO`

## Ejecutar las Pruebas

### Ejecutar todas las pruebas:
```bash
npx playwright test
```

### Ejecutar pruebas con interfaz visual:
```bash
npx playwright test --ui
```

### Ejecutar pruebas en modo debug:
```bash
npx playwright test --debug
```

## Características del Formulario

- Validación de campos requeridos
- Validación de formato de email
- Validación de longitud mínima y máxima del mensaje
- Feedback visual instantáneo
- Mensajes de error personalizados
- Alerta de éxito con SweetAlert2

## Pruebas Implementadas

- Envío válido del formulario
- Validación de formulario vacío
- Validación de email incorrecto
- Validación de longitud del mensaje