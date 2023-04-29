type teclas = "azul" | "rojo" | "verde" | "amarillo";

type estadoPartida = "no_arrancada" | "jugando" | "game_over";

export interface Partida {
  ronda: number;
  notas: teclas[];
  notasUsuario: teclas[];
  estado: estadoPartida;
}

export const crearPartidaInicial = () : Partida => ({
  ronda: 0,
  notas: [],
  notasUsuario: [],
  estado: "no_arrancada",
});
