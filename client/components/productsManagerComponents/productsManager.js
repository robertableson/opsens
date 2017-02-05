import React from 'react';
import ProductsList from './productsList';
import InstructionsList from './instructionsList';
import Test from './test';

const ProductsManager = () =>{
  return(
    <div className="actionPage">
      <div className="actionPageTitle">
        Gestion des produits
      </div>
      <div className="row">
        <ProductsList/>
        <InstructionsList/>
      </div> {/* end .row */}
      <Test/>
    </div> //end .actionPage
  );
}

export default ProductsManager;
