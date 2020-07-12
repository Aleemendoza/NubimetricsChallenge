import React, { Component } from "react";
import { connect } from "react-redux";
import { getProduct } from '../../actions/products';


export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {

      title: this.props.title,
      thumbnail: this.props.thumbnail,
      price: this.props.price,
      available_quantity: this.props.available_quantity,
      sold_quantity: this.props.title,
      listing_type_id: this.props.listing_type_id,
      condition: this.props.condition

    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getProduct(this.state);
  }
  render() {
    const { keyword } = this.state;
    return (
      <div>
        <form  onSubmit={(e) => this.handleSubmit(e)}>
              <div>
                  <input
                    type="text"
                    id="keyword"
                    value={keyword}
                    onChange={(e) => this.handleChange(e)}
                  />
              </div>

              <button type="submit">BUSCAR</button> 
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.productLoaded
  };
}

export default connect(mapStateToProps,{ getProduct})(Buscador);

