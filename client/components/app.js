import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import LoginPage from './loginPage';
import RegisterPage from './registerPage';
import HomeActionsPage from './homeActionsPage';

class App extends Component{
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={HomeActionsPage}/>
        <Route path="/connexion" component={LoginPage}/>
        <Route path="/nouveau-compte" component={RegisterPage}/>
      </Router>
    );
  }
}

export default App;
