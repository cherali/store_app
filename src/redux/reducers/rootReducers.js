import { combineReducers } from 'redux'
import productReducer from './productReducer'
import commentReducer from './commentReducer'


const rootReducers = combineReducers({
  products: productReducer,
  comments: commentReducer,
})

export default rootReducers
