import React,{useState, useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';


const App = () => {
    //Definir el state
    const[presupuesto, setPresupuesto] = useState(0);
    const[restante, setRestante] = useState(0);
    const [mostrarPregunta, setMostrarPregunta] = useState(true);
    const [gastos, setGastos] = useState([]);
    const [gasto, setGasto] = useState({});
    const [crearGasto, setCrearGasto] = useState(false);



    //useEffect que actualiza el restante
    useEffect(()=>{
        if (crearGasto) { //Se usa para controlar el state
            setGastos(
                [...gastos, gasto] //gasto = objeto recibido del Formulario en setGasto
            );
        }  
        //Resta del presupuesto actual
        setRestante(restante - gasto.cantidadGasto);

        //Resetear a false una vez que se ejecute
        setCrearGasto(false);     
    },[gasto, crearGasto,gastos]); // [gasto] Tenía solo este,pero me daba alertas "Warning" para que también controle esos



    // Agregar nuevo gasto  ///Se reeemplazó por el useEffect
/*     const agregarNuevoGasto = (gasto) => { //Se recibe desde el formulario
        setGastos(
            [...gastos, gasto]
        );
    } */


    return (
        <>
            <div className="container">
                <header>
                    <h1>Gasto Semanal</h1>
                </header>
                <div className="contenido-principal contenido">
                {mostrarPregunta?  //Se llama carga condicional de un componente
                    <Pregunta
                        setPresupuesto={setPresupuesto}
                        setRestante={setRestante}
                        setMostrarPregunta={setMostrarPregunta}
                    />                
                :
                    <div className="row">
                        <div className="one-half column">
                            <Formulario 
                                setGasto={setGasto}
                                setCrearGasto={setCrearGasto}
                                //restante={restante} //Para validar el monto
                                
                            />{/* agregarNuevoGasto={agregarNuevoGasto}  restante={restante}  setRestante={setRestante}*/}
                        </div> {/*one-half column <-Skeleton*/}
                        <div className="one-half column">
                            <Listado
                                key={gastos.id}
                                gastos={gastos}

                            />
                            <ControlPresupuesto
                                presupuesto={presupuesto}
                                restante={restante}
                            />
                        </div>                        
                    </div>                    
                }
                </div>
            </div>
        </>
    );
}
export default App;