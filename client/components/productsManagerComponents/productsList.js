import React, {Component} from 'react';

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
      <div className="list-group productsList">
        {this.renderList()}
      </div>
    );
  }
}

export default ProductsList;
