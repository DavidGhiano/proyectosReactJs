import React, { useContext, useState } from 'react'
import { ModalContext } from '../context/ModalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({ receta }) => {

    const [ modalStyle ] = useState(getModalStyle);
    const [ open, setOpen ] = useState(false);

    const classes = useStyles();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const { idDrink, strDrink, strDrinkThumb } = receta;
    const { guardarIdReceta, guardarReceta, info } = useContext( ModalContext );

    const { strInstructions, strInstructionsES } = info

    const mostrarIngrediente = (info) => {
        let ingredientes = []
        for( let i = 1; i<16; i++){
            if( info[`strIngredient${ i }`] !== null ){
                ingredientes.push(
                    <li>
                        { info[`strIngredient${ i }`]}: {info[`strMeasure${ i }`]}
                    </li>
                )
            }
        }
        return ingredientes; 
    }

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{ strDrink }</h2>
                <img 
                    className="card-img-top"
                    src={ strDrinkThumb }
                    alt={ `Imagen de ${ strDrink }` }/>

                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={ () => {
                            guardarIdReceta(idDrink)
                            handleOpen();
                        }}
                    >
                        Ver Receta
                    </button>

                    <Modal
                        open={ open }
                        onClose ={ ()=> {
                            guardarIdReceta(null);
                            guardarReceta({})
                            handleClose();
                        }}
                    >
                        <div style ={ modalStyle } className={ classes.paper }>
                            <h2>{ strDrink }</h2>
                            <h3 className="mt-4"> Instrucciones </h3>
                            {
                                strInstructionsES !== null
                                ?<p> { strInstructionsES } </p>
                                :<p> { strInstructions }</p>
                            }
                            
                            <img className="img-fluid my-4" src= { strDrinkThumb } alt = { strDrink }/>

                            <h3>Ingredientes y cantidades</h3>
                            <ul>
                                { mostrarIngrediente(info) }
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}
 
export default Receta;