//Se crea en la ubicación "src" para usarlo en todas las clases
export const HelperRevisarPresupuesto = (presupuesto, restante) => {
    let clase;
    if ((presupuesto / 4 ) > restante ) { //indica que ya consumimos el 25%
        clase = 'alert alert-danger';
    }else if ((presupuesto / 2 ) > restante ) { // 50% consumido
        clase = 'alert alert-warning';        
    }else{
        clase = 'alert alert-success';
    }
    return clase;
}