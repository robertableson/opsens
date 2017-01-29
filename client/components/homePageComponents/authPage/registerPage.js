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

  validateRegisterInfo(fName, lName, pwd, pwdConf){
    var valid = false;

    if(fName.length < 2 || fName.length > 20){
      this.setState({
        message: "Le champ 'Prénom' doit contenir entre 2 et 20 caractères.",
        messageType: "alert alert-danger"});
    }if(lName.length < 2 || lName.length > 20){
      this.setState({
        message: "Le champ 'Nom' doit contenir entre 2 et 20 caractères.",
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
        message: "Loading...",
        messageType: "alert alert-info"});
      valid = true;
    }

    return valid;
  }

  register(event){
    event.preventDefault();

    const userFirstName = this.refs.userFirstName.value;
    const userLastName = this.refs.userLastName.value;
    const userPassword = this.refs.loginPassword.value;
    const userPasswordConfirm = this.refs.loginPasswordConfirm.value;

    if(this.validateRegisterInfo(userFirstName, userLastName, userPassword,
      userPasswordConfirm)){
      Accounts.createUser({username: "default", password: userPassword,
        firstName: userFirstName, lastName: userLastName}, (msg) => {
        if(msg){
          console.log(msg);
          if(msg.error !== "id-exists-already"){
            this.setState({
              message: msg.reason,
              messageType: "alert alert-success"});
          }else{
            this.setState({
              message: msg.reason,
              messageType: "alert alert-danger"});
          }

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
        <input ref="userFirstName" type="text" id="inputUsername" className="form-control"
        placeholder="Prénom" autoFocus/>
        <br/>
        <input ref="userLastName" type="text" id="inputUsername" className="form-control"
        placeholder="Nom" autoFocus/>
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
