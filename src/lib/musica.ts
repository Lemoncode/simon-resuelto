export type Nota = "DO" | "RE" | "MI" | "FA";

// Crear contexto de audio
var audioContext = new (window.AudioContext ||
  (window as any).webkitAudioContext)();

// Crear oscilador
var oscillator = audioContext.createOscillator();

export const empiezaSecuenciaMusical = () => {
  // Iniciar oscilador
  oscillator.start();
};

export const terminaSecuenciaMusical = () => {
  if (oscillator.numberOfOutputs > 0) {
    oscillator.disconnect(audioContext.destination);
  }
};

// Función para reproducir una nota de piano
export function tocarNota(nota: Nota, duracionEnMilisegundos: number) {
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  // Ajustar frecuencia según la nota
  switch (nota) {
    case "DO":
      oscillator.frequency.value = 261.63; // Frecuencia de DO
      break;
    case "RE":
      oscillator.frequency.value = 293.66; // Frecuencia de RE
      break;
    case "MI":
      oscillator.frequency.value = 329.63; // Frecuencia de MI
      break;
    case "FA":
      oscillator.frequency.value = 349.23; // Frecuencia de FA
      break;
  }

  // Conectar oscilador a la salida de audio
  oscillator.connect(audioContext.destination);

  // Detener oscilador después de 1 segundo
  console.log(duracionEnMilisegundos);
  //oscillator.stop(duracionEnMilisegundos);
  /*setTimeout(function () {
    if (oscillator.numberOfOutputs > 0) {
      oscillator.disconnect(audioContext.destination);
    }
  }, duracionEnMilisegundos);*/
}
