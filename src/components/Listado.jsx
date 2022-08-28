import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';



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
Listado.propTypes = {
    //Listado recibe la propiedad gastos que es un arreglo y es requerido para que funcione este componente
    gastos: PropTypes.array.isRequired
}
export default Listado;