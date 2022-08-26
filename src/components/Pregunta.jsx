import React, {useState} from 'react'   
import Styles from './Pregunta.module.css'
import Error from './Error';


const Pregunta = () => {
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
            return;
        }
        setError(false);
    }
    return (
        <>
            <h2 className={Styles.h2_titular}>Coloca tu Presupuesto </h2>
            
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
            {error? <Error mensaje='El Preuspuesto es incorrecto'/> : null}
        </>
    );
}
export default Pregunta;