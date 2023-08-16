//importar modulos

import React, { Fragment } from "react";

//funcion del componente
const MiComponente =() =>{

    let nombre = "Carlos";
    let apellido = "Cardona";
    let obj = {
        direccion: "Versalles",
        descripcion: "Enseguida de confa"
    }

    //Todos los componentes deben ir dentro de un contenedor como framgment, div, etc 
    return(
        <Fragment>
        <h2>Este es MiComponente</h2>
        <h3>Datos del usuario: </h3>
        <ul>
            <li>NodeJs</li>
            <li>NoSql</li>
            <li>ReactJs</li>
            <li>Nombre: {nombre}</li>
            <li>Apellido: {apellido}</li>
            <li>direccion: {obj.direccion}</li>
            <li>Descripción: {obj.descripcion}</li>
            
        </ul>
        </Fragment>
    ) 
};


//Eportar

export default MiComponente;