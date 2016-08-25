import { combineReducers } from 'redux'
import * as types from '../constants/actionTypes'
import {reducer as formReducer} from 'redux-form';

const stripe = (state = {}, action) => {
  switch (action.type) {

    default:
      return state
  }
}

const rootReducer = combineReducers({
  stripe,
  form: formReducer
})

export default rootReducer
