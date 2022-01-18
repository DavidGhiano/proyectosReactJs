import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [ recetas, guardarRecetas ] = useState([]);
    const [ busqueda, buscarRecetas ] = useState({
        nombre: '',
        categoria: ''
    });
    const [ consultar, guardarConsultar ] = useState(false);

    const { nombre, categoria } = busqueda;

    useEffect( () => {
        if(consultar) {
            const obtenerRecetas = async () => {    
                let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php`;
                if(nombre !== '') {
                    url += `?i=${ nombre }`;
                    if(categoria !== '') url += `&c=${ categoria }` ;
                }else if( categoria!=='') url += `?c=${ categoria }`;

                const resultados = await axios.get(url);
                guardarRecetas(resultados.data.drinks);
            }
            obtenerRecetas()
        }
    }, [busqueda])

    return (
        <RecetasContext.Provider
            value = {{
                buscarRecetas, 
                guardarConsultar, 
                recetas
            }}
        >
            { props.children }
        </RecetasContext.Provider>
    );
}
 
export default RecetasProvider;