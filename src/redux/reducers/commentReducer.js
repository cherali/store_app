import { createReducer } from 'common/utils/reducerUtil'
import {
  GET_PRODUCT_COMMENTS_SUCCEESS, GET_PRODUCT_COMMENTS_FAILED, CLEAR_PRODUCT_COMMENTS,
} from 'redux/constants'


const initialState = {}


const getProductCommentsSuccess = (state, payload) => ({ ...state, productComments: payload })
const getProductCommentsFailed = state => ({ ...state, productComments: [] })
const clearProductComments = state => ({ ...state, productComments: null })



export default createReducer(initialState, {
  [GET_PRODUCT_COMMENTS_SUCCEESS]: getProductCommentsSuccess,
  [GET_PRODUCT_COMMENTS_FAILED]: getProductCommentsFailed,
  [CLEAR_PRODUCT_COMMENTS]: clearProductComments
})
