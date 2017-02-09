import React, {Component} from 'react';
import ProductsList from './productsList';
import Paginator from '../paginator';
import {createContainer} from 'meteor/react-meteor-data';
import Spinner from '../spinner';

const MAX_PAGINATION_NUMBERS = 3;
var size = 0;

class ProductsCard extends Component{
  constructor(props){
    super(props);
    this.state = {
      filter: "",
      numberPerPage: 10,
      activePage: 1,
      collectionSize: 50
    };
  }

  onFilterChange(){
    this.setState({
      activePage: 1,
      filter: this.refs.txtFilter.value
    });
  }

  onNumberPerPageChange(){
    this.setState({
      activePage: 1,
      numberPerPage: parseInt(this.refs.ddNumberPerPage.value)
    });
  }

  onPageChange(pageNumber){
    this.setState({activePage: pageNumber});
  }

  addNew(){
    console.log("new");
  }

  getTotalProducts(){
    Meteor.call('products.getCollectionSize', function(error, result){
    });

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
              <button onClick={this.addNew.bind(this)}
                className="btn btn-info btnCreateNewProduct">
                <span className="glyphicon glyphicon-plus" aria-hidden="true"/>
              </button>
            </div>
          </div>
          <div className="productsManagerListHeaderBottom row">
            <div className="col-sm-6">
              <input ref="txtFilter" onChange={this.onFilterChange.bind(this)}
                type="text" className="form-control txtSearchProducts"
                placeholder="Rechercher"/>
            </div>
            <div className="col-sm-6">
              <select ref="ddNumberPerPage"
                onChange={this.onNumberPerPageChange.bind(this)}
                className="form-control ddProductsPerPage"
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="40">40</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
        </div>
        <ProductsList
          filter={this.state.filter}
          numberPerPage={this.state.numberPerPage}
          activePage={this.state.activePage}
        />
        <div className="productsPagination">
          <Paginator
            max={Math.ceil(this.props.collSize / this.state.numberPerPage)}
            maxVisible={MAX_PAGINATION_NUMBERS}
            onChange={this.onPageChange.bind(this)}
          />
        </div>
      </div> // end .productsListAndInputsContainer
    );
  }
}

export default createContainer(() =>{
  Meteor.call('products.getCollectionSize', function(error, result){
    size = result;
  });
  return {collSize: size};
}, ProductsCard);
