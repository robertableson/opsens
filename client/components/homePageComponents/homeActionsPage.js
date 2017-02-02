import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import Header from '../header/header';
import MenuActionsList from './menuActions/menuActionsList';

class HomeActionsPage extends Component{
  componentWillMount(){
    if(!Meteor.userId()){
      browserHistory.push('connexion');
    }
  }

  render(){
    return(
      <div>
        <Header/>
        <MenuActionsList/>
      </div>
    );
  }

}

export default HomeActionsPage;
