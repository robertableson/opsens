import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import Header from '../header/header';
import MenuActionsList from './menuActions/menuActionsList';

class HomeActionsPage extends Component{

  render(){
    return(
      <div>
        //<Header/>
        {this.props.children}
        //<MenuActionsList/>
      </div>
    );
  }

}

export default HomeActionsPage;
