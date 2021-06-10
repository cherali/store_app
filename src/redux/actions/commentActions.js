import { GlobalApi } from 'common/utils/api/api'
import { dispatch } from 'index'
import { commentUrl } from 'common/urls'
import {
  GET_PRODUCT_COMMENTS_SUCCEESS, GET_PRODUCT_COMMENTS_FAILED, CLEAR_PRODUCT_COMMENTS,
} from 'redux/constants'


export const getProductCommentsList = (id) => GlobalApi({
  url: `${commentUrl}?postId=${id}`,
  method: 'get',
  successType: GET_PRODUCT_COMMENTS_SUCCEESS,
  failType: GET_PRODUCT_COMMENTS_FAILED,
})

export const clearProductCommentsList = () => dispatch({ type: CLEAR_PRODUCT_COMMENTS })
