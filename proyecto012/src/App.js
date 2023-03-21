import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
/* Definimos un Hook de estado con un objeto con tres atributos que almacenarán los valores ingresados en el formulario: */
  const [datos, setDatos] = useState({
    nombre: '',
    edad: '',
    estudios: false
  })
/* En las funciones cambioNombre, cambioEdad y 
cambioEstudio actualizamos el estado respectivo llamando a la función setDatos 
(recordemos que esto hace que se actualice la página solo en aquellos lugares que lo necesiten): */ 
  function cambioNombre(e) {
    setDatos((valores) => ({
      ...valores,
      nombre: e.target.value,
    }))
  }

  function cambioEdad(e) {
    setDatos((valores) => ({
      ...valores,
      edad: e.target.value,
    }))
  }

  function cambioEstudio(e) {
    setDatos((valores) => ({
      ...valores,
      estudios: !datos.estudios,
    }))
  }

  function procesar(e) {
    e.preventDefault();
    alert('Dato cargado ' + datos.nombre + ' ' 
      +datos.edad + ' ' 
      +datos.estudios);
  }

  return (
    /* En el bloque JSX mostramos 
    los datos actuales de la variable de estado 
    asignando a la propiedad value el 
    valor almacenado en cada atributo del objeto: */
    <div>
      <form onSubmit={procesar}>
        <p>Ingrese nombre:<input type="text" value={datos.nombre} onChange={cambioNombre} /></p>
        <p>Ingrese edad:<input type="number" value={datos.edad} onChange={cambioEdad} /></p>
        <p>Estudios:<input type="checkbox" value={datos.estudios} onChange={cambioEstudio} /></p>
        <p><input type="submit" /></p>

      </form>
      <hr />
      {/* También definimos para cada evento onChange un método que sincronizará el control con el 'estado'.

      Mostramos los valores almacenados en todo momento en la variable de estado: */}
      <h3>Datos Ingresados</h3>
      <p>Nombre:{datos.nombre}</p>
      <p>Edad:{datos.edad}</p>
      <p>Estudios:{datos.estudios ? 'con estudios' : 'sin estudios'}</p>
    </div>
  );
}

export default App;