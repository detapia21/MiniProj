import React,{ Component } from 'react';
import PropTypes from 'prop-types'; //validacion de propiedades
import {Link} from 'react-router-dom';
//assets
import logo from './images/LogoINDE.jpeg';
import './css/Header.css';


class Header extends Component {
    static propTypes ={
        title: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired
    };
    render(){
        const {title, items} = this.props;
        console.log(this.props);
        return(
            <div className="Header">
                <header className="logo">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>{title}</h2>
                    <nav>
                    <ul className="Menu">
                        {items.map((item, key)=> <li key={key}><Link to={item.url}>{item.title}</Link></li>)}
                    </ul>
                    </nav>
                    
                </header>
            </div>
        );
    }
}

export default Header;