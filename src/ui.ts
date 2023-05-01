import { getSafeElementById } from "./lib/dom-helper";
import {
  tocarNota,
  empiezaSecuenciaMusical,
  terminaSecuenciaMusical,
} from "./lib/musica";
import { ConvierteDeTeclaANota } from "./mapeador";
import { Partida, duracionNota, Tecla } from "./modelo";
import { partida, arrancaPartida } from "./motor";

const mostrarTablero = (partida: Partida) => {
  const simonDiv = getSafeElementById("simon");
  simonDiv.style.display = partida.estado === "no_arrancada" ? "none" : "";

  const btnEmpezar = getSafeElementById("btnEmpezar");
  btnEmpezar.style.display = partida.estado === "no_arrancada" ? "" : "none";
};

const ejecutaSecuenciaDeNotas = (teclas: Tecla[]) => {
  empiezaSecuenciaMusical();
  for (let i = 0; i < teclas.length; i++) {
    setTimeout(function () {
      tocarNota(ConvierteDeTeclaANota(teclas[i]), duracionNota); // Esto va a dar un error
    }, i * duracionNota);
  }

  setTimeout(() => {
    terminaSecuenciaMusical();
  }, teclas.length * duracionNota);
};

export const inicializaAplicacion = () => {
  mostrarTablero(partida);

  const btnEmpezar = getSafeElementById("btnEmpezar");
  btnEmpezar.addEventListener("click", () => {
    arrancaPartida(partida);
    mostrarTablero(partida);
    ejecutaSecuenciaDeNotas(partida.notas);
  });
};
