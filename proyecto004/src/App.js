import logo from './logo.svg';
import './App.css';

/* Un Hook de estado es una función especial que nos permite conectarnos a las funciones de la librería de Reac 
 Debemos importar la función 'useState' si queremos administrar Hook de estados:
 import React, { useState } from 'react';
*/
import React, { useState } from 'react';




function App() {
  function generarAleatorio() {
    const v = Math.trunc(Math.random() * 10);
    setNumero(v)
  }
  /* Llamamos a la función useState y definimos el valor inicial, 
  en nuestro caso el valor entero cero, la función retorna un arreglo 
  con dos valores que se almacenan en numero y setNumero 
  (podemos definir cualquier nombre para estas dos variables): */
  const [numero, setNumero] = useState(0);

  return (
    <div>
    <p>Número aleatorio: {numero}</p>
    <button onClick={generarAleatorio}>Generar número aleatorio</button>
  </div>
  );
}

export default App;

/*  
Cuando se llama a la función 'setNumero' modificamos la variable de estado, 
con esto la librería React se encarga de ejecutar nuevamente la graficación de 
la componente pero solo actualizando los estados cambiados y sin tener que 
redibujar la página completa (tener en cuenta que se ejectua nuevamente 
  la función App, pero no se crea e inicializa nuevamente 
  la variable de estado con 
  cero. La documentación de 
  React informa que se definió 
  el nombre de la función 'useState' en lugar de 'createState' 
debido a que solo la primera vez que se llama a 
'useState' se crea la variable de estado e inicializa en nuestro ejemplo con cero)

*/