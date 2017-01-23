import React from 'react';

const LoginPage = () =>{
  return(
    <div>


      <form className="form-signin">
        <h2 className="form-signin-heading">Identification</h2>
        <label htmlFor="inputEmail" className="sr-only">Identifiant</label>
        <input type="email" id="inputEmail" className="form-control"
        placeholder="Email address" required autoFocus/>
        <br/>
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control"
        placeholder="Password" required/>
        <br/>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
     </form>

    </div>
  );
};

export default LoginPage;
