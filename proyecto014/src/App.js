import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  /* En la variable de 'estado' 
  almacenamos un string inicialmente vacío: */
  const [texto, setTexto] = useState('')

  function cambioTexto(e) {
    setTexto(e.target.value)
  }

  return (
    /* En bloque JSX disponemos un control de tipo 
    'textarea' e inicializamos la propiedad 
    'value' con el 'estado' y escuchamos eventos de 
    cambio para procesar 
    la entrada de datos y sincronizar el 'estado': */
    <div>
      <p><textarea value={texto} onChange={cambioTexto} cols="100" rows="5"></textarea></p>
      <p>Cantidad de caracteres ingresados: {texto.length}</p>
      <p><textarea value={texto} onChange={cambioTexto} cols="100" rows="5"></textarea></p>
    </div>
  );
}

export default App;
