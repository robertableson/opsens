import React from 'react';

const ProductsManager = () =>{
  return(
    <div className="actionPage">
      <div className="actionPageTitle">
        Gestion des produits
      </div>
      <div className="row">
        <div className="col-xs-4">
          <div className="productsManagerPageListHeader">
            <div className="productsManagerPageListTitle">Produits</div>
            <div>
              <input type="text" className="form-control"
                style={{width: '100px'}} placeholder="Rechercher"/>
              <select className="form-control" style={{width: '70px'}}>
                <option value="grapefruit">1</option>
                <option value="lime">2</option>
                <option value="coconut">3</option>
                <option value="mango">4</option>
              </select>

            </div>
          </div>
          <div className="list-group">
            <a href="#" className="list-group-item">These Boots Are Made For Walking</a>
            <a href="#" className="list-group-item active">Eleanor, Put Your Boots On</a>
            <a href="#" className="list-group-item">Puss 'n' Boots</a>
            <a href="#" className="list-group-item">Die With Your Boots On</a>
            <a href="#" className="list-group-item">Fairies Wear Boots</a>
          </div>

        </div>

        <div className="col-xs-8">
          <div className="productsManagerPageListTitle">Instructions de travail</div>
          <div className="list-group">
            <a href="#" className="list-group-item">These Boots Are Made For Walking</a>
            <a href="#" className="list-group-item active">Eleanor, Put Your Boots On</a>
            <a href="#" className="list-group-item">Puss 'n' Boots</a>
            <a href="#" className="list-group-item">Die With Your Boots On</a>
            <a href="#" className="list-group-item">Fairies Wear Boots</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsManager;
