import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';

class LoginPage extends Component{
  checkInfo(id, pwd){

  console.log(`id: ${id} pwd: ${pwd}`);

  }

  login(event){
    event.preventDefault();

    const loginId = (this.refs.loginId.value).toLowerCase();
    const loginPassword = this.refs.loginPassword.value;

    this.checkInfo(loginId, loginPassword);

    //browserHistory.push(`/`);
  }
  goRegisterPage(event){
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
        <input ref="loginId" type="text" id="inputUsername" className="form-control"
        placeholder="Identifiant (prenom.nom)" autoFocus/>
        <br/>
        <input ref="loginPassword" type="password" id="inputPassword" className="form-control"
        placeholder="Mot de passe"/>
        <br/>
        <button className="btn btn-lg btn-primary btn-block">Se connecter</button>
        <div className="signupLink">
          <a href="#" onClick={this.goRegisterPage.bind(this)}>Créer un compte</a>
        </div>
      </form>
    );
  }
}

export default LoginPage;
