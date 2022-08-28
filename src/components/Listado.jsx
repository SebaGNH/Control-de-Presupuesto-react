import React from 'react';
import Gasto from './Gasto';

const Listado = ({gastos}) => {

    
    return (
        <>
            <h2>Listado</h2>
            <div className="gastos-realizados">
                {gastos.map( (gasto)=> (
                    <Gasto 
                        key={gasto.id}
                        gasto={gasto}
                        />                    
                ))}
            </div>
        </>
    );
}
//<h2 key={gasto.id}>{gasto.nombreGasto} {gasto.cantidadGasto}</h2>
export default Listado;