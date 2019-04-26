import React from 'react';
import login from './Pages/Login'
import Consultas from './Pages/Consultas'

import ReactDOM from 'react-dom';

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';


const batatinha = <Router>
  <div>
    <Switch>
      <Route path="/consultas" component={Consultas}/>
      <Route path="/login" component={login} />
    </Switch>
  </div>
</Router>


ReactDOM.render(
  batatinha
  , document.getElementById('root')
);