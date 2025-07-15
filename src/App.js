import './App.css';
import React, { useState } from "react";
import Lista from './components/lista/Lista';
import Botonera from './components/botonera/botonera';
import NuevoElem from './components/nuevoElem/nuevoElem';

function App() {
  const [contenidoLista, setContenidoLista] = useState([
    {id:1, txt:"primera"},
    {id:2, txt:"segunda"},
    {id:3, txt:"tercera"},
    {id:4, txt:"cuarta papaaaa"}
  ]);

  const botones=[
    {id:1, txt:"soy un boton dinamico!"},
    {id:2, txt:"soy otro boton dinamico!"},
    {id:3, txt:"soy Bob"},
  ];

  function agregar_elemento_handler(elem){
    //contenidoLista.push(elem);
    setContenidoLista((lista_prev)=>[...lista_prev, elem]);
    
  }

  return (
  <div className='App'>
    <h1>titulo re fachero para una app re fachera</h1>
    <Botonera contenido={botones}/>
    <NuevoElem onAddElem={agregar_elemento_handler}/>
    <Lista contenido={contenidoLista} />
  </div>
  );
}



export default App;