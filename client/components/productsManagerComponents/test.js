import React, {Component} from 'react';
import Sortable from 'react-sortablejs';

class Test extends Component {
  constructor(props){
    super(props);
    this.state = {
        simpleList: [
          {
            _id: "dfsighbsibfibfie7e478b",
            name: "couper tige g45",
            description: "Utilisaer une tige g45 de 450mm sur la parroie du capteur.",
            user_prodUserType: "BOP",
            order: 1
          },
          {
            _id: "dfsighbsibfibfie7e478b",
            name: "Soudage capteur h4",
            description: "Souder le capter h4 dans le boitier j.",
            user_prodUserType: "Électrique",
            order: 2
          },
          {
            _id: "dfsighbsibfibfie7e478b",
            name: "Ajustement engrenage tt7",
            description: "Aligner à 4 degrés de jeu l'engrenage tt7 sur le shaft k9.",
            user_prodUserType: "Mécanique",
            order: 3
          }
        ]
    };
  }
    render() {
        const simpleList = this.state.simpleList.map((val, key) => (
            <li key={key} data-id={val.id}>List Item {val.name}</li>
        ));

        return (
            <div>
                <div className="container-fluid" style={{marginTop: 50}}>
                    <div className="title">Simple List</div>
                    <div className="form-group">
                        <button
                            type="button"
                            className="btn btn-default"
                            onClick={(e) => {
                                const order = this.simpleList.toArray();
                                this.simpleList.sort(order.reverse());
                            }}
                        >
                            Reverse Order
                        </button>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Sortable
                                options={{
                                    animation: 150
                                }}
                                className="block-list"
                                ref={c => {
                                    if (c) {
                                        this.simpleList = c.sortable;
                                    }
                                }}
                                tag="div"
                            >
                                {simpleList}
                            </Sortable>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Test;
