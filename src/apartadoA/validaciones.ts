import { isValidIBAN } from "ibantools";

export const estaBienFormadoElIBAN = (value: string): boolean => {
  const patron =
    /^[A-Z]{2}\d{2}(\s|-)?\d{4}(\s|-)?\d{4}(\s|-)?\d{2}(\s|-)?\d{10}$/;
  return patron.test(value);
};

export const esValidoElIBAN = (value: string): boolean => {
  const ibanLimpio = value.replace(/\s|-/g, "");
  return isValidIBAN(ibanLimpio);
};
