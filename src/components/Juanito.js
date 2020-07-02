//Importar react al empezar cada componente con la siguiente línea de código
//Las siguientes 2 líneas de código se pueden resumir en una de la siguiente manera: import React, {useState} from "react"
import React from "react"
import { useState } from "react"

//Definir una función de tipo flecha para representar el componente
//Los props me permiten definir propiedades de los componentes donde los estoy llamando,
//solo debo agreagar (props) en la función de flecha y asignar las propiedades a usar con: 
//props.<nombre_del_props> 
const Juanito = (props) => {
    //El useState nos permite trabajar con variables, constantes y funciones dentro de react, 
    //para trabajar con el useState podemos trabajar con la siguiente estructura:
    //donde miVariables en el nombre de mi variable
    //donde "setMiVariable" es el nombre la función que modifica el valor de "miVariable"
    //donde "useState(0)" define el valor (1) por default y el tipo de dato (número) de mi variable
    const [ miVariable, setMiVariable ] = useState(0)


    //Definir un return para escribir código "html"(JSX) dentro de mi componente
    //Para escribir variables de javascript dentro de "html"(JSX) hacerlo entre llaves { <variable> }
    return (
        //rocordar siempre agregar una etiqueta vacía o un div como padre del contenido
        <>
            {/* En el siguiente div el texto del está siendo definido por "mivariable" y
            props, el cual se completará cuando importe el componente en otro archivo.
            Revisar en App.js */}
            <h1>mi nombre es {props.name} y mi turno es el n° {miVariable}</h1>
            {/* Los siguientes botones utilizan la función "setMiVariable" para asignar un nuevo
            valor a "miVariable" definida mas arriba. para llamar la función se utiliza el evento de click
            en el botón, llamando el código onClick*/}
            {/* Siempre que trabajamos con eventos (onClick, onChange, etc) deberemos crear la siguiente
            estructura: onClick={ () => funcion() } */}
            
            <button onClick={()=>setMiVariable(miVariable+1)}>Cambio de turno</button>
            <button onClick={()=>setMiVariable(0)}>Reset</button>
        </>
    )
}
//Exportar por defecto la función que representar el componente, para llamarla en archivos de javascript
export default Juanito