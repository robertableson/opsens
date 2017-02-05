import React, {Component} from 'react';
import Sortable from 'react-sortablejs';

class InstructionsList extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: [
        {
          _id: "dfsighbsibfibfie7e478b",
          name: "couper tige g45",
          description: "Utilisaer une tige g45 de 450mm sur la parroie du capteur.",
          user_prodUserType: "BOP",
          order: 1
        },
        {
          _id: "dfsighbsibtfibfie7e478b",
          name: "Soudage capteur h4",
          description: "Souder le capter h4 dans le boitier j.",
          user_prodUserType: "Électrique",
          order: 2
        },
        {
          _id: "dfsighbstfibfibfie7e478b",
          name: "Ajustement engrenage tt7",
          description: "Aligner à 4 degrés de jeu l'engrenage tt7 sur le shaft k9.",
          user_prodUserType: "Mécanique",
          order: 3
        }
      ]
    };
  }

  renderList(){
    return this.state.items.map(function(item, i){
      return (
        <div  key={item._id} className="list-group-item">
          <div className="row">
            <div className="col-xs-9 instructionsListTitle">
              {item.order}. {item.name} </div>
            <div className="col-xs-3 instructionsListProdUserType">
              {item.user_prodUserType}</div>
          </div>
          <div className="row">
            <div className="col-xs-9">{item.description}</div>
            <div className="col-xs-3 instructionsInputUnit">Saisie: mm</div>
          </div>
        </div>
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
          <Sortable
              options={{
                  animation: 150
              }}
              className="sortable"
              ref={c => {
                console.log(c.sortable);
                  /*if (c) {
                      this.simpleList = c.sortable;
                  }*/
              }}
              tag="div"
          >
              {this.renderList()}
          </Sortable>

        </div>
      </div> // end .instructionsListAndInputsContainer
    );
  }
}

export default InstructionsList;
