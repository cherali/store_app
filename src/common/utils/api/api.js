import axios from 'axios'
import { dispatch } from 'index'


const CancelToken = axios.CancelToken
let cancel = {}

async function Api({ method = 'get', url, bodyParams, headerParams, cancelable = false, apiName }) {

  let headers = {
    ...headerParams,
    'accept': 'application/json',
    'Content-Type': 'application/json',
  }

  try {
    // if cancel flag is set and cancel exist cancel request
    cancelable && cancel && cancel[apiName] && cancel[apiName]()

    const res = await axios({
      method: method,
      headers,
      data: bodyParams,
      url,
      // set cancel token
      cancelToken: new CancelToken(function (c) {
        if (cancelable) cancel[apiName] = c;
        else cancel[apiName] = undefined
      }),
      // add timeout
      timeout: 60000,
    })

    return res.data


  } catch (err) {
    // log err
    console.log('err', JSON.stringify(err))
  }
}


export async function GlobalApi({ method, url, successType, failType, bodyParams, headerParams, cancelable = false }) {
  try {
    const res = await Api({
      method,
      url,
      bodyParams,
      headerParams,
      cancelable,
      apiName: successType,
    })

    dispatch({ type: successType, payload: res })


  } catch (err) {
    dispatch({ type: failType })

    // log err
    console.log('err', JSON.stringify(err))
  }
}


export default Api
