import React from "react";
import "./botonera.css"
import Boton from "./boton";

function Botonera(props)
{
    return (
        <div className="Botonera">
            {props.contenido.map((boton)=>{return <Boton texto={boton.txt} />})}
        </div>
    );
}

export default Botonera;