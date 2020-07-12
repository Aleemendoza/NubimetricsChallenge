import React from 'react';




export default class Product extends React.Component{
    constructor (props){
        super (props);
        this.state = {
            title: this.props.title,
            thumbnail: this.props.thumbnail,
            price: this.props.price,
            available_quantity: this.props.available_quantity,
            sold_quantity: this.props.title,
            listing_type_id: this.props.listing_type_id, 
            condition:  this.props.condition}
    }
    render(){
        return (
            <div>
        <p>title: {this.state.title}</p>
        <p>thumbnail: {this.state.thumbnail}</p>
        <p>price : {this.state.price}</p>
        </div>
        );
    }
}






