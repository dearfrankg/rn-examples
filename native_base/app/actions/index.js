import * as types from '../constants/actionTypes'
import BreweryDB from '../services/BreweryDB'
import Stripe from '../services/Stripe'
import getInvoiceData from '../utils/InvoiceUtils'

export const setLoading = (isLoading) => ({type: types.SET_LOADING, isLoading})
export const setPage = (page) => ({type: types.SET_PAGE, page})
export const addItemToInvoice = (item) => ({type: types.ADD_ITEM_TO_INVOICE, item})
const setProduct = (index) => ({type: types.SET_PRODUCT, index})

export const fetchBeers = (products) => {
  return (dispatch) => {

    const pageNeeded = (function () {
      let page
      const hasProductData = 'data' in products
      if (hasProductData) {
        const hasViewedAllProducts = (products.productIndex === products.data.length -1)
        const hasMorePages = (products.currentPage !== products.numberOfPages)
        page = (hasViewedAllProducts && hasMorePages) ? products.currentPage + 1 : null
      } else {
        page = 1
      }
      return page
    }())
    if (pageNeeded === null) return

    dispatch(_fetchBeersStart())
    BreweryDB.getBeers(pageNeeded)
      .then((response) => response.json())
      .then(_filterValidProduct)
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
const _filterValidProduct = (res) => ({
  ...res,
  data: res.data.filter((beer) => {
    return (
      'labels' in beer && 'medium' in beer.labels &&
      beer.abv
    )
  })
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

export const chargeCard = (chargeForm) => {
  return (dispatch) => {

    // HARDCODED FOR TESTING
    // const form = chargeCard.form
    const form = {
      ccNumber: 4242424242424242,
      expMonth: 10,
      expYear: 2018,
      cvc: 222
    }



    Stripe.createCardToken(form)
      .then((response) => response.json())
      .then((res) => {
        const invoice = getInvoiceData(chargeForm.items)
        const amount = parseInt(parseFloat(invoice.grandTotal) * 100, 10)
        Stripe.chargeCard({token: res.id, amount})
          .then((response) => response.json())
          .then((res) => {
            console.log('CHARGE_CARD_SUCCESS')
            console.log(res)
          })
          .catch((res) => {
            console.log('CHARGE_CARD_FAILURE')
            console.log(res)
          })
      })
      .catch((res) => {
        console.log('CREATE_TOKEN_FAILURE')
        console.log(res)
      })
  }
}

const _createTokenFailure = (response) => ({type: types.CREATE_TOKEN_FAILURE, response})
const _chargeCardFailure = (response) => ({type: types.CHARGE_CARD_FAILURE, response})
