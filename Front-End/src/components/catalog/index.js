import React from 'react';
import { connect } from "react-redux";
import {getAllProduct} from '../../actions/products'
     



class Catalog extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getAllProduct()
        console.log(this.props.getAllProduct())
    }

render(){

    return (
      <div>
      {this.props.catalog && this.props.catalog.map(product => (
        <tr>
          
          <td> titulo: {product.title} </td>
          <img src={product.thumbnail}/>
          <td> precio: {product.price } </td>
          <td> cantidad disponible: {product.available_quantity} </td>
          <td> cantidades vendidas: {product.sold_quantity} </td>
          <td> tipo de listado: {product.listing_type_id } </td>
          <td> condicion: {product.condition } </td>

          
        </tr>
      ))}
    </div>
    );
}
}

function mapStateToProps(state) {
  return {
    catalog: state.catalog
  };
}

export default connect(mapStateToProps, { getAllProduct})(Catalog);
