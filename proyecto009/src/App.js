import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import CoordenadaFlecha from './CoordenadaFlecha';

function App() {

  const [visible, setVisible] = useState(true)

  function ocultar() {
    setVisible(false)
  }
  
  function desencubrir() {
    setVisible(true)
  }
  return (
    <div>
      {visible ? <CoordenadaFlecha /> : <p>Se oculto la coordenada</p>}
      <button onClick={ocultar}>Ocultar</button>
      <button onClick={desencubrir}>desencubrir</button>
    </div>
  );
}

export default App;
