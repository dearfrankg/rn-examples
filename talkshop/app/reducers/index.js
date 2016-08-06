import { combineReducers } from 'redux'
import * as types from '../constants/actionTypes'

const products = (state = {}, action) => {
  switch (action.type) {

    case types.FETCH_BEERS_SUCCESS:
      return {
        ...state,
        ...action.response,
        currentProduct: action.response.data[0],
        productIndex: 0,
        error: 'none'
      }

    case types.FETCH_BEERS_FAILURE:
      return {
        data: [],
        error: action.response
      }

    case types.SET_PRODUCT:
      return {
        ...state,
        currentProduct: state.data[action.index],
        productIndex: action.index
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


    default:
      return state
  }
}

const rootReducer = combineReducers({
  products,
  UI
})

export default rootReducer
