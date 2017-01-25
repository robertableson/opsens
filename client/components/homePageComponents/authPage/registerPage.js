import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';

 class LoginPage extends Component{
   constructor(props){
     super(props);

     this.state = {error: ''};
   }

  register(event){
    event.preventDefault();

    const userId = this.refs.userId.value;
    const userPassword = this.refs.userPassword.value;
    const userPasswordConfirm = this.refs.userPasswordConfirm.value;

    if(userPassword !== userPasswordConfirm){
      this.setState({error: "Le mot de passe doit être le même dans les champs correspondants."});
    }else{
      this.setState({error: ''});
      //browserHistory.push(`/`);
    }
  }
  login(event){
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
        <div className="alert alert-info">
          Veuillez noter que votre demande devra être acceptée par un
          administrateur avant de pouvoir vous connecter au système.
        </div>
        {this.state.error !== '' ?
          <div className="alert alert-danger">
            <strong>
              {this.state.error}
            </strong>
          </div>
        : null}
        <input ref="userId" type="text" id="inputUsername" className="form-control"
        placeholder="Identifiant (prenom.nom)" autoFocus/>
        <br/>
        <input ref="userPassword" type="password" id="inputPassword" className="form-control"
        placeholder="Mot de passe"/>
        <br/>
        <input ref="userPasswordConfirm" type="password" id="inputPasswordConfirm" className="form-control"
        placeholder="Confirmer mot de passe"/>
        <br/>
        <button className="btn btn-lg btn-primary btn-block">Créer compte</button>
        <div className="signupLink">
          <a href="#" onClick={this.login.bind(this)}>Se connecter</a>
        </div>
      </form>
    );
  }
}

export default LoginPage;
