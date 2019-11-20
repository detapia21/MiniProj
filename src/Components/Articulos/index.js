import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Registrar from '../Registrar/index.js';

class Articulos extends Component{
   
    render(){
        return(
            <div>
                <h1>Articulos</h1>
                Registrar
            </div>
        )
    }
}

export default Articulos;
/*
<div className="post-container">
                <ul>
                    {this.state.articulos.map((articulo, index) => (
                    <li key={index}>
                        <ul >
                        <li >{articulo.nombre}</li>
                        <li >{articulo.marca}</li>
                        <li >{articulo.marca}</li>
                        <li >{articulo.numSerie}</li>
                        </ul>
                    </li>
                    ))}
                </ul>
                </div>*/