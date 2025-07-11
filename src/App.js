import logo from './logo.svg';
import './App.css';
import React from "react";
import Boton from './components/boton'
import Lista from './components/Lista';
import Botonera from './components/botonera';

function App() {
  const contenidoLista = [
    {id:1, txt:"primera"},
    {id:2, txt:"segunda"},
    {id:3, txt:"tercera"},
    {id:4, txt:"cuarta papaaaa"}
  ];

  const botones=[
    {id:1, txt:"soy un boton dinamico!"},
    {id:2, txt:"soy otro boton dinamico!"},
    {id:3, txt:"soy Bob"},
  ];

  return (
  <div className='App'>
    <h1>Hola mundo!!!</h1>
    <Botonera contenido={botones}/>
    <Lista contenido={contenidoLista} />
  </div>
  );
}



export default App;