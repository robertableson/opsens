import React, {Component} from 'react';

class Header extends Component{
  render(){

    return(
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <img className="navbarLogo" src="navbarLogo.png"/>
            </a>
          </div>
          <div className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">{/*  */}
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  {Meteor.user()} <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="full-width.html">Gestion de mon compte</a>
                  </li>
                  <li>
                    <a href="sidebar.html">Me déconnecter</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
