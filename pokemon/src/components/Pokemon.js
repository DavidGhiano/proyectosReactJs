import React, { useState,useEffect }  from 'react'
import Stats from './Stats';
import Types from './Types';

const Pokemon = ( { pokemon, guardarId, guardarSeleccionado }) => {
    
    const urlImagen = pokemon.sprites.other.dream_world.front_default;

    const tipos = pokemon.types;

    const volver = () => {
        guardarId(0);
        guardarSeleccionado(false);
    };
    const [ dato, guardarDato ] = useState('');

    let arreglo = [];

    const obtenerDatos = async (index) =>{
        const url = `https://pokeapi.co/api/v2/pokemon-species/${ index }`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        guardarDato(resultado.flavor_text_entries[89].flavor_text);
    };

    useEffect( () => {
        obtenerDatos(pokemon.id);
    }, [])

    return ( 
        <div className="mb-5">
            <h1 className="text-center">
                <img 
                    src={ pokemon.sprites.front_default }
                    alt="imagen en miniatura"
                />
                { pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase() }
            </h1>
            <Types tipos = { tipos }/>
            <hr/>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-4">
                    <img 
                        src={ urlImagen }
                        alt={ pokemon.name }
                        className="rounded mx-auto d-block"
                    /><br/>
                    <div className="d-grid gap-2">
                        <button 
                            className="btn btn-outline-danger"
                            onClick= {volver}
                        >Regresar</button>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mt-4">
                    <p><strong>Número en pokedex:</strong> { pokemon.id } </p>
                    <p><strong>Peso:</strong> { (pokemon.weight / 10) } Kg </p>
                    <p><strong>Altura:</strong> { (pokemon.height / 10) } Kg </p>
                    <p><strong>Datos:</strong></p> 
                    <p>{ dato }</p>

                </div>
                <div className="col-12 col-md-6 col-lg-4 mt-4">
                    <div className="card bg-danger text-white">
                        <div className="card-body">
                            <h4 className="card-title text-center">Estadística Base</h4>
                            {pokemon.stats.map( stat =>
                                <Stats
                                    stat= { stat }
                                />
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Pokemon;
<h1>Hola</h1>