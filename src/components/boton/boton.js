import "./boton.css"
import React from "react"

function Boton(props) {
    //const txt = Boton.texto;
    return (<button type={props.tipo}>{props.texto}</button>);
}

export default Boton;