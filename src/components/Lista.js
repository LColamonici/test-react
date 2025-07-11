import "./Lista.css"
import React from "react"

function Lista(props){
    return (
        <ul className="listaElementos">
            {props.contenido.map((goal)=>{
                return (<li>{goal.txt}</li>);
            })}
        </ul>
    );
}

export default Lista;