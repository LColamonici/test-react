import logo from './logo.svg';
import './App.css';
import React from "react";
import Boton from './components/boton'
import Lista from './components/Lista';

function App() {
  const contenidoLista = [
    {id:1, txt:"primera"},
    {id:2, txt:"segunda"},
    {id:1, txt:"tercera"}
  ];

  return (
  <div className='App'>
    <h1>Hola mundo!!!</h1>
    <div className='Botonera'>
      <Boton texto="soy un boton!"/>
      <Boton texto="soy un segundo boton!"/>
    </div>
    <Lista contenido={contenidoLista} />
  </div>
  );
}



export default App;