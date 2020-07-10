import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { getProducts } from '../../actions/products';
import './Buscador.css';



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
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">productos: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {this.props.catalog && this.props.catalog.map((P, i) => (
            <div key={1} className="row cnt">
              <NavLink className="col-4" to={`/movie/${P.imdbID}`} >
                {P.title}
              </NavLink>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.productLoaded
  };
}

export default connect(
  mapStateToProps,
  { getProducts }
)(Buscador);
