const Paciente = () => {
    return (
        <div className="m-3 bg-white shadow-md px-5 py-4 rounded-xl">
            <h2 className="text-2xl font-bold mb-3 text-indigo-600 text-center">Haru</h2>
            <hr/>
            <p className="font-bold mb-3 text-gray-700 uppercase mt-4">Propietario: {''}
            <span className="font-normal normal-case">David</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case">correo@correo.com</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
            <span className="font-normal normal-case">10 de febrero 2022</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
            <span className="font-normal normal-case">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, officia. Possimus omnis dolorum, porro quidem minus sapiente, asperiores, eaque hic mollitia distinctio minima alias! Quidem ipsum aspernatur eveniet rerum reiciendis.</span>
            </p>
        </div>
    );
}
 
export default Paciente;