import  { AsyncStorage } from 'react-native'

export const asyncStorageGet = () => {
  return AsyncStorage.getItem('@playlist')
    .then(JSON.parse)
    .catch((err) => { console.log(err) })
}

export const asyncStorageSet = (jsObj) => {
  AsyncStorage.setItem('@playlist', JSON.stringify(jsObj))
    .catch((err) => { console.log(err) })
}
