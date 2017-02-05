import React from 'react';
import ProductsList from './productsList';
import InstructionsList from './instructionsList';

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
    </div> //end .actionPage
  );
}

export default ProductsManager;
