export const getSafeElementById = (id: string): HTMLElement => {
  const elemento = document.getElementById(id);
  if (elemento && elemento instanceof HTMLElement) {
    return elemento;
  } else {
    throw new Error(`Elemento con id ${id} no encontrado`);
  }
};
