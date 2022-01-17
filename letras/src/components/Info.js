import React from 'react'

const Info = ({ info }) => {

    const { strArtist, intBornYear, strArtistThumb, strGenre, strBiographyES, strBiographyEN, strTwitter, strFacebook } = info

    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Información Artista
            </div>
            <h3 className="text-center mt-2">{ strArtist } <small>({ intBornYear })</small></h3>
            <div className="card-body">
                <img src={ strArtistThumb } alt="Logo artista"/>
                <p className="card-text genero">Género: { strGenre }</p>
                <h2 className="card-text">Biografía:</h2>
                <p className="card-text">
                    { strBiographyES != null
                        ? strBiographyES
                        : strBiographyEN
                    }
                </p>
                <p className="card-text text-center">
                    { 
                        (strFacebook != null && strFacebook !== '')
                        ?   <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i>
                            </a>
                        : null
                    }
                    
                    {
                        (strTwitter != null && strTwitter !== "1")
                        ?   <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                        : null
                    }
                    
                    {  
                        info.strLastFMChart != null
                        ?   <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-lastfm"></i>
                            </a>
                        : null
                    }
                    
                </p>
            </div>
        </div>
    );
}
 
export default Info;