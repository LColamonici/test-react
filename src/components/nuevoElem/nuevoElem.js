import React, { useState } from "react";
import "./nuevoElem.css"
import Boton from "../boton/boton";

function NuevoElem(props){
    let [texto_nuevo, cambiar_texto]=useState("");
    const agregar_elemento_handler = event=>{
        event.preventDefault();

        const nuevo={
            id:Math.random(),
            txt:texto_nuevo
        };
        cambiar_texto("");
        props.onAddElem(nuevo);
    }

    const handler_cambio_texto = event=>{
        //texto_nuevo = event.target.value;
        cambiar_texto(event.target.value);
    }

    return (
    <form className="formulario" onSubmit={agregar_elemento_handler}>
        <input type="text" value={texto_nuevo} onChange={handler_cambio_texto}/>
        <Boton texto="agregar" tipo="submit"/>
    </form>
    );
}

export default NuevoElem;