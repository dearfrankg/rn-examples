import { combineReducers } from 'redux'
import * as types from '../constants/actionTypes'

const products = (state = {}, action) => {
  switch (action.type) {

    case types.FETCH_BEERS_SUCCESS:
      return {
        ...state,
        success: action.response,
        error: 'none'
      }

    case types.FETCH_BEERS_FAILURE:
      return {
        ...state,
        products: {},
        error: action.response
      }

    default:
      return state
  }
}

const UI = (state = {}, action) => {
  switch (action.type) {

    case types.FETCH_BEERS_START:
      return {
        ...state,
        isLoading: true
      }

    case types.FETCH_BEERS_SUCCESS:
    case types.FETCH_BEERS_FAILURE:
      return {
        ...state,
        isLoading: false
      }

    case types.SET_PRODUCT_INDEX:
      return {
        ...state,
        productIndex: action.index
      }

    default:
      return state
  }
}

const rootReducer = combineReducers({
  products,
  UI
})

export default rootReducer
