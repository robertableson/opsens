import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import {Link, browserHistory} from 'react-router';


import HomeActionsPage from './homeActionsPage';
import Header from '../header/header';

class HomePage extends Component{
  componentWillMount(){
    if(Meteor.user()){
      browserHistory.push(`connexion`);
    }
  }

  render(){
    return(
      <div>
        <Header/>
        <HomeActionsPage/>
      </div>
    );
  }
}

export default HomePage;
