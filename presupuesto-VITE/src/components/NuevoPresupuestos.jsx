import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ( { 
    presupuesto,
    setPresupuesto, 
    isValidPresupuesto, 
    setIsValidPresupuesto
}) => {

    const [ mensaje, setMensaje ] = useState("");

    const handlerPresupuesto = (e) =>{ 
        e.preventDefault();

        if( !presupuesto || presupuesto < 0 ){
            setMensaje('No es un presupuesto válido');
            return
        }

        setMensaje('');
        setIsValidPresupuesto( true );

        
    }

    return (  
        <div 
            className="contenedor-presupuesto contenedor sombra"
        >
            <form
                className="formulario"
                onSubmit={ handlerPresupuesto }
            >
                <div className="campo">
                    <label>Definir Presupuesto</label>
                    <input
                        className="nuevo-presupuesto"
                        type="number"
                        min='0'
                        placeholder="Añade tu presupuesto"
                        value={ presupuesto }
                        onChange={ e => setPresupuesto( Number( e.target.value ) )}
                    />
                </div>

                <input 
                    type="submit"
                    value="Añadir"
                />

                { mensaje && <Mensaje tipo="error">{ mensaje }</Mensaje> }
            </form>
        </div>
    );
}
 
export default NuevoPresupuesto