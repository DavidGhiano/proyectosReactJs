import React, { Fragment, useState, useEffect } from 'react'
import Header from './components/Header'
import ListadoPokemones from './components/ListadoPokemones';
import Pokemon from './components/Pokemon';



function App() {

  const [ pokemones, guardarPokemones ] = useState([]);
  const [ offset, guardarOffset ] = useState(0);
  const [ pokemon, guardarPokemon ] = useState({});
  const [ id, guardarId ] = useState(0);
  const [ seleccionado, guardarSeleccionado ] = useState(false)
  

 
  useEffect( () => {
    consultarAPi();
  },[])
  useEffect( () => {
    otraConsulta();
  },[id])

  const consultarAPi = async () => {
    const pokemonesPorPagina = 30;
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${ offset }&limit=${ pokemonesPorPagina }`
    
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    guardarPokemones(resultado.results)
    // guardarOffset(offset + pokemonesPorPagina)
  }
  const otraConsulta = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    guardarPokemon(resultado);
    guardarSeleccionado(true);
  }



  return (
    <Fragment>
      <Header
        guardarSeleccionado = {guardarSeleccionado}
        guardarId = { guardarId }
      />
      <div className="container mt-5">
        {
          (!seleccionado) 
          ? <ListadoPokemones
              pokemones = { pokemones }
              guardarId = { guardarId }
            />
          : <Pokemon
              pokemon = { pokemon }
              guardarId = { guardarId }
              guardarSeleccionado = { guardarSeleccionado }
            />
        }
      </div>
    </Fragment>
  );
}

export default App;
