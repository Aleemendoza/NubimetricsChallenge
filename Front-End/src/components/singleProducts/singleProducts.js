import React from 'react';
import {Link} from  'react-router-dom'



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
        <p>firstName: {this.state.title}</p>,
        <p>lastName: {this.state.thumbnail}</p>
        <p>email : {this.state.price}</p>
        </div>
        );
    }
}






