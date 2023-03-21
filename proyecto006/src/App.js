/* Las componentes son una característica fundamental de React. 
Nos permiten dividir la aplicación en trozos de nuestra interfaz visual con objetivos bien definidos: 
'menú de opciones', 'formulario de búsqueda', 'ventanas de mensajes', 'tablas de datos' etc.*/
import './App.css';
import Dado from "./Dado";
import { useState } from 'react';

function App() {
  function generarValor() {
    return Math.trunc(Math.random() * 6) +1
  }
  /*
  La función tirar() modifica el 'estado' llamando a la función setNumero de cada variable de estado, 
  esto hace que se actualicen en pantalla los nuevos valores de cada dado sin tener que recargar toda la página:
  */
  function tirar() {
    setNumero1(generarValor())
    setNumero2(generarValor())
    setNumero3(generarValor())
  }
  /*
  Guardamos el estado de tres valores aleatorios en numero1, numero2 y numero3. Además recordemos que inicializamos 
  tres variables con las funciones que se llamarán cuando necesitemos cambiar los valores de las variables de estado:
  */
  const [numero1, setNumero1] = useState(generarValor())
  const [numero2, setNumero2] = useState(generarValor())
  const [numero3, setNumero3] = useState(generarValor())
    return (
      <div>
        <Dado valor={numero1} />
        <Dado valor={numero2} />
        <Dado valor={numero3} />   
        <button onClick={tirar}>Tirar</button>             
      </div>   
  );
}

export default App;
