//Importar react al empezar cada componente con la siguiente línea de código
import React from 'react';
//Para importar un componente debo definir su nombre con el nombre de su función, antecidida de la 
//palabra "import" y su ruta antecedida de la palabra "from". La ruta de define entre comillas y se 
//utiliza "./" para ingresar a una carpeta y "../" para salir de la carpeta, tomando siempre como refe-
//rencia el archivo desde donde estoy importando el componente. 
import Juanito from './components/Juanito'

const App = () => {
  const miArray = [
    { nombre: "vito" },
    { nombre: "seba" },
    { nombre: "marcia" }
  ]
  return (
    //rocordar siempre agregar una etiqueta vacía o un div como padre del contenido
    <div>
      {/* Para escribir javascript dentro de "html"(JSX) hacerlo entre llaves { javascript } */}
      {
        //En el siguiente código se renderiza un componente desde una función map, a partir del array
        //"miArray", el cual me entregará los nombres para completar la propiedad "name" del componente
        //"Juanito". Ver componente en "components/Juanito.js". Es importante siempre poner un atributo
        //"key" en el elemento mas externo del return de map, el cual puede ser llenado con "i"(index) o
        // id del array si se dispone de dicho dato. 
        miArray.map((item, i) => {
          return (
            < Juanito key={i} name={item.nombre} />
          )
        })

      }
    </div>
  )
}

export default App;
