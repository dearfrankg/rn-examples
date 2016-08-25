import React, { Component } from 'react';
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import initialState from './reducers/initialState'
import App from './components/App'

const enhancer = compose(
  applyMiddleware(
    thunk,
    createLogger()
  )
)
const store = createStore(rootReducer, initialState, enhancer)

const app = () => {
  return (
    <Provider store={store} >
      <App />
    </Provider>
  )
}

export default app
