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

  updateFilteredList(){
    var filter = this.refs.txtFilter.value;

    this.setState({productsList: Products.find(
      {name: {$regex : `.*${filter}.*`}}).fetch()});
  }

  onPageChange(pageNumber){
    this.setState({activePage: pageNumber});
  }

  renderList(){
    if(this.state.productsList.length == 0){
      return(<Spinner/>);
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
              <input ref="txtFilter" onChange={this.updateFilteredList.bind(this)} type="text"
                className="form-control txtSearchProducts"
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
        {this.renderList()}
        <div className="productsPagination">
          {/*<a href="">{"<<  <  1  2  3  >  >>"}</a>*/}
          <Paginator max={10} maxVisible={3} onChange={this.onPageChange.bind(this)}/>
        </div>
      </div> // end .productsListAndInputsContainer
    );
  }
}

export default createContainer(() =>{
  Meteor.subscribe('products');
  return {productsList: Products.find({}).fetch()};
}, ProductsCard);
