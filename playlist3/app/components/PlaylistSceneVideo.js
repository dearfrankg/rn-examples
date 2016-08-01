import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  WebView,
  Dimensions,
  TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Video from './Video'

export default class PlaylistSceneVideo extends React.Component {

  getVideoId() {
    return this.props.playlist.selectedItem.id
  }

  render () {
    return (
      <Video
        videoId={this.getVideoId()}
        stats={this.props.playlist.selectedItem.statistics}
        {...this.props} />
    )
  }
}
