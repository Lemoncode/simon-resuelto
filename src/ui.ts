import { getSafeElementById } from "./lib/dom-helper";
import { Partida } from "./modelo";
import { partida, arrancaPartida } from "./motor";

const mostrarTablero = (partida: Partida) => {
  const simonDiv = getSafeElementById("simon");
  simonDiv.style.display = partida.estado === "no_arrancada" ? "none" : "";

  const btnEmpezar = getSafeElementById("btnEmpezar");
  btnEmpezar.style.display = partida.estado === "no_arrancada" ? "" : "none";
};

export const inicializaAplicacion = () => {
  mostrarTablero(partida);

  const btnEmpezar = getSafeElementById("btnEmpezar");
  btnEmpezar.addEventListener("click", () => {
    arrancaPartida(partida);
    mostrarTablero(partida);
  });
};
