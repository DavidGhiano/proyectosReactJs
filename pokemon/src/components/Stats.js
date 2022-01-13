import React from 'react'

const Stats = ( { stat } ) => {

    const porcentaje = stat.base_stat;
    const styles = { width : `${porcentaje}%`}

    const nombre = stat.stat.name;

    const color = () =>{
        if(porcentaje >= 50 ){
            return "bg-success"
        }else if( porcentaje < 50 && porcentaje >= 25){
            return "bg-warning";
        }else return "bg-danger";
    }
    const clases = `progress-bar progress-bar-striped progress-bar-animated ${color()}`;

    const traducir = (nombre) => {
        switch(nombre){
            case 'hp' : return 'Vida';
            case 'attack': return 'Ataque';
            case 'defense': return 'Defensa';
            case 'special-attack': return 'Ataque Especial';
            case 'special-defense': return 'Defensa Especial';
            case 'speed': return "Velocidad";
            default: return '';
        }
    }

    return (
        <div>
            <h6>{ traducir(nombre) }</h6>
            <div class="progress mb-2">
                <div
                    className= { clases }
                    role="progressbar" 
                    aria-valuenow={ porcentaje } 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                    style={styles}
                >
                    <span className="text-center">
                        <strong>{porcentaje}%</strong>
                    </span>
                </div>
            </div>
        </div>
    );
}
 
export default Stats;