import React, { Component } from 'react';
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import initialState from './reducers/initialState'
import App from './components/App'
// import * as actions from './actions'
// import { asyncStorageSet } from './utils/AsyncStorage'

const enhancer = compose(
  applyMiddleware(
    thunk,
    createLogger()
  )
)
const store = createStore(rootReducer, initialState, enhancer)
// store.dispatch(actions.getItems)
// store.subscribe(() => {
//   const items = store.getState().playlist.items
//   asyncStorageSet(items)
// })

const app = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default app
