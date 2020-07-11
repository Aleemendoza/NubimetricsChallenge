import {
  GET_PRODUCT,
  GET_ALL_PRODUCT,

} from '../actions/products';

console.log(GET_PRODUCT, 'que importo?')
const initialState = {
  catalog: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
     case GET_PRODUCT:
       return {
         ...state,
         catalog: action.payload,
       };
      case GET_ALL_PRODUCT:
      console.log(action.payload.results, 'este es')  
      return {
        ...state,
        catalog: action.payload.results
      }
    default:
      return state
  }
}

export default reducer;
