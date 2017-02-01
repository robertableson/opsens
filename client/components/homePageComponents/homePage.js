import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import {Link, browserHistory} from 'react-router';


import HomeActionsPage from './homeActionsPage';
import Header from '../header/header';

class HomePage extends Component{
  componentWillMount(){
    if(!Meteor.userId()){
      browserHistory.push('connexion');
    }else{
      browserHistory.push('menu');
    }
  }
  render(){return(<div></div>);}
}

export default HomePage;
