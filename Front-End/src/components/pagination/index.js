import React from "react";
import { Pagination } from "react-bootstrap";
import { connect } from "react-redux";
import {activePage, changePage} from "../../actions/products";


function Pag({pagination, activePage, changePage, itemsQ }) {
    let items = [];
    var max = pagination.first + 4
    if(pagination.first + 4 > Math.ceil(itemsQ/pagination.pages)) {
        max = Math.ceil(itemsQ/pagination.pages)
    };
    for (let number = pagination.first; number <= max; number++) {
        items.push(
        <Pagination.Item onClick={() => activePage(number)} key={number} active={number === pagination.active} >
          {number}
        </Pagination.Item>,
         );
    };
    function handleNext() {
        if(pagination.first + 5 <= Math.ceil(itemsQ/pagination.pages)) {
            changePage(5)
            activePage(pagination.first + 5)
        }
    };
    function handlePrev() {
        if(pagination.first > 1) {
            changePage(-5)
            activePage(pagination.first - 1)
        }
    };
    return (
        <div style={{margin: 20}}>
        <Pagination>
        <Pagination.Prev onClick={handlePrev}/>
        <Pagination>{items}</Pagination>
        <Pagination.Next onClick={handleNext}/>
        </Pagination>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        pagination: state.pagination
    }
};

export default connect(mapStateToProps, {activePage, changePage})(Pag);