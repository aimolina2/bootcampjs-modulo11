import { estaBienFormadoElIBAN } from "./validaciones";

describe("estaBienFormadoElIBAN", () => {
  test.each([
    ["ES21 1465 0100 72 2030876293", true],
    ["ES2114650100722030876293", true],
    ["ES21-1465-0100-72-2030876293", true],
    ["21ES-1465-0100-72-2030876293", false],
    ["ES21-1465-100-72-276293", false],
  ])(
    "Debería devolver para el IBAN %s el valor %s",
    (iban: string, expected: boolean) => {
      expect(estaBienFormadoElIBAN(iban)).toBe(expected);
    },
  );
});
