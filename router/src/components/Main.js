import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import Login from './Login';
import Content from './Content';


const Main = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/content' component={Content}/>
        </Switch>
    </div>
);

export default Main;