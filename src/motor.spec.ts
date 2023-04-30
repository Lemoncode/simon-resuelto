import { generaSecuenciaMusical } from "./motor";

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

  it("generaSecuenciaMusical: 1 => ['FA']", () => {
    // Arrange
    const numeroDeNotas = 1;

    // Act
    const resultado = generaSecuenciaMusical(numeroDeNotas);

    // Assert
    expect(resultado).toEqual(["FA"]);
  });
});
