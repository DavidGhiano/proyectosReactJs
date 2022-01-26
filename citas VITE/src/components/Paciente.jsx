const Paciente = ( { paciente, setPaciente, eliminarPaciente } ) => {

    const { nombre, propietario, email, fecha, sintomas,id } = paciente;

    const handleEliminar = () => {
        const respuesta = confirm( '¿Deseas eliminar este paciente?' );

        if( respuesta ) eliminarPaciente( id )
    }

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-4 rounded-xl">
            <h2 className="text-2xl font-bold mb-3 text-indigo-600 text-center">{ nombre }</h2>
            <hr/>
            <p className="font-bold mb-3 text-gray-700 uppercase mt-4">Propietario: {''}
                <span className="font-normal normal-case">{ propietario }</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{ email }</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
                <span className="font-normal normal-case">{ fecha }</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                <span className="font-normal normal-case">{ sintomas }</span>
            </p>
            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg"
                    onClick={ () => setPaciente( paciente ) }
                >Editar</button>
                
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg"
                    onClick={ handleEliminar }
                >Eliminar</button>
            </div>
        </div>
    );
}
 
export default Paciente;