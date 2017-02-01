import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {MenuActions} from '../../../imports/collections/menuActions';

class MenuActionsList extends Component{
  renderList(){
    const ITEMS_PER_ROW = 3;
    var numInRow = 0;

    console.log(this.props.menuActions);

    return this.props.menuActions.map(menuAction =>{
      numInRow++;

      /*if(numInRow == 1){ //start row
        console.log("number one");

        return(
          <div className="row">
            <div className="col-sm-4">
              <a href="#">
                <div className="menuAction">
                  <img className="navbarLogo" src="icons/GestITIcon.png"/>
                  <br/>
                  <div className="menuActionText">
                    {menuAction.title}
                  </div>
                </div>
              </a>
            </div>
        );
      }/*else if(numInRow <= ITEMS_PER_ROW){ //same row
        return(
          <div className="col-sm-4">
            <a href="#">
              <div className="menuAction">
                <img className="navbarLogo" src="icons/GestITIcon.png"/>
                <br/>
                <div className="menuActionText">
                  {menuAction.title}
                </div>
              </div>
            </a>
          </div>
        );
      }else{ //last item
        numInRow = 0;

        return(
            <div className="col-sm-4">
              <a href="#">
                <div className="menuAction">
                  <img className="navbarLogo" src="icons/GestITIcon.png"/>
                  <br/>
                  <div className="menuActionText">
                    {menuAction.title}
                  </div>
                </div>
              </a>
            </div>
          </div>
        );
      }
*/

    });
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
