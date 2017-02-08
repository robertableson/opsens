import React, {Component} from 'react';
import ProductsList from './productsList';
import Paginator from '../paginator';

import ReactUltimatePagination from 'react-ultimate-pagination';

class ProductsCard extends Component{
  constructor(props){
    super(props);
    this.state = {
      filter: "",
      numberPerPage: 10,
      activePage: 1
    };
  }

  onFilterChange(){
    this.setState({
      filter: this.refs.txtFilter.value,
      numberPerPage: this.refs.ddNumberPerPage
    });
  }

  onPageChange(pageNumber){
    this.setState({activePage: pageNumber});
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
        <ProductsList
          filter={this.state.filter}
          numberPerPage={this.state.numberPerPage}
          activePage={this.state.activePage}
        />
        <div className="productsPagination">
          <Paginator max={10} maxVisible={3} onChange={this.onPageChange.bind(this)}/>
        </div>
      </div> // end .productsListAndInputsContainer
    );
  }
}

export default ProductsCard;
