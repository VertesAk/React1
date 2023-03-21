import logo from './logo.svg';
import './App.css';
//Importamos las dos funciones que necesitamos para crear un hook de variable de estado y un hook de efecto: 
import { useState, useEffect } from 'react';

function App() {

  const [texto, setTexto] = useState("")
/*
Llamamos a la función useEffect y 
le pasamos la función anónima donde actualizamos el título de 
la página con el valor almacenado en la variable de estado 'dato' (para que
   la aplicación sea más eficiente pasamos un segundo parámetro a 
   la función useEffect con un vector que contiene la variable de estado):
*/
/*
Si pasamos un vector vacío como segundo parámetro, 
luego no se actualizará el título de la página 
(si en algún caso queremos que se ejecute el hook una única vez indistintamente 
  la cantidad de veces que se renderize la componente 
  puede tener sentido pasar un array vacío, no es el caso actual):
*/

  useEffect(() => {document.title = texto}, [texto])
/*La función 'cambiar' actualiza la variable de estado, lo cual dispara el hook de efecto:  */
  function cambiar(e) {
    setTexto(e.target.value)
  }

  return (
    <div>
      {/* Cada vez que se carga o borra un caracter (es decir hay un cambio) se dispara la función 'cambiar': */}
      <p><input type="text" onChange={cambiar} /></p>
      <p>{texto}</p>
    </div>
  );
}

export default App;
