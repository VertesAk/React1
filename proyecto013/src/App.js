import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [numero, setNumero] = useState('')
/* 
Finalmente e la función cambioNumero controlamos 
que todos los caracteres cargados en el control 
sean '1' y '0', en caso afirmativo procedemos 
a modificar el 'estado' y como sabemos 
el 'estado' está asociado a la propiedad 'value' del control:
*/
  function cambioNumero(event) {
    const entrada = event.target.value;
    let cant = 0;
    for (let x = 0; x < entrada.length; x++)
      if (entrada[x] === '0' || entrada[x] === '1')
        cant++;
    if (cant === entrada.length)
      setNumero(entrada)
  }

  return (
    <div>
      <p>Ingrese un número binario:
        <input type="text" value={numero} onChange={cambioNumero} />
      </p>
    </div>
  );
}

export default App;
