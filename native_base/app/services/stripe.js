const baseUrl = 'https://api.brewerydb.com/v2/'
const apiKey = '25676e3b499c2bc9e35b75ec2632c810'

const getUrl = (route, query) => {
  let url = `${baseUrl}${route}?styleId=15&key=${apiKey}`
  if (query) url += `&${query}`
  return url
}

export default {
  getBeers: (page) => fetch(getUrl('beers', `p=${page}`))
}
