import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import {MenuActions} from '../../../../imports/collections/menuActions';

import MenuActionsRow from './menuActionsRow';
import Spinner from '../../spinner';

class MenuActionsList extends Component{
  renderList(){
    var menuActionsList = [];
    var tripletsList = [];

    if(this.props.menuActions.length > 0){
      menuActionsList = this.props.menuActions;

      tripletsList = menuActionsList.reduce((triplets, menuAction, index) => { // split the actions into triplets
        if(index % 3 === 0) {
           triplets.push([]);
        }
        triplets[triplets.length - 1].push(menuAction);

        return triplets;
      }, []);
      return tripletsList.map((triplet, index) => { // every row of the grid
        return(<MenuActionsRow key={index} menuActionTriplet={triplet}/>);
      });
    }else{
      return(
        <div className="row">
          <Spinner/>
        </div>
      );
    }
  }

  render(){
    return(
      <div className="contentsHomeMenu">
      <h1>Menu principal</h1>
        {this.renderList()}
      </div>
    );
  }
}

export default createContainer(() =>{
  Meteor.subscribe('menuActions');
  return {menuActions: MenuActions.find({}).fetch()};
}, MenuActionsList);
