import { generaSecuenciaMusical } from "./motor";
import * as motorHelper from "./motor-helper";
import { vi } from "vitest";

describe("generaSecuenciaMusical", () => {
  it("Si le pasamos 0 como parámetro de entradas debe devolver un array vacío", () => {
    // Arrange
    const numeroDeNotas = 0;

    // Act
    const resultado = generaSecuenciaMusical(numeroDeNotas);

    // Assert
    expect(resultado).toEqual([]);
  });

  it("generaSecuenciaMusical: -1 => Error", () => {
    // Arrange
    const numeroDeNotas = -1;

    // Act
    const resultado = () => generaSecuenciaMusical(numeroDeNotas);

    // Assert
    expect(resultado).toThrowError();
  });

  it("generaSecuenciaMusical: 1 => ['azul']", () => {
    // Arrange
    const numeroDeNotas = 1;

    // Act
    vi.spyOn(motorHelper, "generaTeclaAleatoria").mockReturnValue("azul");
    const resultado = generaSecuenciaMusical(numeroDeNotas);

    // Assert
    expect(resultado).toEqual(["azul"]);
  });

  it("generaSecuenciaMusical: 1 => ['verde']", () => {
    // Arrange
    const numeroDeNotas = 1;

    // Act
    vi.spyOn(motorHelper, "generaTeclaAleatoria").mockReturnValue("verde");
    const resultado = generaSecuenciaMusical(numeroDeNotas);

    // Assert
    expect(resultado).toEqual(["verde"]);
  });

  it("generaSecuenciaMusical: 2 => ['verde', 'verde']", () => {
    // Arrange
    const numeroDeNotas = 2;

    // Act
    vi.spyOn(motorHelper, "generaTeclaAleatoria").mockReturnValue("verde");
    const resultado = generaSecuenciaMusical(numeroDeNotas);

    // Assert
    expect(resultado).toEqual(["verde", "verde"]);
  });

  it("generaSecuenciaMusical: 2 => ['verde', 'azul']", () => {
    // Arrange
    const numeroDeNotas = 2;

    // Act
    vi.spyOn(motorHelper, "generaTeclaAleatoria")
      .mockReturnValueOnce("verde")
      .mockReturnValueOnce("azul");
    const resultado = generaSecuenciaMusical(numeroDeNotas);

    // Assert
    expect(resultado).toEqual(["verde", "azul"]);
  });
});
