import React,{ Component } from 'react';
import './css/Content.css';

class Content extends Component {
    //agregar un constructor
    constructor(){
        //react necesita la palabla super para poder utilizar this
        super();
        //crear un state (objeto)
        this.state = {
            count:0,
            num1:0,
            num2:0,
            result:0,
            operator:"+"
        };
        //para cargar todo el objeto
        this.handleCountClick=this.handleCountClick.bind(this);
        this.handleResultClick=this.handleResultClick.bind(this);
        this.handleInputChanged=this.handleInputChanged.bind(this);
    }

    componentDidMount(){
        this.setState({count:0});
    }
    //acciones al tomar al dar click en el boton
    handleCountClick(e){
        if(e.target.id==="add"){
            this.setState({count:this.state.count+1});
        }else if(e.target.id==="subtract"){
            if(this.state.count>0){
                this.setState({count:this.state.count-1});
            }
        }if(e.target.id==="reset"){
            this.setState({count:0});
        }
    }

    handleResultClick(e){
        if(e.target.id==="result"){
            if(this.state.operator==="+"){
                this.setState({result:this.state.num1+this.state.num2});
            }else if(this.state.operator==="-"){
                this.setState({result:this.state.num1-this.state.num2});
            }else if(this.state.operator==="*"){
                this.setState({result:this.state.num1*this.state.num2});
            }else if(this.state.operator==="/"){
                this.setState({result:this.state.num1/this.state.num2});
            }
        }
    }

    handleInputChanged(e){
        if(e.target.id==="num1"){
            this.setState({num1:Number(e.target.value)});
        }else if(e.target.id==="num2"){
            this.setState({num2:Number(e.target.value)});
        }else{
            this.setState({operator:e.target.value});
        }
    }

    render(){
        return(
            <div className="Content">
                <content className="content-in">
                    <h1>Counter: {this.state.count}</h1>
                    <p>
                        <button id="add" onClick={this.handleCountClick}>Counter+</button>
                        <button id="subtract" onClick={this.handleCountClick}>Counter-</button>
                        <button id="reset" onClick={this.handleCountClick}>Reset</button>
                    </p>
                    <h2>Calculadora</h2>
                    <p>
                        <input id="num1" type="number" value={this.state.num1} onChange={this.handleInputChanged}/>
                        <select id="operator" value={this.state.operator} onChange={this.handleInputChanged}>
                            <option value="+">+</option>
                            <option value="-">-</option>
                            <option value="*">*</option>
                            <option value="/">/</option>
                        </select>
                        <input id="num2" type="number" value={this.state.num2} onChange={this.handleInputChanged}/>
                        <button id="result" onClick={this.handleResultClick}>=</button>
                        <label> {this.state.result}</label>
                    </p>
                </content>
            </div>
        );
    }
}

export default Content;