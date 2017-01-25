import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import {Link, browserHistory} from 'react-router';

import HomeActionsPage from './homeActionsPage';

class HomePage extends Component{
  componentWillMount(){
    if(Meteor.user()){
      browserHistory.push(`connexion`);
    }
  }

  render(){
    return(<HomeActionsPage/>);
  }
}

export default HomePage;
