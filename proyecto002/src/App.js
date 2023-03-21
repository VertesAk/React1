import logo from './logo.svg';
import './App.css';
function retornarAleatorio() {
  return Math.trunc(Math.random() * 10);
}
function mostrarTitulo(tit) {
  return (<h1>
    {tit}
  </h1>);
}
function App() {
  const buscadores = ['http://www.google.com',
  'http://www.bing.com',
  'http://www.yahoo.com'];
    const siglo = 21
  const persona = {
    nombre: 'Juan',
    edad: 34
  }
  return (
    <div>
      {/* Debemos disponer obligatoriamente solo un elemento div o cualquier etiqueta que envuelva todo: */}
      <h1>Título nivel 1</h1>
      <hr />
      <p>Estamos en el siglo {siglo}</p>
      <h3>Acceso a un objeto</h3>
      <p>{persona.nombre} tiene {persona.edad} años</p>
      <h3>Llamada a un método</h3>
      <p>Un valor aleatorio llamando a un método.</p>
      {retornarAleatorio()}
      <h3>Calculo inmediato de expresiones</h3>
      3 + 3 = {3 + 3}
      <div>
      <hr/>
      <a href={buscadores[0]}>Google</a><br />
      <a href={buscadores[1]}>Bing</a><br />
      <a href={buscadores[2]}>Yahoo</a><br />
      </div>
      <hr/>
      <div>
      {mostrarTitulo('Hola Mundo')}
      {mostrarTitulo('Fin')}
      </div>
      <hr/>
      <div>
        {/*Debemos utilizar la palabra 'className' en lugar de class 
        (debido a que class es una palabra clave de Javascript) */} 
      <h1 className="recuadro">Titulo 1</h1>
        {/* Si el nombre de la propiedad está formada 
        por más de una palabra luego el primer 
        caracter a partir de la segunda palabra debe ir en mayúsculas */} 
      <input type="text" tabIndex="1" />
      </div>

    </div>
  );
}

export default App;
