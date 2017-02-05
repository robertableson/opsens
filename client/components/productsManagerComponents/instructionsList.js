import React, {Component} from 'react';

class InstructionsList extends Component{
  renderList(){
    var colors = ["Red","Green","Blue","Yellow","Black","White","Orange"];

    return colors.map(function(item, i){
      console.log(item + ' ' + i);
      return(
        <a href="#" className="list-group-item">{item}</a>
      );
    });
  }

  render(){
    return(
      <div className="col-sm-8 instructionsListAndInputsContainer">
        <div className="instructionsManagerListHeader">
          <div className="instructionsManagerListHeaderTop row">
            <div className="col-sm-6">
              Instructions de travail
            </div>
            <div className="col-sm-6">
              <button className="btn btn-info btnCreateNewInstruction">
                <span className="glyphicon glyphicon-plus" aria-hidden="true"/>
              </button>
            </div>
          </div> {/* end .instructionsManagerListHeaderTop */}
          <div className="instructionsManagerListHeaderBottom row form-inline">
            <div className="col-xs-10">
              <input type="text" className="form-control txtSearchInstructions"
                placeholder="Rechercher"/>
              <select className="form-control ddInstructionsSort">
                <option value="Alphabétique">Alphabétique</option>
                <option value="Description">Description</option>
                <option value="Type production">Type production</option>
                <option value="Ordre d'IT">Ordre d IT</option>
              </select>
            </div>

            <div className="col-xs-2">
              <select className="form-control ddInstructionsPerPage">
                <option value="grapefruit">1</option>
                <option value="lime">2</option>
                <option value="coconut">3</option>
                <option value="mango">4</option>
              </select>
            </div>
          </div> {/* end .instructionsManagerListHeaderBottom */}
        </div> {/* end .instructionsManagerListHeader */}
        <div className="list-group instructionsList">
          {this.renderList()}
          {/*<a href="#" className="list-group-item">Couper un fil g45 de 40mm de long</a>
          <a href="#" className="list-group-item">Couper un fil g45 de 40mm de long</a>
          <a href="#" className="list-group-item active">Caper le côté droit de la mèche rectangulaire</a>
          <a href="#" className="list-group-item">Caper le côté droit de la mèche rectangulaire</a>
          <a href="#" className="list-group-item">Souder la mèche au 45 degrés avec un MIG</a>*/}
        </div>
      </div> // end .instructionsListAndInputsContainer
    );
  }
}

export default InstructionsList;
