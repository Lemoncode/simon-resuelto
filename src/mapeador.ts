import {Tecla} from './modelo';

// TODO: Añadir pruebas unitarias a este método
export const convierteDeNumeroATecla = (numero: number) : Tecla => {
  switch(numero) {
    case 0:
      return 'azul';
    case 1:
      return 'rojo';
    case 2:
      return 'verde';
    case 3:
      return 'amarillo';
    default:
      throw new Error('No se ha encontrado la tecla');
  }
}