function anioBisiesto(anio){
    const salida = anio;
    if(anio % 400 == 0){
        return `El anio ${salida} es un anio bisiesto`
    }
}

export default anioBisiesto;