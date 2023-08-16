import React from 'react'

//Modulo para validar tipos de datos
import PropTypes from 'prop-types'


//Recibiendo el objeto y accediendo al valor asi {prop.nombre}
//export const TercerComponente = (props) => {

//De esta manera seteamos los valores desde aqui:
//export const TercerComponente = ({nombre= "Pepe", apellido="Perez", ficha_medica = "1,72"}) => {
//o Desestructurando la varible y accediendo directamente al valor enviado desde App.js
export const TercerComponente = ({nombre, apellido, ficha_medica}) => {
  //console.log(props);
  return (

    <div>
      <h1>Comunicación entre componentes</h1>
      <ul>
        <li>
          {nombre}
        </li>
        <li>
          {apellido}
        </li>
        <li>
          {ficha_medica.altura}
        </li>
        <li>

        </li>
      </ul>

    </div>
    
  )
}

//Funcion para validar tipos de datos por medio de la libreria PropTypes de react. También se puede validar que sea requerido
TercerComponente.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido : PropTypes.string,
  ficha_medica: PropTypes.object
}
