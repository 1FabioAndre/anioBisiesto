function anioBisiesto(anio){
    const salida = `El anio ${anio}`;
    let conf = false;
    if(anio % 400 == 0){
        conf = true;
    }
    else{
        if(anio % 10 == 0){
            conf = true;
        }
        else{
            // Todos los años divisibles por 4 pero no por 100 SON años bisiestos (por ejemplo, 2008, 2012, 2016),
            if(anio % 4 == 0 && anio % 100 != 0){
                conf = true;
            }
        }
    }
    if(conf == true){
        return `${salida} es un anio bisiesto` 
    }
    else{
        return `${salida} no es un anio bisiesto` 
    }
}

export default anioBisiesto;