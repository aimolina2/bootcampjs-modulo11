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

También en motor incluimos la función que recibe la acción de recibir el valor que añadimos en el campo de texto del formulario. Este valor lo mostramos gracias a la función mostrarInfo (la recogemos en el ui.ts)

## El IBAN está bien formado

Esto lo validamos y mostramos el resultado a través de ui.ts. Aquí indicamos que antes de empezar debemos limpiar el contenido del div, y generamos las funciones que nos permitirán pintar los Párrafos con la info necesaria.

En el archivo validaciones.ts creamos la expresión regular que nos ayuda a verificar si está bien formado el IBAN (`const estaBienFormadoElIBAN`).

## El IBAN es válido

Instalamos la libraría _ibantools_ con `npm install ibantools` ya que es la que usaremos para verificar que el IBAN introducido es válido.
