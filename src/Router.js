import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Datainput from './components/Datainput';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Departments from './components/datainput/Departments';
import Services from './components/datainput/Services';
import Guard from './components/datainput/Guard';
import Personal from './components/datainput/Personal';

function Router(){
    return(
        <BrowserRouter>
        <Navbar />
            <Switch>
                <Route exact path="/" render= {() => (<h1 style={{marginTop:'30px'}}>INICIO</h1>)} />
                <Route exact path="/inputs" component={Datainput} />
                <Route exact path="/departments" component={Departments} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/guard" component={Guard} />
                <Route exact path="/personal" component={Personal} />
                <Route exact component={Error} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;