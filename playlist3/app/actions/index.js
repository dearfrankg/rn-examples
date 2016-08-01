import { asyncStorageGet, asyncStorageSet } from '../utils/AsyncStorage'
import * as types from '../constants/actionTypes'

const youtubeApiKey = 'AIzaSyB8k0w1WW042EBy4dhkSlvx5hOsJwh0bXg'
const youtubeApiBaseUrl = 'https://www.googleapis.com/youtube/v3'

export const getItems = () => {
  return (dispatch) => {
    dispatch(_getItemsStart())
    asyncStorageGet()
      .then((items) => {
        dispatch(_getItemsSuccess(items))
      })
      .catch((err) => {
        dispatch(_getItemsFailed(err.Error || null))
      })
  }
}
const _getItemsStarted = () => ({type: types.GET_ITEMS_STARTED})
const _getItemsSuccess = (items) => ({type: types.GET_ITEMS_SUCCESS, items})
const _getItemsFailed = () => ({type: types.GET_ITEMS_FAILED})

export const setSearchTerm = (searchTerm) => ({type: types.SET_SEARCH_TERM, searchTerm})
export const setScene = (scene) => ({type: types.SET_SCENE, scene})
export const setPage = (page) => ({type: types.SET_PAGE, page})

export const search = (searchTerm, nextPageToken = null) => {
  return (dispatch) => {
    dispatch(_searchStarted(searchTerm))

    const encodedKeyword = searchTerm.replace(' ', '+')
    let url = `${youtubeApiBaseUrl}/search?part=snippet&q=${encodedKeyword}&type=video&maxResults=10&key=${youtubeApiKey}`
    if (nextPageToken) {
      url += `&pageToken=${nextPageToken}`
    }

    return fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) throw data.error.message || 'Unable to search'
        return data
      })
      .then((data) => {
        if (!nextPageToken) {
          dispatch(_searchSuccess(data))
          dispatch(setScene('SearchScene'))
        } else {
          dispatch(_moreSearchSuccess(data))
        }
      })
      .catch((err) => {
        dispatch(_searchFailed(err))
      })
  }
}
const _searchStarted = (searchTerm) => ({type: types.SEARCH_STARTED, searchTerm})
const _searchSuccess = (data) => ({type: types.SEARCH_SUCCESS, data})
const _moreSearchSuccess = (data) => ({type: types.MORE_SEARCH_SUCCESS, data})
const _searchFailed = (message) => ({type: types.SEARCH_FAILED, message})

export const videoFetch = (videoId) => {
  return (dispatch) => {
    dispatch(_videoFetchStarted())

    const url = `${youtubeApiBaseUrl}/videos?part=snippet%2Cstatistics%2Cplayer&id=${videoId}&maxResults=1&key=${youtubeApiKey}`
    return fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) throw data.error.message || 'Unable to view video'
        return data
      })
      .then((data) => {
        const video = (data.pageInfo.totalResults > 0) ? data.items[0] : null
        dispatch(_videoFetchResult(video))
        dispatch(setPage('VideoDetails'))
      })
      .catch((err) => {
        dispatch(_videoFetchFailed(err))
      })
  }
}
const _videoFetchStarted = () => ({type: types.VIDEO_FETCH_STARTED})
const _videoFetchResult = (data) => ({type: types.VIDEO_FETCH_SUCCESS, data})
const _videoFetchFailed = (message) => ({type: types.VIDEO_FETCH_FAILED, message})

export const addToPlaylist = (item) => ({type: types.ADD_TO_PLAYLIST, item})
export const selectPlaylistItem = (item) => ({type: types.SELECT_PLAYLIST_ITEM, item})
