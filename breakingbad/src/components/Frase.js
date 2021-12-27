import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    margin-top: 10rem;

    @media (min-width: 992px){
        margin-top: 10rem;
    }

    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position:relative;
        padding-left: 4rem;

        &::before{
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        text-align: right;
        color: #666;
        margin-top: 2rem;

        &:last-of-type{
            margin-top: 0;
        }
    }
`;

const Frase = ({frase}) => {

    return (
        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p translate="no"><i>{frase.character}</i></p>
            <p translate="no"><strong>{frase.anime}</strong></p>
            {/*<p><strong>{frase.author}</strong></p>*/}
        </ContenedorFrase>
    );
}

Frase.propTypes = {
    frase: PropTypes.object.isRequired
}
 
export default Frase;