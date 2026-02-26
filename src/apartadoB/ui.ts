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

export const mostrarImagenes = (codigoHTML: string) => {
  limpiarImagenes();
  const imagenes = extraerImagenes(codigoHTML);
  if (imagenes.length > 0) {
    pintarImagenes(imagenes);
  }
};

const limpiarImagenes = () => {
  const imgUrls = document.querySelector(".grid-img");
  if (imgUrls && imgUrls instanceof HTMLDivElement) {
    imgUrls.innerHTML = "";
  }
};

const pintarImagenes = (imagenes: string[]) => {
  const imgUrls = document.querySelector(".grid-img");
  if (imgUrls && imgUrls instanceof HTMLDivElement) {
    imagenes.map((url) => {
      const contenedorImagen = document.createElement("div");
      let imagen = crearElementoImagen(url);
      contenedorImagen.appendChild(imagen);
      imgUrls.appendChild(contenedorImagen);
    });
  }
};

const crearElementoImagen = (url: string): HTMLImageElement => {
  const imagen = document.createElement("img");
  imagen.src = url;
  return imagen;
};
