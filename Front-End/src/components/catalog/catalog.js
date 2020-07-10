import React from 'react';
import { connect } from "react-redux";
import SingleProduct from '../singleProducts/singleProducts';
import {useEffect} from 'react'
import {getAllProduct} from '../../actions/products'




function Catalog({catalog,getAllProduct}) {

  useEffect(() => {
    getAllProduct();
    
  }, []);

  return  (
    <div className='componentCatalogo'>
        <div className='allProduct'>
              {catalog.map(product =>
                  <SingleProduct
                  title =     {product.title}
                  thumbnail =     {product.thumbnail}
                  price = {product.price}
                  available_quantity = {product.available_quantity}
                  sold_quantity = {product.title}
                  listing_type_id ={product.listing_type_id}
                  condition = {product.condition}
                  />
            )}
        </div>

    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state,
    catalog: state.catalog,
  };
};


export default connect( mapStateToProps, {getAllProduct} )(Catalog);
