import React from 'react';
import {Route, Switch} from 'react-router-dom';

import App from './Components/App';
import About from './Components/About';

import Home from './Components/Home';
import Registrar from './Components/Registrar';

const AppRoutes = () =>
<App>
    <Switch>
        <Route path="/about" component={About}/>
        
        <Route path="/home" component={Home}/>
        <Route path="/Registrar" component={Registrar}/>
    </Switch>
</App>

export default AppRoutes;