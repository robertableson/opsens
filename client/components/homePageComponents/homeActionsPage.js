import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import Header from '../header/header';
import ActionMenu from './actionMenu';

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
        <ActionMenu/>
      </div>
    );
  }

}

export default HomeActionsPage;
