import React, {useState} from 'react';
import PropTypes from 'prop-types'
import Styles from './Formulario.module.css'
import Error from './Error';
import shortid from 'shortid';


const Formulario  = ({agregarNuevoGasto,setGasto,setCrearGasto,restante,setRestante,gastos}) => {
    const [nombreGasto, setNombreGasto] = useState('');  
    const [cantidadGasto,setCantidadGasto] = useState('');
    const [errorFormulario, setErrorFormulario] = useState(false);

    const definirNombreGasto = (e)=>{
        setNombreGasto(e.target.value);
    }

    const definirCantidadGasto = (e)=>{
        setCantidadGasto(parseInt(e.target.value),10); //Base 10
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validación
        if (nombreGasto.trim() === "" || cantidadGasto <= 0 || isNaN(cantidadGasto)) {
            setErrorFormulario(true);            
            return;
        }
        setErrorFormulario(false);
        

        //Construir gasto
        const gasto = {
            id: shortid.generate(),
            nombreGasto,
            cantidadGasto
        }

        //Pasar gasto al componente principal 'App.js'
        //agregarNuevoGasto(gasto);
        setGasto(gasto);
        setCrearGasto(true); //Una vez que se genere el gasto pasa a true

        //Limpiar Formulario
        setNombreGasto("");
        setCantidadGasto("");

        //Caclular restante
        //setRestante(restante - cantidadGasto);
        
    }



    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <h2>Agregá tus gastos</h2>
                {errorFormulario  ?  <Error mensaje='Presupuesto Incorrecto'/>  :  null}
                <div className={Styles.campo}>
                    <label htmlFor="">Nombre Gasto</label>
                    <input 
                        type="text" 
                        name="" 
                        value={nombreGasto}
                        className='u-full-width'
                        placeholder='Ej. Transporte'
                        onChange={definirNombreGasto}                          
                        />
                </div>

                <div className={Styles.campo}>
                    <label htmlFor="">Cantidad Gasto</label>
                    <input 
                        type="number" 
                        name="" 
                        value={cantidadGasto}
                        className='u-full-width'
                        placeholder='Ej. 300'  
                        onChange={definirCantidadGasto}                           
                        />
                </div>

                <button 
                    type='submit' 
                    className='button-primary u-full-width'
                    >Agregar Gasto
                </button>
            </form>
        </>
    );
}
Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired
}


export default Formulario ;