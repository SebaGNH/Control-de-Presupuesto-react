import React, {useState} from 'react'   
import PropTypes from 'prop-types'
import Styles from './Pregunta.module.css'
import Error from './Error';


const Pregunta = ({setPresupuesto,setRestante,setMostrarPregunta}) => {
    //Defninir useState
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);
    //función que lee el presupuesto
    const definirPresupuestoHandler= (e) =>{
        setCantidad(parseInt(e.target.value, 10)); //Base 10
    }

    // Submit para definir el presupuesto
    const submintHandler = (e)=>{
        e.preventDefault();
        //Validar
        if (cantidad <= 0 || isNaN(cantidad)) {
            setError(true);
            setMostrarPregunta(true);
            return;
        }
        setError(false);
        setMostrarPregunta(false);
        setPresupuesto(cantidad); //Se las mandamos al state de "App"
        setRestante(cantidad);
    }


    
    return (
        <>
            <h2 className={Styles.h2_titular}>Coloca tu Presupuesto </h2>
            
            {error? <Error mensaje='El Preuspuesto es incorrecto'/> : null}

            <form action="" onSubmit={submintHandler}>
                <input 
                    type="number" 
                    name="" 
                    className='u-full-width'
                    placeholder='Colocá tu presupuesto'
                    onChange={definirPresupuestoHandler}
                    />

                <input 
                    type="submit"
                    className='button-primary u-full-width' 
                    value="Definir Presupuesto" 
                />
            </form>
        </>
    );
}


Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setMostrarPregunta: PropTypes.func.isRequired,
}

export default Pregunta;