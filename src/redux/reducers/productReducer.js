import { createReducer } from 'common/utils/reducerUtil'
import {
  GET_PRODUCT_LIST_SUCCEESS, GET_PRODUCT_LIST_FAILED,
} from 'redux/constants'


const initialState = {}


const getProductListSuccess = (state, payload) => ({ ...state, products: payload })
const getProductListFailed = state => ({ ...state, products: [] })



export default createReducer(initialState, {
  [GET_PRODUCT_LIST_SUCCEESS]: getProductListSuccess,
  [GET_PRODUCT_LIST_FAILED]: getProductListFailed,
})
