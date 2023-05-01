import { Tecla } from "./modelo";
import { convierteDeNumeroATecla } from "./mapeador";

// TODO añadir pruebas unitarias a este método
export const generaTeclaAleatoria = (): Tecla => {
  const valorRandom = Math.floor(Math.random() * 4);
  return convierteDeNumeroATecla(valorRandom);
};