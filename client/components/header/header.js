import React, {Component} from 'react';
import {browserHistory} from 'react-router';

class Header extends Component{
  constructor(){
    super();
    this.state = {fName: "", lName: ""};
  }

  componentDidMount(){
    console.log("component did mount");

    Meteor.autorun(() => {
      if(Meteor.user()){
        var fn = Meteor.user().profile.firstName;
        var ln = Meteor.user().profile.lastName;
        fn = fn.substr(0, 1).toUpperCase() + fn.substr(1);
        ln = ln.substr(0, 1).toUpperCase() + ln.substr(1)

        this.setState({
          fName: fn,
          lName: ln
        });
      }
    });
  }

  componentWillUnmount(){
    console.log("compoennt will unmount");
  }

  logoClick(){
    browserHistory.push('menu');
  }

  logout(){
    Meteor.logout(function(){
      browserHistory.push('connexion');
    });
  }

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
            <a onClick={this.logoClick.bind(this)} className="navbar-brand" href="#">
              <img className="navbarLogo" src="navbarLogo.png"/>
            </a>
          </div>
          <div className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">{/*  */}
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  {this.state.fName} {this.state.lName} <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="full-width.html">
                      <span className="glyphicon glyphicon-cog" aria-hidden="true">
                      </span>
                      Gestion de mon compte
                    </a>
                  </li>
                  <li>
                    <a onClick={this.logout.bind(this)} href="#">
                      <span className="glyphicon glyphicon-log-out" aria-hidden="true">
                      </span>
                      Me déconnecter
                    </a>
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
