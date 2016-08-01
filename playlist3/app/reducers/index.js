import { combineReducers } from 'redux'
import * as types from '../constants/actionTypes'
import * as actions from '../actions'
import initialState from './initialState'


const initialSearchState = initialState.search
const search = (state = initialSearchState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.searchTerm
      }

    case types.SEARCH_SUCCESS:
      return {
        ...state,
        result: {
          ...state.result,
          items: action.data.items,
          prevPageToken: action.data.prevPageToken || null,
          nextPageToken: action.data.nextPageToken || null,
          pageInfo: action.data.pageInfo
        }
      }

    case types.MORE_SEARCH_SUCCESS:
      return {
        ...state,
        result: {
          ...state.result,
          items: [
            ...state.result.items,
            ...action.data.items
          ],
          prevPageToken: action.data.prevPageToken || null,
          nextPageToken: action.data.nextPageToken || null,
          pageInfo: action.data.pageInfo
        }
      }

    case types.SEARCH_FAILED:
      return {
        ...state,
        error: action.message,
        result: {
          items: [],
          prevPageToken: null,
          nextPageToken: null,
          pageInfo: {
            resultsPerPage: 0,
            totalResults: 0
          }
        }
      }

    case types.VIDEO_FETCH_SUCCESS:
      return {
        ...state,
        viewedVideo: action.data
      }

    default:
      return state
  }
}

const initialPlaylistState = initialState.playlist
const playlist = (state = initialPlaylistState, action) => {
  switch (action.type) {
    case types.ADD_TO_PLAYLIST:
      return {
        ...state,
        items: [
          ...state.items,
          action.item
        ]
      }

    case types.SELECT_PLAYLIST_ITEM:
      return {
        ...state,
        selectedItem: action.item
      }

    default:
      return state
  }
}

const initialUIState = initialState.UI
const UI = (state = initialUIState, action) => {
  switch (action.type) {
    case types.GET_ITEMS_STARTED:
    case types.SEARCH_STARTED:
    case types.VIDEO_FETCH_STARTED:
      return {
        ...state, isLoading: true
      }

    case types.GET_ITEMS_SUCCESS:
    case types.SEARCH_SUCCESS:
    case types.MORE_SEARCH_SUCCESS:
    case types.SEARCH_FAILED:
    case types.VIDEO_FETCH_SUCCESS:
    case types.VIDEO_FETCH_FAILED:
      return {
        ...state, isLoading: false
      }

    case types.SET_SCENE:
      return {
        ...state, scene: action.scene
      }

    case types.SET_PAGE:
      return {
        ...state, page: action.page
      }

    default:
      return state
  }
}

const rootReducer = combineReducers({
  search,
  playlist,
  UI
})

export default rootReducer
