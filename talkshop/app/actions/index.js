import * as types from '../constants/actionTypes'
import BreweryDB from '../services/BreweryDB'

export const setPage = (page) => ({type: types.SET_PAGE, page})
const setProduct = (index) => ({type: types.SET_PRODUCT, index})

export const fetchBeers = (products) => {
  return (dispatch) => {

    const pageNeeded = (function () {
      let page
      const hasProductData = 'data' in products
      if (hasProductData) {
        const {currentPage, numberOfPages} = products
        const hasNoMorePages = (currentPage === numberOfPages)
        page = (hasNoMorePages) ? null : currentPage + 1
      } else {
        page = 1
      }
      return page
    }())
    if (pageNeeded === null) return

    dispatch(_fetchBeersStart())
    BreweryDB.getBeers(pageNeeded)
      .then((response) => response.json())
      .then(_filterPicsOnly)
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
const _filterPicsOnly = (res) => ({
  ...res,
  data: res.data.filter((beer) => 'labels' in beer && 'medium' in beer.labels)
})



export const pass = (products) => {
  return (dispatch) => {
    const {productIndex} = products
    const beersLength = products.data.length
    const isRequiringFetch = (productIndex === beersLength - 1)
    if (isRequiringFetch) {
      dispatch(fetchBeers(products))
    } else {
      dispatch(setProduct(productIndex + 1))
    }
  }
}
