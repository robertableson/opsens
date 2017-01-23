import React from 'react';

const LoginPage = () =>{
  return(
    <div className="loginForm">

          <div className="panel-heading">
             <div className="panel-title text-center">
                <h1 className="title">Company Name</h1>
              </div>
          </div>

          <div className="main-login main-center">
            <form className="form-horizontal" method="post" action="#">

              <div className="form-group">
                <div className="col-sm-10">
                  <div className="input-group login-input">
                    <input type="text" className="form-control" name="name" id="name"
                      placeholder="Identifiant"/>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-10">
                  <div className="input-group login-input">
                    <input type="text" className="form-control" name="name" id="name"
                      placeholder="Mot de passe"/>
                  </div>
                </div>
              </div>

              <div className="form-group ">
                <button type="button"
                  className="btn btn-primary btn-lg btn-block login-button">
                  Se connecter
                </button>
              </div>
              <div className="login-register">
                <a href="index.php">Créer un nouveau compte</a>
              </div>
            </form>
          </div>

    </div>
  );
};

export default LoginPage;
