import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';

 class LoginPage extends Component{
  login(event){
    event.preventDefault();
    browserHistory.push(`/`);
  }
  createNew(event){
    event.preventDefault();
    browserHistory.push(`nouveau-compte`); //navigate to url
  }

  render(){
    return(
      <form className="form-signin" onSubmit={this.login.bind(this)}>
        <div className="text-center">
        <img className="loginLogo mx-auto d-block" src="logo.png"/>
        </div>
        <br/>
        <input type="text" id="inputUsername" className="form-control"
        placeholder="Identifiant" autoFocus/>
        <br/>
        <input type="password" id="inputPassword" className="form-control"
        placeholder="Mot de passe"/>
        <br/>
        <button className="btn btn-lg btn-primary btn-block">Se connecter</button>
        <div className="signupLink">
          <a href="#" onClick={this.createNew.bind(this)}>Créer un compte</a>
        </div>
      </form>
    );
  }
}

export default LoginPage;
