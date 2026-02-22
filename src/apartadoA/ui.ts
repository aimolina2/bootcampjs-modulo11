import { estaBienFormadoElIBAN } from "./validaciones";

export const mostrarInfo = (iban: string) => {
  limpiarInfo();
  const estaBienFormado = estaBienFormadoElIBAN(iban);
  pintaParrafoEstaBienFormado(estaBienFormado);
};

const limpiarInfo = () => {
  const datosInfo = document.querySelector(".info");
  if (datosInfo && datosInfo instanceof HTMLDivElement) {
    datosInfo.innerHTML = "";
  }
};

const crearElementoParrafo = (texto: string): HTMLParagraphElement => {
  const parrafo = document.createElement("p");
  parrafo.innerText = texto;
  return parrafo;
};

const pintaParrafoEstaBienFormado = (estaBienFormado: boolean) => {
  const datosInfo = document.querySelector(".info");
  if (datosInfo && datosInfo instanceof HTMLDivElement) {
    let parrafo = estaBienFormado
      ? crearElementoParrafo("El IBAN está bien formado")
      : crearElementoParrafo("El IBAN no está bien formado");
    datosInfo.appendChild(parrafo);
  }
};
