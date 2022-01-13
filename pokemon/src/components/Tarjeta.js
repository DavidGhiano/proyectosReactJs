import React from 'react'

const Tarjeta = ({ pokemon, id, guardarId }) => {
    
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png`;
    const nombre = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase();

    const salvarId = () => {
        guardarId(id);
    }

    return ( 
        <div className="col">
            <div className="card puntero" onClick={salvarId}>
                <img 
                    src={ url }
                    className="card-img-top p-4" 
                    alt={ pokemon.name }/>                        
                <div className="card-body">
                    <h4 className="card-title text-center">
                        { nombre }
                        <span className="badge rounded-pill bg-danger ms-3">
                            { id }
                        </span>
                    </h4>
                </div>
            </div>
        </div>
     );
}
 
export default Tarjeta;