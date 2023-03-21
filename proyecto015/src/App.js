import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [dia,setDia]=useState('Lunes')
    const [dias,setDias]=useState(['Lunes','Miércoles'])
/* Cuando se dispara el evento de cambio 
cuando el operador selecciona una o más opciones procedemos a verificar cuales son las seleccionadas y 
generar un nuevo vector que le asignaremos a la variable de estado de la componente llamada dias y accedida por la función setDias: */
  function cambioDias(e) {
    const opciones = e.target.options
    const seleccionadas = []
    for (let i = 0; i < opciones.length; i++) {
      if (opciones[i].selected) {
        seleccionadas.push(opciones[i].value)
      }      
    }    
    setDias(seleccionadas)
  }

  function cambioDia(e) {
    setDia(e.target.value)
  }

  return (
    <div>
      <p><select value={dia} onChange={cambioDia}>
      <option>Lunes</option>
      <option>Martes</option>
      <option>Miércoles</option>
      <option>Jueves</option>
      <option>Viernes</option>
      <option>Sábado</option>
      <option>Domingo</option>
      </select></p>
      <p>Día seleccionado:{dia}</p>
       <hr />
            <p><select multiple value={dias} onChange={cambioDias}>
      <option>Lunes</option>
      <option>Martes</option>
      <option>Miércoles</option>
      <option>Jueves</option>
      <option>Viernes</option>
      <option>Sábado</option>
      <option>Domingo</option>
      </select></p>
      Días seleccionados:{dias.map((dia)=>{
          return (<p>{dia}</p>)
        }
        )}
    </div>
   

  );
}

export default App;