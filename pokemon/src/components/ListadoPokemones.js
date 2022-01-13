import React from 'react'
import Tarjeta from './Tarjeta';

const ListadoPokemones = ({ pokemones, guardarId }) => {
    


    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            { pokemones.map( pokemon => 
                <Tarjeta
                    key={parseInt(pokemon.url.slice(34))}
                    id = {parseInt(pokemon.url.slice(34))}
                    pokemon = { pokemon }
                    guardarId = { guardarId }
                />
            )}
        </div>
    );
}
 
export default ListadoPokemones;