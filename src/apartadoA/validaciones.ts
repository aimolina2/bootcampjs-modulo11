import { isValidIBAN } from "ibantools";
import { datosIBAN } from "./model";
import { BANCO } from "./constantes";

export const estaBienFormadoElIBAN = (value: string): boolean => {
  const patron =
    /^[A-Z]{2}\d{2}(\s|-)?\d{4}(\s|-)?\d{4}(\s|-)?\d{2}(\s|-)?\d{10}$/;
  return patron.test(value);
};

export const esValidoElIBAN = (value: string): boolean => {
  const ibanLimpio = value.replace(/\s|-/g, "");
  return isValidIBAN(ibanLimpio);
};

export const extraerDatosIBAN = (value: string): datosIBAN => {
  const patron =
    /^[A-Z]{2}\d{2}(\s|-)?(?<banco>\d{4})(\s|-)?(?<sucursal>\d{4})(\s|-)?(?<dc>\d{2})(\s|-)?(?<cuenta>\d{10})$/;
  const coincidencia = patron.exec(value);
  let datosExtraidos: datosIBAN = {
    banco: "",
    sucursal: "",
    dc: "",
    cuenta: "",
  };

  if (coincidencia) {
    const { banco, sucursal, dc, cuenta } = coincidencia.groups as any;
    datosExtraidos.banco = obtenerNombreBanco(banco);
    datosExtraidos.sucursal = sucursal;
    datosExtraidos.dc = dc;
    datosExtraidos.cuenta = cuenta;
  }
  return datosExtraidos;
};

const obtenerNombreBanco = (codigoBanco: string): string => {
  const bancoEncontrado = BANCO.find((banco) => banco.codigo === codigoBanco);
  return bancoEncontrado ? bancoEncontrado.nombre : "Desconocido";
};
