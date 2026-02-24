import { extraerImagenes } from "./extraer-img";
export const mostrarUrls = (codigoHTML: string) => {
  limpiarUrls();
  const imagenes = extraerImagenes(codigoHTML);
  if (imagenes.length > 0) {
    pintarUrls(imagenes);
  }
};

const limpiarUrls = () => {
  const datosUrls = document.querySelector(".enlaces-img");
  if (datosUrls && datosUrls instanceof HTMLDivElement) {
    datosUrls.innerHTML = "";
  }
};

const pintarUrls = (imagenes: string[]) => {
  const datosUrls = document.querySelector(".enlaces-img");
  if (datosUrls && datosUrls instanceof HTMLDivElement) {
    imagenes.map((url) => {
      let parrafo = crearElementoParrafo(url);
      datosUrls.appendChild(parrafo);
    });
  }
};

const crearElementoParrafo = (texto: string): HTMLParagraphElement => {
  const parrafo = document.createElement("p");
  parrafo.innerText = texto;
  return parrafo;
};
