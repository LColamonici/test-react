import React from "react";
import "./nuevoElem.css"
import Boton from "../boton/boton";

function NuevoElem(props){

    const agregar_elemento_handler = event=>{
        event.preventDefault();

        const nuevo={
            id:Math.random(),
            txt:"asdfg"
        };
        props.onAddElem(nuevo);
    }

    return (
    <form className="formulario" onSubmit={agregar_elemento_handler}>
        <input type="text"/>
        <Boton texto="agregar" tipo="submit"/>
    </form>
    );
}

export default NuevoElem;