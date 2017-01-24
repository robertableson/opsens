import React from 'react';

const LoginPage = () =>{
  return(
    <div>

      <form className="form-signin">
        <div className="text-center">
          <img className="loginLogo mx-auto d-block" src="logo.png"/>
        </div>
        <br/>
        <input type="text" id="inputUsername" className="form-control"
        placeholder="Identifiant" required autoFocus/>
        <br/>
        <input type="password" id="inputPassword" className="form-control"
        placeholder="Mot de passe" required/>
        <br/>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Se connecter</button>
        <div className="signupLink">
          <a href="#">Créer un compte</a>
        </div>
      </form>

    </div>
  );
};

export default LoginPage;
