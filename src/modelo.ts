export const duracionNota = 500;

export type Tecla = "azul" | "rojo" | "verde" | "amarillo";

type EstadoPartida = "no_arrancada" | "jugando" | "game_over";

export interface Partida {
  ronda: number;
  notas: Tecla[];
  notasUsuario: Tecla[];
  estado: EstadoPartida;
}

export const crearPartidaInicial = (): Partida => ({
  ronda: 0,
  notas: [],
  notasUsuario: [],
  estado: "no_arrancada",
});
