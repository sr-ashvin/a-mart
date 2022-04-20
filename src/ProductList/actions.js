import constants from '../../components/constants';

const PRODUCT = '[Product]';
export const FETCH_PRODUCT_REQUEST = `${PRODUCT} Fetch Request`;
export const FETCH_PRODUCT_SUCCESS = `${PRODUCT} Fetch Success`;
export const FETCH_PRODUCT_ERROR = `${PRODUCT} Fetch Error`;

export const fetchProductList = () => async dispatch => {
  dispatch({type: FETCH_PRODUCT_REQUEST});
  try {
    fetch(constants.BASE_URL + 'products')
      .then(response => response.json())
      .then(data => {
        return dispatch({
          type: FETCH_PRODUCT_SUCCESS,
          payload: data,
        });
      })
      .catch(error => {
        return dispatch({
          type: FETCH_PRODUCT_ERROR,
          payload: error,
        });
      });
  } catch (error) {
    return dispatch({
      type: FETCH_PRODUCT_ERROR,
      payload: error,
    });
  }
};
