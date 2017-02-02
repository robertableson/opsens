import React, {Component} from 'react';
import MenuActionElement from './menuActionElement';

class MenuActionsRow extends Component{
  renderRow(){
    var triplet = this.props.menuActionTriplet;

    return triplet.map((menuAction, index) =>{
      return(
        <MenuActionElement key={index} menuAction={menuAction}/>
      );
    });
  }

  render(){
    return(
      <div className="row">
          {this.renderRow()}
      </div>
    );
  }
}

export default MenuActionsRow;
