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
        <button type="submit">agregar</button>
    </form>
    );
}

export default NuevoElem;