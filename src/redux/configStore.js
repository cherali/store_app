import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from 'redux/reducers/rootReducers'


export const configureStore = preloadedState => {
  const middlewares = []
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const storeEnhancers = [middlewareEnhancer]

  const composedEnhancer = compose(
    ...storeEnhancers
  )

  // create store
  const store = createStore(
    rootReducer,
    preloadedState,
    composedEnhancer
  )

  return { store }
};
