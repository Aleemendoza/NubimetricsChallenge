import {
  GET_PRODUCT,
  GET_ALL_PRODUCT,
  FILTER_PRODUCTS,
  CHANGE_PAGE,
  ACTIVE_PAGE

} from '../actions/products';

const initialState = {
  catalog: [],
  filter: [],
  pagination: {
    active: 1,
    first: 1,
    pages: 20
  }
  
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
      case ACTIVE_PAGE :
          return {
            ...state,
            pagination: {
              ...state.pagination,
              active: action.payload
            }
          }
        
        case CHANGE_PAGE :
          return {
            ...state,
            pagination: {
              ...state.pagination,
              first: state.pagination.first + action.payload
            }
          }
        
    default:
      return state
  }
}

export default reducer;
