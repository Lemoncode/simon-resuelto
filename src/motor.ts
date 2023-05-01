import { Partida, crearPartidaInicial, Tecla } from "./modelo";
import { generaTeclaAleatoria } from "./motor-helper";

export const partida: Partida = crearPartidaInicial();

export const generaSecuenciaMusical = (numeroDeNotas: number): Tecla[] => {
  if (numeroDeNotas < 0) {
    throw new Error("El número de notas no puede ser negativo");
  }

  const notas: Tecla[] = Array.from(
    { length: numeroDeNotas },
    generaTeclaAleatoria
  );
  return notas;
};

// TODO: añadir pruebas unitarias
export const arrancaPartida = (partida: Partida) => {
  partida.estado = "jugando";
  partida.notas = generaSecuenciaMusical(4);
  partida.ronda = 1;
  partida.notasUsuario = [];
}
