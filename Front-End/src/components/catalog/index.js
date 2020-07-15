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
    product: {}
  }

  abrirModal = (product) => {
    this.setState({
      abierto: !this.state.abierto,
      product
    });
  }

  render() {
    return (
      <div className="productContainer" >
        {this.props.catalog && this.props.catalog.map(product => (
          <tr className='producto' key={product.id} style={{ background: "white" }} >
            <div className="id"> id: {product.listingTypeId}</div>

            <img className="imagen" src={product.thumbnail} />
            <h3> {product.title} </h3>
            <h4> precio: ${product.price} </h4>
            <h5> cantidad disponible: {product.available_quantity} </h5>
            <h5> cantidades vendidas: {product.sold_quantity} </h5>
            <h6> tipo de listado: {product.listing_type_id} </h6>
            <p> condicion: {product.condition} </p>


            <Button color="success" onClick={() => { this.abrirModal(product) }}>Ver Producto!</Button>
          </tr>
        ))}
        <div>
          <Modal className="styleModal" isOpen={this.state.abierto} style={{ opacity: "100%" }}>
            <ModalHeader key={this.state.product.id}>
              <h3> {this.state.product.title} </h3>
            </ModalHeader>
            <ModalBody >
              <img className="img" src={this.state.product.thumbnail} alt="" />
              <p>Status: {this.state.product.status}</p>
                <p>Site id: {this.state.product.site_id}</p>
                <p>Cantidad inicial: {this.state.product.initial_quantity} unidades</p>
                <p>Precio base: ${this.state.product.base_price}</p>
                <p>{this.state.product.warranty}</p>
              
            </ModalBody>

            <ModalFooter>

              <Button color="secondary" onClick={this.abrirModal}>Cerrar</Button>
            </ModalFooter>
          </Modal>
        </div>
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


