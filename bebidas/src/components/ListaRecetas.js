import React, { useContext } from 'react'
import { RecetasContext } from '../context/RecetasContext';
import Receta from './Receta';

const ListaRecetas = () => {
    const { recetas } = useContext(RecetasContext)

    const Component = 
        (recetas !== undefined) 
        ? (recetas.map(receta =>(
            <Receta 
                key={receta.idDrink}
                receta = { receta }
            />            
            )))
        : (<p className="text-center">No se encontró resultados</p>);
    


    return ( 
        <div className="row mt-5">

            { Component }
                



        </div>
    );
}
 
export default ListaRecetas;