// para iniciar colocar el rafc. esto crea la estructura básica de react
import React from 'react'



export const EventosComponente = () => {

    const hasDadoClick = (e, nombre)=>{
        alert("has dado click al boton " + nombre);
    }

    const hasDadoDobleClick = (e, nombre)=>{
        alert("has dado Doble click al boton " + nombre);
    }

    const eventoMouseSaleEntra = ((e, texto)=>{
        // alert(`Has realizado el ${texto} del Mouse`);
        console.log(`Has realizado el ${texto} del Mouse`)
    })

    const estasAdentro = e =>{
        console.log("Estas dentro del input. Introduce tu nombre");
    }

    const estasAfuera = e =>{
        console.log("Estas fuera del input");
    }


  return (
    <div>
        <h1>EventosComponente</h1> 
        {/*Evento click*/}
        <button onClick={ 
            //Para que no se ejecute el evento al cargar la página tenemos que colocar el evento de primero antes de la función "hasDadoCLick"
            e=> hasDadoClick(e, "Eduardo")
        }>Give me click!</button>

        <button onDoubleClick={ 
            //Para que no se ejecute el evento al cargar la página tenemos que colocar el evento de primero antes de la función "hasDadoCLick"
            e=> hasDadoDobleClick(e, "Mosalvete")
        }>Give me double click!</button>

        <div id="caja" 
            onMouseEnter={e => eventoMouseSaleEntra(e, "Mouse in")}
            onMouseLeave={e => eventoMouseSaleEntra(e, "Mouse out")}>
            {/*Evento onMouseEnter onMouseLeave */}
            Pasa por encima
        </div>

        <p>
            <input type='text' placeholder='Introduce el nombre' 
            onBlur={estasAfuera}  
            onFocus={estasAdentro}
            />
        </p>
    
    </div>
  )
}
