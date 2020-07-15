import React, { Component } from "react";
import { connect } from "react-redux";
import { getProduct } from '../../actions/products';


export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {

      keyword: ""
    };
  }
  handleChange(event) {
    this.setState({ keyword: event.target.value });
    
  }
  handleSubmit(event) {
    event.preventDefault()  
    this.props.getProduct(this.state.keyword); 
    
  }
  render() {
    const { keyword } = this.state;
    return (
      <div className="navbar navbar-light bg-dark justify-content-between" style = {{height: "100px"}}>
        <div className ="navbar-brand" style= {{color: "white"}} >Encontra lo que buscas! </div>
        <form className="form-inline" onSubmit={(e) => this.handleSubmit(e)}>
              <div>
                  <input className="form-control mr-sm-2"
                    type="text"
                    id="keyword"
                    value={keyword}
                    onChange={(e) => this.handleChange(e)}
                  />
              </div>
            
              <button className="btn btn-primary" type="submit">BUSCAR</button> 
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

