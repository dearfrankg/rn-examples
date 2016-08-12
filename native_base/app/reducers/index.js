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
      return {
        ...state,
        isLoading: false
      }

    case types.SET_PAGE:
      return {
        ...state,
        page: action.page
      }

    default:
      return state
  }
}

const invoice = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_ITEM_TO_INVOICE:
      return {
        ...state,
        items: [
          ...state.items,
          action.item
        ]
      }

    default:
      return state
  }
}



const rootReducer = combineReducers({
  products,
  UI,
  invoice
})

export default rootReducer
