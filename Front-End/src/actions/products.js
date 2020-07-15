export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const FILTER_PRODUCTS = 'FILTER_PRODUCT';
export const NEXT_BUTTON = 'NEXT_BUTTON';
export const ACTIVE_PAGE = 'ACTIVE_PAGE'
export const CHANGE_PAGE = 'CHANGE_PAGE'

export function getAllProduct() {
  return function (dispatch) {
   return fetch("https://api.mercadolibre.com/sites/MLA/search?q=")
   
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: GET_ALL_PRODUCT,
          payload: json,
        })
        
      });
  };
}


export function getProduct(keyword) {
  return function (dispatch) {
    return fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + keyword + "/?offset=0&limit=20")
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: GET_PRODUCT,
          payload: json
        });
      });
  };
}


export function filterProducts(keyword) {

  return function (dispatch) {

    return fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + keyword + "&offset=0&limit=50")
      .then(res => res.json())
      .then(json => {
        dispatch({

          type: FILTER_PRODUCTS,
          payload: json
        });
      })
  }
}

export function btnNext(keyword) {

  return function (dispatch) {

    return fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + keyword + "/?offset=0&limit=20")
      .then(res => res.json())
      .then(json => {
        dispatch({

          type: NEXT_BUTTON,
          payload: json
        });
      })
  }
}

export function activePage(number) {
  return {type: "ACTIVE_PAGE", payload: number}
};

export function changePage(number) {
  return {type: "CHANGE_PAGE", payload: number}   
};