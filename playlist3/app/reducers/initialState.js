const initialState = {
  search: {
    searchTerm: '',
    result: {
      items: [],
      prevPageToken: null,
      nextPageToken: null,
      pageInfo: {
        resultsPerPage: 0,
        totalResults: 0
      }
    },
    viewedVideo: {},
    error: '',
  },
  playlist: {
    items: []
  },
  UI: {
    isLoading: false,
    scene: '',
    page: ''
  }
}

export default initialState


/*
search: {
  searchTerm: '',
  isViewingResult: false,
  result: {
    items: [],
    prevPageToken: null,
    nextPageToken: null,
    pageInfo: {
      resultsPerPage: 0,
      totalResults: 0
    }
  },
  error: ''
},
playlist: {
  isShowingPlaylist: false,
  items: []
},
UI: {
  isLoading: false
}
*/
