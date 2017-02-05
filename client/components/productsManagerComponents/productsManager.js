import React from 'react';

const ProductsManager = () =>{
  return(
    <div className="actionPage">
      <div className="actionPageTitle">
        Gestion des produits
      </div>
      <div className="row">
        <div className="col-xs-4 productsListAndInputsContainer">
          <div className="productsManagerListHeader">
            <div className="productsManagerListHeaderTop row">
              <div className="col-sm-6">
                Produits
              </div>
              <div className="col-sm-6">
                <button className="btn btn-info btnCreateNewProduct">
                  <span className="glyphicon glyphicon-plus" aria-hidden="true"/>
                </button>
              </div>
            </div>
            <div className="productsManagerListHeaderBottom row">
              <div className="col-sm-6">
                <input type="text" className="form-control txtSearchProducts"
                  placeholder="Rechercher"/>
              </div>
              <div className="col-sm-6">
                <select className="form-control ddProductsPerPage">
                  <option value="grapefruit">1</option>
                  <option value="lime">2</option>
                  <option value="coconut">3</option>
                  <option value="mango">4</option>
                </select>
              </div>
            </div>
          </div>
          <div className="list-group productsList">
            <a href="" className="list-group-item active">
              <div className="row">
                <div className="col-xs-9">GLK-13PDF-2DFTR34-PDD345M-M34</div>
                <div className="col-xs-3 countBadge">
                  <span className="badge badge-default">5</span>
                </div>
              </div>
            </a>
            <a href="" className="list-group-item">
              <div className="row">
                <div className="col-xs-9">GLK-13PDF-2DFTR34-PDD345M-M34</div>
                <div className="col-xs-3 countBadge">
                  <span className="badge badge-default">54</span>
                </div>
              </div>
            </a>
            <a href="" className="list-group-item">
              <div className="row">
                <div className="col-xs-9">GLK-13PDF-2DFTR34-PDD345M-M34</div>
                <div className="col-xs-3 countBadge">
                  <span className="badge badge-default">544</span>
                </div>
              </div>
            </a>
            <a href="" className="list-group-item">
              <div className="row">
                <div className="col-xs-9">GLK-13PDF-2DFTR34-PDD345M-M34</div>
                <div className="col-xs-3 countBadge">
                  <span className="badge badge-default">36</span>
                </div>
              </div>
            </a>
          </div>
          <div className="productsPagination">
            <a href="">{"<<  <  1  2  3  >  >>"}</a>
          </div>
        </div> {/* end .productsListAndInputsContainer */}

        <div className="col-xs-8 instructionsListAndInputsContainer">
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
            <a href="#" className="list-group-item">These Boots Are Made For Walking</a>
            <a href="#" className="list-group-item active">Eleanor, Put Your Boots On</a>
            <a href="#" className="list-group-item">Puss 'n' Boots</a>
            <a href="#" className="list-group-item">Die With Your Boots On</a>
            <a href="#" className="list-group-item">Fairies Wear Boots</a>
          </div>
        </div> {/* end .instructionsListAndInputsContainer */}
      </div> {/* end .row */}
    </div> //end .actionPage
  );
}

export default ProductsManager;
