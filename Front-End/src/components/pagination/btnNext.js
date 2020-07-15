import React, { Component } from "react";
import { connect } from "react-redux";
import  btnNext  from '../../actions/products';


export class BtnNext extends Component {
  constructor(props) {
    super(props);
    this.state = {

      keyword: ""
    };
  }
  handleChange(event) {
    this.setState({ 
        pagins: event.target.value 
    });
    
  }
  handleSubmit(event) {
    event.preventDefault()  
    this.props.btnNext(this.state.keyword); 
    
  }
  render() {
    const { keyword } = this.state;
    return (
            <div>
              <div>
                  <input className="form-control mr-sm-2"
                    type="text"
                    id="keyword"
                    placeholder="buscar..."
                    value={keyword}
                    onChange={(e) => this.handleChange(e)}
                  />
              </div>
            <button className="btn btn-primary" type="submit">BUSCAR</button> 
            </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.productLoaded
  };
}

export default connect(mapStateToProps,{ getProduct})(BtnNext);

