import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Products} from '../../../imports/collections/products';
import ProductsList from './productsList';
import Spinner from '../spinner';
import Paginator from '../paginator';

import ReactUltimatePagination from 'react-ultimate-pagination';

class ProductsCard extends Component{
  constructor(props){
    super(props);
    this.state = {
      productsList: [],
      activePage: 1
    };
  }

  componentWillReceiveProps(nextProps){
    if(this.props.productsList != nextProps){
      this.setState({productsList: nextProps.productsList});
    }
  }


  updateList(filter, numberPerPage, pageNumber){
    /*this.setState({productsList: Products.find(
      {/*name: {$regex : `.*${filter}.*`}/}, {sort: {name: 1}, limit: 5, skip: page}).fetch()});*/

    var skip = numberPerPage * (pageNumber - 1);
    filter = filter.toLowerCase();

console.log(`filter: ${filter}  PerPage: ${numberPerPage}  PageNum: ${pageNumber}  skip: ${skip}`);
    this.setState({activePage: pageNumber, productsList: Products.find(
      {name: {$regex : `.*${filter}.*`}}, {sort: {name: 1}, limit: 10, skip: skip}).fetch()});
  }

  onFilterChange(){
    var filter = this.refs.txtFilter.value;
    var numberPerPage = this.refs.ddNumberPerPage.value;
    var pageNumber = this.state.activePage;

    this.updateList(filter, numberPerPage, pageNumber);
  }

  onPageChange(pageNumber){
    var filter = this.refs.txtFilter.value;
    var numberPerPage = this.refs.ddNumberPerPage.value;

    this.updateList(filter, numberPerPage, pageNumber);
  }

  renderList(){
    if(this.state.productsList.length == 0){
      return(<Spinner/>);
      updateFilteredList()
    }

    return(<ProductsList productsList={this.state.productsList}/>);
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
              <input ref="txtFilter" onChange={this.onFilterChange.bind(this)} type="text"
                className="form-control txtSearchProducts"
                placeholder="Rechercher"/>
            </div>
            <div className="col-sm-6">
              <select ref="ddNumberPerPage" onChange={this.onFilterChange.bind(this)} className="form-control ddProductsPerPage">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="40">40</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
        </div>
        {this.renderList()}
        <div className="productsPagination">
          <Paginator max={10} maxVisible={3} onChange={this.onPageChange.bind(this)}/>
        </div>
      </div> // end .productsListAndInputsContainer
    );
  }
}

export default createContainer(() =>{
  Meteor.subscribe('products');
  return {productsList: Products.find({}, {sort: {name: 1}, limit: 10}).fetch()};
  //return {productsList: Meteor.call('products.getFilteredList')};
}, ProductsCard);
