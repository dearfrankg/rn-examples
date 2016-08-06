import * as types from '../constants/actionTypes'
import BreweryDB from '../services/BreweryDB'

export const setPage = (page) => ({type: types.SET_PAGE, page})
const setProductIndex = (index) => ({type: types.SET_PRODUCT_INDEX, index})

export const fetchBeers = (products) => {
  return (dispatch) => {

    const pageNeeded = (function () {
      let page
      const hasProductData = ('success' in products && 'data' in products.success)
      if (hasProductData) {
        const {currentPage, numberOfPages} = products.success
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
        dispatch(setProductIndex(0))
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



export const pass = (UI, products) => {
  return (dispatch) => {
    const {productIndex} = UI
    const beersLength = products.success.data.length
    const isRequiringFetch = (productIndex === beersLength - 1)
    if (isRequiringFetch) {
      dispatch(fetchBeers(products))
    } else {
      dispatch(setProductIndex(productIndex + 1))
    }
  }
}
