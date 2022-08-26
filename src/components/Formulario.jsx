import React, {useState} from 'react';
import Styles from './Formulario.module.css'
import Error from './Error';
const Formulario  = () => {
    const [nombreGasto, setNombreGasto] = useState('');  
    const [cantidadGasto,setCantidadGasto] = useState(0);
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
export default Formulario ;