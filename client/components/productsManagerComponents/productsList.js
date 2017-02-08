import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Products} from '../../../imports/collections/products';
import Spinner from '../spinner';

class ProductsList extends Component{
  componentWillReceiveProps(nextProps){
  console.log("Allo");
  }

  renderList(){
    var productsList = [];

    if(this.props.productsList && this.props.productsList.length > 0){      
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
    }else{
      return(<Spinner/>);
    }
  }

  render(){
    return(
      <div className="list-group productsList">
        {this.renderList()}
      </div>
    );
  }
}

export default createContainer((props) =>{
  console.log(`filter: ${props.filter}  numberPerPage: ${props.numberPerPage}  activePage: ${props.activePage}`);

  //Meteor.subscribe('products', '', INITIAL_NUMBER_PER_PAGE, INITIAL_PAGE_NUMBER);
  Meteor.subscribe('products', props.filter, props.numberPerPage, props.activePage);
  return {productsList: Products.find({}).fetch()};
  //return {productsList: Meteor.call('products.getFilteredList')};
}, ProductsList);
