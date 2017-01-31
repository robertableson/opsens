import React, {Component} from 'react';


import HomeActionsPage from './homeActionsPage';
import Header from '../header/header';

class ActionMenu extends Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <a href="#">
              <div className="menuAction">
                <img className="navbarLogo" src="icons/GestITIcon.png"/>
                <br/>
                <div className="menuActionText">
                  Instructions de travail
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ActionMenu;
