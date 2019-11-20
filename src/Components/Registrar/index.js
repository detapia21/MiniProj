import React, {Component} from 'react';
import './Registrar.css';


class Registrar extends Component{

    constructor(props){
        super(props);
        this.state = {
            articulo: {
                nombre: "",
                marca: "",
                modelo: "",
                numSerie: ""
            },
            articulos: []
        };
       // this.handleChange = this.handleChange.bind(this);
       // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        const {name, value} = e.target;

        this.setState(prevState=>({
            articulo: { ...prevState.articulo, [name]: value}
        }));
    }

    handleSubmit = e => {
        e.preventDefault();
    
        this.setState(prevState => ({
          articulos: [...prevState.articulos, prevState.articulo],
          articulo: { nombre: "", marca: "", modelo: "", numSerie: "" }
        }));
      };

    render(){
        return(
            <div>
                
                <h1>Registrar</h1>

                <div className="register-container" >
                <form className="rounded" >
                    <ul>
                        <li>
                            <input type="text" 
                            id='nombre' 
                            name="nombre"
                            onChange={this.handleChange}
                            //value={this.state.articulo.nombre}
                            placeholder="Nombre" />
                        </li>
                        <li>
                            <input type="text" 
                            id='marca'
                            name="marca"
                            onChange={this.handleChange}
                            //value={this.state.articulo.marca} 
                            placeholder="Marca" />
                        </li>
                        <li>
                            <input type="text" 
                            id='modelo'
                            name="modelo"
                            onChange={this.handleChange}
                            //value={this.state.articulo.modelo} 
                            placeholder="Modelo" />
                        </li>
                        <li>
                            <input type="text" 
                            id='num-serie'
                            name="numSerie"
                            onChange={this.handleChange}
                            //value={this.state.articulo.numSerie} 
                            placeholder="Número de serie" />
                        </li>
                    </ul>
                        <button id='btn-registrar' className="btn btn-success" onClick={this.handleSubmit}>Registrar</button>
                </form>
                </div>
            <table id='tabla-articulos' className="tabla-articulos" align="center">
            <thead>
                <tr id='header'>
                    <th>Nombre</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Número de serie</th>
                </tr>
            </thead>
            <tbody id='tabla-body'>
                    {this.state.articulos.map((articulo, index) => (
                      
                      <tr>
                        <td>{articulo.nombre}</td>
                        <td>{articulo.marca}</td>
                        <td>{articulo.marca}</td>
                        <td>{articulo.numSerie}</td>

                </tr>
                    ))}
            </tbody>
            </table>
            </div>
            
            
        )
    }
}
export default Registrar;
