import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {MenuActions} from '../../../imports/collections/menuActions';
import ReactDOM from 'react-dom';

const menuAction = ({action}) =>{
  return(
    <div className="col-md-6">
      { action._id }
    </div>
  );
}

const menuActionsRow = ({menuActionTriplet}) =>{
  console.log('hi');
  return(
    /*<div className="row">
    {
      menuActionPair.map((action, index) => (
        <menuAction key={index} action={action}/>
      ))
    }
    </div>*/

    <div>COUOU</div>
  );
}

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
        <div>row</div>
        //return (<menuActionsRow key={index} menuActionTriplet={triplet}/>);
        return triplet.map((menuAction) => {
          console.log(menuAction);
          return(<div>element</div>);
        });
      });
    }else{
      return(
        <div>allo</div>
      );
    }

    /*return this.props.menuActions.map(menuAction =>{
      console.log(menuAction);
    });*/
  }

  render(){
    return(
      <div className="container">
          {this.renderList()}
      </div>
    );
  }
}

export default createContainer(() =>{
  Meteor.subscribe('menuActions');
  return {menuActions: MenuActions.find({}).fetch()};
}, MenuActionsList);
