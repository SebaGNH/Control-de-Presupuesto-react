import React from 'react';
import {HelperRevisarPresupuesto} from '../Helpers'
import PropTypes from 'prop-types'


const ControlPresupuesto = ({presupuesto,restante}) => {

    return (
        <>
            <div className="alert alert-primary">
                Presupuesto:{presupuesto}
            </div>
            <div className={HelperRevisarPresupuesto(presupuesto,restante)}>
                Restante: {restante}
            </div>

        </>
    );
}

ControlPresupuesto.propTypes ={
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
export default ControlPresupuesto;