import { postUrl } from 'common/urls'
import { GlobalApi } from 'common/utils/api/api'
import {
  GET_PRODUCT_LIST_SUCCEESS, GET_PRODUCT_LIST_FAILED,
} from 'redux/constants'


export const getProductsList = () => GlobalApi({
    url: postUrl,
    method: 'get',
    successType: GET_PRODUCT_LIST_SUCCEESS,
    failType: GET_PRODUCT_LIST_FAILED,
  })

