import * as types from '../constants/actionTypes'
import BreweryDB from '../services/BreweryDB'

export const setPage = (page) => ({type: types.SET_PAGE, page})

export const fetchBeers = () => {
  return (dispatch) => {
    dispatch(_fetchBeersStart())
    BreweryDB.getBeers()
      .then((response) => response.json())
      .then((res) => {
        dispatch(_fetchBeersSuccess(res))
      })
      .catch((res) => {
        dispatch(_fetchBeersFailure(res))
      })
  }
}
const _fetchBeersStart = () => ({type: types.FETCH_BEERS_START})
const _fetchBeersSuccess = (response) => ({type: types.FETCH_BEERS_SUCCESS, response})
const _fetchBeersFailure = (response = 'none') => ({type: types.FETCH_BEERS_FAILURE, response})

export const pass = () => ({type: types.PASS})
