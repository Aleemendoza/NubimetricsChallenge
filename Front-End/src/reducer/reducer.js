import {
    GET_PRODUCT, 
    GET_ALL_PRODUCT, 
    
   } from '../actions/products';
   
  const initialState = {
   catalog: []
 
 };
   const reducer = (state = initialState , action) => {
     switch (action.type) {
       case GET_PRODUCT:
           return {        
             ...state,     
             catalog: action.payload
           }; 
       case GET_ALL_PRODUCT:
         return {
           ...state,
           catalog: action.payload
         }
   }
}
   export default reducer;
 