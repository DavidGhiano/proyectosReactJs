import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import Error from './Error'
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';
import PropTypes from 'prop-types';


const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .4s ease;

    &:hover{
        background-color: #326ac0;
        cursor: pointer;
    }
`;


const Formulario = ({guardarMoneda,guardarCripto}) => {

    //State del criptomoneda

    const [ listaCriptos, guardarCriptos ] = useState([]);
    const [ error, guardarError ] = useState(false);

    const MONEDAS = [
        {codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'ARS', nombre: 'Peso Argentino'}
    ];
    // Utlizar useMoneda    
    const [ moneda, SelectMonedas] = useMoneda('Elige tu Moneda','',MONEDAS);
    const [ criptomoneda, SelectCripto] = useCriptomoneda('Elige tu Criptomoneda','',listaCriptos);

    //Llamar a la api
    useEffect( () => {
        const consultarAPI = async() => {
            if(listaCriptos.length === 0){
                const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
                const resulta = await  axios.get(url);
                guardarCriptos(resulta.data.Data);
            }
        }
        consultarAPI();
    }, []);

    const cotizarMoneda = e =>{
        e.preventDefault();

        if(moneda === '' || criptomoneda === ''){
            guardarError(true);
            return
        }

        guardarError(false);
        guardarMoneda(moneda);
        guardarCripto(criptomoneda)


    }
    return (
        <form
            onSubmit={cotizarMoneda}
        >

            {error ? <Error mensaje="Todos los campos son obligatorios."/> : null}
            <SelectMonedas/>

            <SelectCripto/>
            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
    );
}
 
Formulario.propTypes = {
    guardarMoneda: PropTypes.func.isRequired,
    guardarCripto: PropTypes.func.isRequired
}
export default Formulario;