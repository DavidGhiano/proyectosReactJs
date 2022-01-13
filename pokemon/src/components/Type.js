import styled from '@emotion/styled';
import React from 'react'
import Bug from '../img/bug.png';
import Dark from '../img/dark.png';
import Dragon from '../img/dragon.png';
import Electric from '../img/electric.png';
import Fairy from '../img/fairy.png';
import Fighting from '../img/fighting.png';
import Fire from '../img/fire.png';
import Flying from '../img/flying.png';
import Ghost from '../img/ghost.png';
import Grass from '../img/grass.png';
import Ground from '../img/ground.png';
import Ice from '../img/ice.png';
import Normal from '../img/normal.png';
import Poison from '../img/poison.png';
import Psychic from '../img/psychic.png';
import Rock from '../img/rock.png';
import Steel from '../img/steel.png';
import Water from '../img/water.png';

const Imagen = styled.img`
    max-width: 100px;
`;

const Type = ( { tipo } ) => {

    const   consultarTipo =  (tipo)  => {
        switch(tipo){
            case 'bug': return Bug;
            case 'dark' : return Dark;
            case 'dragon' : return Dragon;
            case 'electric' : return Electric;
            case 'fairy' : return Fairy;
            case 'fighting' : return Fighting;
            case 'fire' : return Fire;
            case 'flying' : return Flying;
            case 'ghost' : return Ghost;
            case 'grass' : return Grass ;
            case 'ground' : return Ground;
            case 'ice' : return Ice;
            case 'normal' : return Normal;
            case 'poison' : return Poison;
            case 'psychic' : return Psychic;
            case 'rock' : return Rock;
            case 'steel' : return Steel;
            case 'water' : return Water;
            default: return null;
        };
    }
    return (
        <Imagen
            src={consultarTipo(tipo)}
            alt={ tipo }
            className="mx-2"
        />
    );
}
 
export default Type;