import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Products} from '../../../imports/collections/products';

class ProductsList extends Component{
  renderList(){
    var productsList = [];

    if(this.props.productsList.length > 0){
      productsList = this.props.productsList;

      return productsList.map(function(product, i){
        return(
          <a key={i} href="" className="list-group-item">
            <div className="row">
              <div className="col-xs-8">{product.name}</div>
              <div className="col-xs-4 countBadge">
                <span className="badge badge-default">
                  {product.instructionsList.length}</span>
              </div>
            </div>
          </a>
        );
      });
    }
  }

  render(){
    return(
      <div className="col-sm-4 productsListAndInputsContainer">
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
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="40">40</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
        </div>
        <div className="list-group productsList">
          {this.renderList()}
        </div>
        <div className="productsPagination">
          <a href="">{"<<  <  1  2  3  >  >>"}</a>
        </div>
      </div> // end .productsListAndInputsContainer
    );
  }
}

export default createContainer(() =>{
  Meteor.subscribe('products');
  return {productsList: Products.find({}).fetch()};
}, ProductsList);
