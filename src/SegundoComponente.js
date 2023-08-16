import React from 'react'

export const SegundoComponente = () => {

    const libros = ["Quijote", "Harry Potter", "NodeJS desde cero", "La ilustre", "Principito"]
    //const libros = []

  return (
    <div className='segundoComponente'>
        {libros.length >= 1 ? (
            <ul>
            {
                libros.map((libro, indice)=>{
                    return <li key={indice}>{libro}</li>
                })
            }
        </ul>
        ) : (<p>No hay libros</p>)       
    }
        
    </div>
  )
}
