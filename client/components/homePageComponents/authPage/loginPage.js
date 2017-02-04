import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import {createContainer} from 'meteor/react-meteor-data';

class LoginPage extends Component{
  constructor(props){
    super(props);
    this.state = {message: '', messageType: "alert alert-danger"};
  }

  componentWillMount(){
    if(Meteor.userId()){
      browserHistory.push('/');
    }
  }

  componentWillUnmount(){
    console.log("login unmount");
  }

  validateLoginInfo(id, pwd){
    var valid = false;

    if(id.length < 5 || id.length > 41){
      this.setState({
        message: "L'identifiant doit avoir entre 5 et 41 caractères.",
        messageType: "alert alert-danger"});
    }else if(pwd.length < 6 || pwd.length > 20){
      this.setState({
        message: "Le mot de passe doit avoir entre 6 et 20 caractères.",
        messageType: "alert alert-danger"});
    }else{
      this.setState({message: "Chargement...", messageType: "alert alert-info"});
      valid = true;
    }

    return valid;
  }

  login(event){
    event.preventDefault();

    const id = this.refs.loginId.value;
    const pwd = this.refs.loginPassword.value;

    if(this.validateLoginInfo(id, pwd)){
      Meteor.loginWithPassword(id, pwd, (err) => {
        if(err){
          this.setState({message: err.reason,
            messageType: "alert alert-danger"});
        }else{
          browserHistory.push('');
        }
      });
    }
  }

  goRegisterPage(event){
    event.preventDefault();
    browserHistory.push('nouveau-compte'); //navigate to url
  }

  render(){
    return(
      <form className="form-signin" onSubmit={this.login.bind(this)}>
        <div className="text-center">
          <img className="loginLogo mx-auto d-block" src="logo.png"/>
        </div>
        <br/>
        {this.state.message !== '' ?
          <div className={this.state.messageType}>
            {this.state.message}
          </div>
        : null}
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

//export default LoginPage;

export default LoginPage;
