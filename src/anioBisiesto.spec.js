import anioBisiesto from "./anioBisiesto";

describe("Anio Bisiesto", () => {
  // Primera prueba, con todos los numeros divisores de 400 .................................
  it("Todos los años divisibles por 400 SON años bisiestos (así, por ejemplo, 2000 fue un año bisiesto)", () => {
    expect(anioBisiesto(2000)).toEqual(2000 + " Es un anio Bisiesto");
  });
  it("Todos los años divisibles por 400 SON años bisiestos (así, por ejemplo, 4000 fue un año bisiesto)", () => {
    expect(anioBisiesto(4000)).toEqual(4000 + " Es un anio Bisiesto");
  });
  it("Todos los años divisibles por 400 SON años bisiestos (así, por ejemplo, 6000 fue un año bisiesto)", () => {
    expect(anioBisiesto(6000)).toEqual(6000 + " Es un anio Bisiesto");
  });
  // ........................................................................................
});