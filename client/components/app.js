import React, {Component} from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import ErrorPage from './errorPage';
import HomePage from './homePageComponents/homePage';
import LoginPage from './homePageComponents/authPage/loginPage';
import RegisterPage from './homePageComponents/authPage/registerPage';
import HomeActionsPage from './homePageComponents/homeActionsPage';

class App extends Component{
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={HomePage}/>
        <Route path="/menu" component={HomeActionsPage}/>
        <Route path="/connexion" component={LoginPage}/>
        <Route path="/nouveau-compte" component={RegisterPage}/>
        <Route path="*" component={ErrorPage}/>
      </Router>
    );
  }
}

export default App;
