import React from 'react'
import List from './List'

export default class PlaylistSceneList extends React.Component {

  handleRowPress = (rowData) => {
    this.props.actions.selectPlaylistItem(rowData)
    this.props.actions.setPage('VideoDetails')
  }

  render() {
    return (
      <List
        datasource={this.props.playlist.items}
        handleRowPress={this.handleRowPress} />
    )
  }

}
