var stripe_url = 'https://api.stripe.com/v1/'
var secret_key = 'sk_test_ADQ92wIekb46qQBSlbq9Zkru'

const createCardToken = function ({ccNumber, expMonth, expYear, cvc}) {
  var cardDetails = {
    "card[number]": ccNumber,
    "card[exp_month]": expMonth,
    "card[exp_year]": expYear,
    "card[cvc]": cvc
  }

  var formBody = []
  for (var property in cardDetails) {
    var encodedKey = encodeURIComponent(property)
    var encodedValue = encodeURIComponent(cardDetails[property])
    formBody.push(encodedKey + "=" + encodedValue)
  }
  formBody = formBody.join("&")

  return fetch(stripe_url + 'tokens', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + secret_key
    },
    body: formBody
  })
}

const chargeCard = function ({amount, token}) {
  var cardDetails = {
    "amount": amount,
    "currency": 'usd',
    "source": token,
    "description": 'Charge for dearfrankg@gmail.com',
  }

  var formBody = []
  for (var property in cardDetails) {
    var encodedKey = encodeURIComponent(property)
    var encodedValue = encodeURIComponent(cardDetails[property])
    formBody.push(encodedKey + "=" + encodedValue)
  }
  formBody = formBody.join("&")

  return fetch(stripe_url + 'charges', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + secret_key
    },
    body: formBody
  })
}

export default {
  createCardToken,
  chargeCard
}
