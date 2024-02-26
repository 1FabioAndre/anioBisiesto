import anioBisiesto from "./anioBisiesto";

describe("Anio Bisiesto", () => {
  // Primera prueba, con todos los numeros divisores de 400 .................................
  it("Todos los años divisibles por 400 SON años bisiestos (así, por ejemplo, 2000 fue un año bisiesto)", () => {
    expect(anioBisiesto(2000)).toEqual("El anio " + 2000 + " es un anio bisiesto");
  });
  it("Todos los años divisibles por 400 SON años bisiestos (así, por ejemplo, 4000 fue un año bisiesto)", () => {
    expect(anioBisiesto(4000)).toEqual("El anio " + 4000 + " es un anio bisiesto");
  });
  it("Todos los años divisibles por 400 SON años bisiestos (así, por ejemplo, 6000 fue un año bisiesto)", () => {
    expect(anioBisiesto(6000)).toEqual("El anio " + 6000 + " es un anio bisiesto");
  });
  // ........................................................................................

  // Todos los años divisibles por 100 pero no por 400 NO son años bisiestos (por ejemplo, 1700, 1800 y 
  // 1900 NO fueron años bisiestos, NI 2100 será un año bisiesto) ,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  it("Todos los años divisibles por 100 pero no por 400 SON años bisiestos (así, por ejemplo, 1700 fue un año bisiesto)", () => {
    expect(anioBisiesto(1700)).toEqual("El anio " + 1700 + " es un anio bisiesto");
  });
  it("Todos los años divisibles por 100 pero no por 400 SON años bisiestos (así, por ejemplo, 1800 fue un año bisiesto)", () => {
    expect(anioBisiesto(1800)).toEqual("El anio " + 1800 + " es un anio bisiesto");
  });
  it("Todos los años divisibles por 100 pero no por 400 SON años bisiestos (así, por ejemplo, 1810 fue un año bisiesto)", () => {
    expect(anioBisiesto(1810)).toEqual("El anio " + 1810 + " es un anio bisiesto");
  });
  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

  // Todos los años No divisibles por 4 NO son años bisiestos (por ejemplo, 2017, 2018, 2019)
  it("Todos los años divisibles por 100 pero no por 400 SON años bisiestos (así, por ejemplo, 2017 no fue un año bisiesto)", () => {
    expect(anioBisiesto(2017)).toEqual("El anio " + 2017 + " no es un anio bisiesto");
  });
  it("Todos los años divisibles por 100 pero no por 400 SON años bisiestos (así, por ejemplo, 2018 no fue un año bisiesto)", () => {
    expect(anioBisiesto(2018)).toEqual("El anio " + 2018 + " no es un anio bisiesto");
  });
  it("Todos los años divisibles por 100 pero no por 400 SON años bisiestos (así, por ejemplo, 2019 no fue un año bisiesto)", () => {
    expect(anioBisiesto(2019)).toEqual("El anio " + 2019 + " no es un anio bisiesto");
  });
  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  
});