import React from 'react';
import { connect } from "react-redux";
import { getAllProduct, getProduct } from '../../actions/products'
import './index.css'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Catalog extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllProduct()
  }
  state = {
    abierto: false,
  }

  abrirModal = (listingTypeId) => {
    this.setState({ abierto: !this.state.abierto });
  }

  render() {
    return (
      <div className="productContainer" >
        {this.props.catalog && this.props.catalog.map(product => (
          <tr className='producto' key = {product.id} style= {{background:"white"}} >

            <img className="imagen" src={product.thumbnail} />
            <h3> {product.title} </h3>
            <h4> precio: ${product.price} </h4>
            <h5> cantidad disponible: {product.available_quantity} </h5>
            <h5> cantidades vendidas: {product.sold_quantity} </h5>
            <h6> tipo de listado: {product.listing_type_id} </h6>
            <p> condicion: {product.condition} </p>
            <div className="id"> id: {product.listingTypeId}</div>
            
            <Button color="success" onClick={this.abrirModal}>Ver Producto!</Button>
            <div>
            <Modal className = "styleModal" isOpen={this.state.abierto} style = {{opacity: "100%"}}>
              <ModalHeader key = {product.id}>
                <h3> {product.title} </h3>
              </ModalHeader>
              <ModalBody >
              <img className="img" src={product.thumbnail} alt=""/>
      <div>{product.condition}</div>
      <div>{product.title}</div>
      <div>$ {product.price}</div>
      <div>{product.availableQ} disponibles</div>
      <div>{product.soldQ} vendidos</div>
      <div>{product.listingTypeId}</div>
              </ModalBody>

              <ModalFooter>

                <Button color="secondary" onClick={this.abrirModal}>Cerrar</Button>
              </ModalFooter>
            </Modal>
            </div>
          </tr>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    catalog: state.catalog,

  };
}

export default connect(mapStateToProps, { getAllProduct, getProduct })(Catalog);


