import React,{useState} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';

const App = () => {
    //Definir el state
    const[presupuesto, setPresupuesto] = useState(0);
    const[restante, setRestante] = useState(0);
    const [mostrarPregunta, setMostrarPregunta] = useState(true);


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
                        <div className="one-half column"><Formulario/></div> {/*one-half column <-Skeleton*/}
                        <div className="one-half column">2</div>
                    </div>                    
                }
                </div>
            </div>
        </>
    );
}
export default App;