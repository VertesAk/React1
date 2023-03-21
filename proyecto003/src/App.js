import logo from './logo.svg';
import './App.css';
/* 
onClick
onDoubleClick
onMouseEnter
onMouseLeave
onMouseMove
onKeyPress
onKetUp
onSubmit
etc.
*/
function App() {
  return (
<div>
      {/* La función presion propiamente dicha primero detiene el envío de datos al servidor llamando a preventDefault, 
      luego recupera los dos valores ingresados por teclado y muestra su suma: */}
      <form onSubmit={presion}>
        <p>Ingrese primer valor:
          <input type="number" name="valor1" />
        </p>
        <p>Ingrese segundo valor:
          <input type="number" name="valor2" />
        </p>
        <p>
          <input type="submit" value="Sumar" />
        </p>
      </form>
    </div>
  );
}

function presion(e) {
  e.preventDefault();
  const v1=parseInt(e.target.valor1.value, 10);
  const v2=parseInt(e.target.valor2.value, 10);
  const suma=v1+v2;
  alert('La suma es:'+suma);
}

export default App;
