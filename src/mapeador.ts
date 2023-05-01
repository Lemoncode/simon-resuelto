import { Tecla } from "./modelo";
import { Nota } from "./lib/musica";

// TODO: Añadir pruebas unitarias a este método
export const convierteDeNumeroATecla = (numero: number): Tecla => {
  switch (numero) {
    case 0:
      return "azul";
    case 1:
      return "rojo";
    case 2:
      return "verde";
    case 3:
      return "amarillo";
    default:
      throw new Error("No se ha encontrado la tecla");
  }
};

export const ConvierteDeTeclaANota = (tecla: Tecla): Nota => {
  switch (tecla) {
    case "azul":
      return "DO";
    case "rojo":
      return "RE";
    case "verde":
      return "MI";
    case "amarillo":
      return "FA";
    default:
      throw new Error("Tecla no soportada");
  }
};
