export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';


export function getAllProduct() {
  return function (dispatch) {
    return fetch("https://api.mercadolibre.com/sites/MLA/search?q=iphone")
      .then(response => response.json())
      .then(json => {
        console.log(json.results)
        dispatch({
          type: GET_ALL_PRODUCT,
          payload: json,
        });
      });
    };
}


export function getProduct(keyword) {
  return function (dispatch) {
    return fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + keyword )
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: GET_PRODUCT,
          payload: json
        });
      });
  };
}

