import { datosIBAN } from "./model";
import {
  estaBienFormadoElIBAN,
  esValidoElIBAN,
  extraerDatosIBAN,
} from "./validaciones";

export const mostrarInfo = (iban: string) => {
  limpiarInfo();
  const estaBienFormado = estaBienFormadoElIBAN(iban);
  pintaParrafoEstaBienFormado(estaBienFormado);
  const esValido = esValidoElIBAN(iban);
  pintaParrafoEsValido(esValido);
  if (estaBienFormado && esValido) {
    const datosExtraidos = extraerDatosIBAN(iban);
    pintarDatosExtraidos(datosExtraidos);
  }
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

const pintaParrafoEsValido = (esValido: boolean) => {
  const datosInfo = document.querySelector(".info");
  if (datosInfo && datosInfo instanceof HTMLDivElement) {
    let parrafo = esValido
      ? crearElementoParrafo("El IBAN es válido")
      : crearElementoParrafo("El IBAN no es válido");
    datosInfo.appendChild(parrafo);
  }
};

const pintarDatosExtraidos = (datos: datosIBAN) => {
  const datosInfo = document.querySelector(".info");
  if (datosInfo && datosInfo instanceof HTMLDivElement) {
    const parrafoBanco = crearElementoParrafo(`Banco: ${datos.banco}`);
    const parrafoSucursal = crearElementoParrafo(`Sucursal: ${datos.sucursal}`);
    const parrafoDC = crearElementoParrafo(`DC: ${datos.dc}`);
    const parrafoCuenta = crearElementoParrafo(`Cuenta: ${datos.cuenta}`);
    datosInfo.appendChild(parrafoBanco);
    datosInfo.appendChild(parrafoSucursal);
    datosInfo.appendChild(parrafoDC);
    datosInfo.appendChild(parrafoCuenta);
  }
};
