# Plantilla Bootstrap + Gulp + Sass

Este proyecto proporciona una configuración básica para compilar estilos con Sass, minificar CSS y JavaScript, optimizar imágenes, y ver cambios en tiempo real usando Gulp y Bootstrap.

## 📁 Estructura del proyecto

```
├── dist/                  # Archivos generados (output)
├── src/
│   ├── scss/              # Archivos Sass (puedes sobrescribir variables de Bootstrap aquí)
│   ├── js/                # Archivos JS personalizados
│   └── images/            # Imágenes a optimizar
├── gulpfile.mjs           # Configuración de Gulp (ESM)
├── package.json           # Dependencias y scripts
└── README.md              # Esta documentación
```

## ⚙️ Requisitos

- Node.js (v16+ recomendado)
- Gulp CLI instalado globalmente:

```bash
npm install --global gulp-cli
```

## 🚀 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/bootstrap-template-gulp.git
cd bootstrap-template-gulp
```

2. Instala las dependencias:

```bash
npm install
```

## 🛠️ Comandos disponibles

### 👉 Iniciar entorno de desarrollo

```bash
gulp --gulpfile gulpfile.mjs
```

Este comando:

- Limpia la carpeta `dist`
- Compila los archivos `.scss` en `dist/css/`
- Minifica los JS en `dist/js/`
- Optimiza las imágenes en `dist/images/`
- Observa los cambios automáticamente para recompilar

## 🎨 Personalización de Bootstrap

Puedes sobrescribir variables de Bootstrap dentro de `src/scss/`:

1. Modifica el archivo `_variables.scss` con tus overrides.
2. Agrega tus estilos a `main.scss`:

```scss
// src/scss/main.scss
@import 'variables';
@import 'bootstrap/scss/bootstrap';
```

## 🧼 Tareas adicionales

Puedes ejecutar tareas específicas:

```bash
# Limpiar la carpeta dist
gulp clean --gulpfile gulpfile.mjs

# Compilar solo los estilos
gulp styles --gulpfile gulpfile.mjs

# Minificar solo scripts
gulp scripts --gulpfile gulpfile.mjs

# Optimizar imágenes
gulp images --gulpfile gulpfile.mjs
```

## 📦 Dependencias clave

- `gulp`
- `gulp-sass`
- `sass`
- `gulp-sourcemaps`
- `gulp-clean-css`
- `gulp-uglify`
- `gulp-imagemin`
- `del`

## 📝 Licencia

MIT © Renato Aguilar
