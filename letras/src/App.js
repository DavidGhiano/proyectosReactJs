import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import axios from 'axios';
import Info from './components/Info';


function App() {

  const [ busquedaLetra, guardarBusquedaLetra ] = useState({});
  const [ letra, guardarLetra ] = useState('');
  const [ info, guardarInfo ] = useState({})

  useEffect( () => {

    if(Object.keys(busquedaLetra).length === 0 ) return;

    const consultalApiLetra = async () =>{
      const { artista, cancion } = busquedaLetra;
      const url = `https://api.lyrics.ovh/v1/${ artista }/${ cancion }`;
      const url2 = `https://theaudiodb.com/api/v1/json/2/search.php?s=${ artista }`;

      const [ letra, informacion ] = await Promise.all([
        axios(url),
        axios(url2)
      ]);

      guardarLetra(letra.data.lyrics);
      if(informacion.data.artists !== null)
        guardarInfo(informacion.data.artists[0]);
      else 
        guardarInfo({});
      guardarBusquedaLetra({});
      
    }
    consultalApiLetra()

  },[ busquedaLetra, info ])

  return (
    <Fragment>
      <Formulario
        guardarBusquedaLetra = {guardarBusquedaLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            { Object.keys(info).length !== 0
              ? <Info info={ info }/>
              : null
            }
          </div>
          <div className="col-md-6">
            { letra !== '' 
                ? <Cancion letra={letra}/> 
                : null }
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;
