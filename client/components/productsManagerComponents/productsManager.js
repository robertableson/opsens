import React from 'react';
import ProductsCard from './productsCard';
import InstructionsList from './instructionsList';

const ProductsManager = () =>{
  return(
    <div className="actionPage">
      <div className="actionPageTitle">
        Gestion des produits
      </div>
      <div className="row">
        <ProductsCard/>

      </div> {/* end .row */}
    </div> //end .actionPage
  );
}

export default ProductsManager;
