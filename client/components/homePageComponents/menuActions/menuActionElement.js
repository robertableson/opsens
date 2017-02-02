import React, {Component} from 'react';
import {browserHistory, Link} from 'react-router';

class MenuActionElement extends Component{
  onMenuActionClick(e){
    e.preventDefault();
    browserHistory.push(this.props.menuAction.route);
  }

  render(){
    return(
      <div onClick={this.onMenuActionClick.bind(this)} className="col-sm-4">
        <a href="#">
          <div className="menuAction">
            <img className="navbarLogo"
              src={'icons/' + this.props.menuAction.icon}/>
            <br/>
            <div className="menuActionText">
              {this.props.menuAction.title}
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default MenuActionElement;
