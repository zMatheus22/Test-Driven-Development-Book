import { ConversorDeNumeroRomano } from "../src/conversorDeNumeroRomano.js";

test("Deve entender o simbolo I", () => {
  const romano = new ConversorDeNumeroRomano();
  const numero = romano.converte("I");
  expect(numero).toBe(1);
});
