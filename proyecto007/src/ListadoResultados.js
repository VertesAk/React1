function ListadoResultados(props) {
    return (
      <ul>
        {props.resultados.map((elemento) => 
          <li>La suma de {elemento.valor1} y {elemento.valor2} es {elemento.resultado}</li>
        )}
      </ul>
    );
  }
  
  export default ListadoResultados;

  /* 
  El parámetro 'props' dispone de una propiedad llamada 'resultados' que llegará desde la componente 'App'. 
  La misma es un vector con componentes de tipo objeto que almacenan los dos valores y el resultado de su suma.
  */