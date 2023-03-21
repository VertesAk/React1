import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ListadoResultados from './ListadoResultados';
import FormularioNumeros from './FormularioNumeros';

function App() {

  const [operaciones, setOperacion] = useState([])
 /*
 Cada vez que se presiona el botón sumar se ejecuta la función 'sumar' 
 donde agregamos al estado un nuevo elemento al principio del vector, 
 esto hará que se actualice la lista de resultados en la página sin tener que recargarla:
 */
  function sumar(event) {
    event.preventDefault();
    const v1 = parseInt(event.target.valor1.value, 10)
    const v2 = parseInt(event.target.valor2.value, 10)
    const suma = v1 + v2
    const nuevo = {
      resultado: suma,
      valor1: v1,
      valor2: v2
    }
   /* Para actualizar el estado en la variable 'operaciones' de manera correcta, necesitamos pasar otro arreglo completo. 
   Utilizamos el operador spread para descomponer el vector actual y agregar como primer elemento la nueva operación: */
    setOperacion([nuevo, ...operaciones])
    event.target.valor1.value = ''
    event.target.valor2.value = ''
  }

  return (
    <div>
    <FormularioNumeros onSumar={sumar} />
      <ListadoResultados resultados={operaciones} />
    </div>
  );
}

export default App;
