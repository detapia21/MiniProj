import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Global/css/App.css';
import Header from './Global/Header';
import Footer from './Global/Footer';
import Form from './Global/Form';

//data
import items from './data/menu';


class App extends Component {
  static propTypes = {
    children:PropTypes.object.isRequired
  };
  render(){
    const {children} = this.props;
    return(
      <div className="App">
        <Header title="Sistema Inventario" items={items}/>
        <Form body={children}/>
        <Footer copyright="&copy; Edgar Tapia 2019"/>
      </div>
    )
  }
}

export default App;