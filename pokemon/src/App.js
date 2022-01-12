import React, { Fragment, useState, useEffect } from 'react'
import Header from './components/Header'
import ListadoPokemones from './components/ListadoPokemones';


function App() {

  const [ pokemones, guardarPokemones ] = useState([]);
  const [ offset, guardarOffset ] = useState(0);

  useEffect( () => {
    consultarAPi()
  },[])

  const consultarAPi = async () => {
    const pokemonesPorPagina = 30;
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${ offset }&limit=${ pokemonesPorPagina }`
    
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    guardarPokemones(resultado.results)
    // guardarOffset(offset + pokemonesPorPagina)
  }



  return (
    <Fragment>
      <Header/>
      <div className="container mt-5">
        {
        pokemones.length==0 
          ? null
          :<ListadoPokemones
            pokemones = {pokemones}
          />
        }
      </div>
    </Fragment>
  );
}

export default App;
