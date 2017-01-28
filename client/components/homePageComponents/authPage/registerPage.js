import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';

class LoginPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      message: "Veuillez noter que votre demande devra être acceptée par un " +
        "administrateur avant de pouvoir vous connecter au système.",
      messageType: "alert alert-info"};
  }

  validateRegisterInfo(id, pwd, pwdConf){
    var valid = false;

    if(id.length < 8 || id.length > 30){
      this.setState({
        message: "L'identifiant doit avoir entre 8 et 30 caractères.",
        messageType: "alert alert-danger"});
    }else if(pwd.length < 6 || pwd.length > 20){
      this.setState({
        message: "Le mot de passe doit avoir entre 6 et 20 caractères.",
        messageType: "alert alert-danger"});
    }else if(pwd !== pwdConf){
      this.setState({
        message: "La confirmation du mot de passe ne correspond pas.",
        messageType: "alert alert-danger"});
    }else{
      this.setState({
        message: "loading...",
        messageType: "alert alert-info"});
      valid = true;
    }

    return valid;
  }

  register(event){
    event.preventDefault();

    const userId = this.refs.loginId.value;
    const userPassword = this.refs.loginPassword.value;
    const userPasswordConfirm = this.refs.loginPasswordConfirm.value;

    if(this.validateRegisterInfo(userId, userPassword, userPasswordConfirm)){
      Accounts.createUser({username: userId, password: userPassword}, (msg) => {
        if(msg){
          this.setState({
            message: msg.reason,
            messageType: "alert alert-success"});
        }else{
          this.setState({
            message: msg.reason,
            messageType: "alert alert-success"});
        }
      });
    }
  }

  goLoginPage(event){
    event.preventDefault();
    browserHistory.push(`connexion`); //navigate to url
  }

  render(){
    return(
      <form className="form-signin" onSubmit={this.register.bind(this)}>
        <div className="text-center">
          <img className="loginLogo mx-auto d-block" src="logo.png"/>
        </div>
        <br/>
        <div className={this.state.messageType}>
          {this.state.message}
        </div>
        <input ref="loginId" type="text" id="inputUsername" className="form-control"
        placeholder="Identifiant (prenom.nom)" autoFocus/>
        <br/>
        <input ref="loginPassword" type="password" id="inputPassword" className="form-control"
        placeholder="Mot de passe"/>
        <br/>
        <input ref="loginPasswordConfirm" type="password" id="inputPasswordConfirm" className="form-control"
        placeholder="Confirmer mot de passe"/>
        <br/>
        <button className="btn btn-lg btn-primary btn-block">Créer compte</button>
        <div className="signupLink">
          <a href="#" onClick={this.goLoginPage.bind(this)}>Se connecter</a>
        </div>
      </form>
    );
  }
}

export default LoginPage;
