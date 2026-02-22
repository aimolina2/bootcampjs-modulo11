# Modulo 11 - Laboratorio Módulo 11 Ecpresiones regulares

Para poder visualizar el contenido de este laboratorio.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).

_En este módulo presentamos dos prácticas, las cuales se encuentran en la carpeta correspondiente dentro de src: Carpeta apartadoA y Carpeta apartadoB_

# Apartado A. Validar IBAN

Para ver el resultado abre el navegador en `http://localhost:5173/src/apartadoa/index.html`

## Interfaz y estilos. HTML y CSS.

Montamos la interfaz donde vamos a introducir los datos. Creamos la estructura en index.html y damos estilos en estilo.css (previamente reseteamos los estilos con el archivo reseteo.css).

## Leer texto introducido en el input

En motor.ts creamos la funcion que lee el contenido del input del formulario.
En main.ts llamamos ha esta función que se ejecuta una vez se ha cargado el DOM.
