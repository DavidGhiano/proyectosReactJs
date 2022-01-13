import React from 'react';
import Type from './Type';





const Types = ( { tipos } ) => {

 

    return (
        <div className="text-center">
            {tipos.map( (tipo) => 
                <Type
                    tipo = { tipo.type.name }
                />
            )}
        </div>
        
    );
}
 
export default Types;