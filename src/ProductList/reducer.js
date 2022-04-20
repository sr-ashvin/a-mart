import {FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_ERROR} from './actions';
// Initial State object for reducer and store
const initialState = {
  isLoading: false,
  isLoggedIn: false,
  productList: [],
  error: null,
};

// productList reducer with all the action types
const ProductListReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: true,
        productList: payload,
      };
    case FETCH_PRODUCT_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default ProductListReducer;

export const productListSelector = state => state.productList.productList;
