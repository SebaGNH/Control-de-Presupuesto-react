import React from 'react'
import PropTypes from 'prop-types'

const Gasto = ({gasto}) => {
    return (
        <>
            <li className="gastos">
                <p>
                    {gasto.nombreGasto}
                    <span className="gasto">$ {gasto.cantidadGasto}</span>
                </p>
            </li>
        </>
    );
}
//Gasto recipe la propiedad "gasto" que es un arreglo y es requerido para funcionar, los key no se documentan
Gasto.prototypes = {
    gasto: PropTypes.object.isRequired
}
export default Gasto;