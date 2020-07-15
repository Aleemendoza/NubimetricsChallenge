import {
  GET_PRODUCT,
  GET_ALL_PRODUCT,
  FILTER_PRODUCTS
} from '../actions/products';

const initialState = {
  catalog: [],
  filter: []
  
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
     case GET_PRODUCT:
       return {
         ...state,
         catalog: action.payload.results,
       };
      case GET_ALL_PRODUCT:
      return {
        ...state,
        catalog: action.payload.results
      }
      case FILTER_PRODUCTS :
        return {
          ...state,
          catalog: action.payload.results.price
        }


    default:
      return state
  }
}

export default reducer;
