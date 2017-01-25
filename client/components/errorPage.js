import React, {Component} from 'react';
import {browserHistory} from 'react-router';

class ErrorPage extends Component{
  redirectHome(){
    browserHistory.push('/');
  }

  render(){
    return(
      <div className="errorPageContents text-center">
        <a href="#" onClick={this.redirectHome.bind(this)}>
          <img className="loginLogo mx-auto d-block" src="logo.png"/>
        </a>
        <br/><br/>
        Oups! La page n'existe pas!
        <br/><br/>
        <a href="#" onClick={this.redirectHome.bind(this)}>
          Revenir à la page d'accueil
        </a>
      </div>
    );
  }
}

export default ErrorPage;
