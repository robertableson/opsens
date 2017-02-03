import React, {Component} from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import ErrorPage from './errorPage';
import HomePage from './homePageComponents/homePage';
import LoginPage from './homePageComponents/authPage/loginPage';
import RegisterPage from './homePageComponents/authPage/registerPage';
import GestionCompte from './gestionCompte';
import GestionIT from './gestionIT';
import MenuActionsList from './homePageComponents/menuActions/menuActionsList';

class App extends Component{
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={HomePage}>
          <IndexRoute component={MenuActionsList}/>
          <Route path="/gestion-compte" component={GestionCompte}/>
          <Route path="gestion-it" component={GestionIT}/>
        </Route>
        <Route path="/connexion" component={LoginPage}/>
        <Route path="/nouveau-compte" component={RegisterPage}/>
        <Route path="*" component={ErrorPage}/>
      </Router>
    );
  }
}

export default App;
