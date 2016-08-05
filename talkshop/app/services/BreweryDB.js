const baseUrl = 'https://api.brewerydb.com/v2/'
const apiKey = '25676e3b499c2bc9e35b75ec2632c810'

const getUrl = (route, query) => {
  let url = `${baseUrl}${route}?styleId=15&key=${apiKey}`
  if (query) url += `&$query}`
  return url
}

export default {
  getBeers: () => fetch(getUrl('beers'))
}


/*

    {
      id: "VxrC7C",
      name: "10 Day Scottish Ale",
      nameDisplay: "10 Day Scottish Ale",
      description: "A dark amber ale that focuses on the rich, nutty flavors of the malted barley it is made from. Malty and lightly sweet with a smooth, clean finish.",
      abv: "5.4",
      styleId: 15,
      isOrganic: "N",
      labels: {
        icon: "https://s3.amazonaws.com/brewerydbapi/beer/VxrC7C/upload_jlVWHQ-icon.png",
        medium: "https://s3.amazonaws.com/brewerydbapi/beer/VxrC7C/upload_jlVWHQ-medium.png",
        large: "https://s3.amazonaws.com/brewerydbapi/beer/VxrC7C/upload_jlVWHQ-large.png"
      },
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2012-06-26 20:57:31",
      updateDate: "2015-12-16 17:58:16",
      style: {
        id: 15,
        categoryId: 1,
        category: {
          id: 1,
          name: "British Origin Ales",
          createDate: "2012-03-21 20:06:45"
        },
        name: "Scotch Ale",
        shortName: "Scotch Ale",
        description: "Scotch ales are overwhelmingly malty and full-bodied. Perception of hop bitterness is very low. Hop flavor and aroma are very low or nonexistent. Color ranges from deep copper to brown. The clean alcohol flavor balances the rich and dominant sweet maltiness in flavor and aroma. A caramel character is often a part of the profile. Dark roasted malt flavors and aroma may be evident at low levels. If present, fruity esters are generally at low aromatic and flavor levels. Low diacetyl levels are acceptable. Chill haze is allowable at cold temperatures. Though there is little evidence suggesting that traditionally made strong Scotch ales exhibited peat smoke character, the current marketplace offers many Scotch Ales with peat or smoke character present at low to medium levels. Thus a peaty/smoky character may be evident at low levels (ales with medium or higher smoke character would be considered a smoke flavored beer and considered in another category). Scotch Ales may be split into two subcategories: Traditional (no smoke character) and Peated (low level of peat smoke character).",
        ibuMin: "25",
        ibuMax: "35",
        abvMin: "6.2",
        abvMax: "8",
        srmMin: "15",
        srmMax: "30",
        ogMin: "1.072",
        fgMin: "1.016",
        fgMax: "1.028",
        createDate: "2012-03-21 20:06:45",
        updateDate: "2015-04-07 15:21:11"
      }
    },

http://api.brewerydb.com/v2/beers?styleId=15&key=25676e3b499c2bc9e35b75ec2632c810
*/
