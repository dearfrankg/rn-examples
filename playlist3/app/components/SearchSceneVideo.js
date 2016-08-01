import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Video from './Video'

export default class SearchSceneVideo extends React.Component {

  getVideoId () {
    return this.props.search.viewedVideo.id
  }

  handleAddToPlaylist = () => {
    this.props.actions.addToPlaylist(this.props.search.viewedVideo)
  }

  footer = (props) => {
    let isInPlaylist = !!(props.playlist.items.filter((item) => {
      return item.id === this.getVideoId()
    })).length
    return (isInPlaylist)
      ? (
        <View
          style={styles.footer}>
          <Icon name='check-square-o' size={25} style={styles.icon} />
        </View>
      )
      : (
        <TouchableHighlight
          style={styles.footer}
          underlayColor={'blue'}
          onPress={this.handleAddToPlaylist}>
          <Text style={styles.footerButtonText}>+ Add to Playlist</Text>
        </TouchableHighlight>
      )
  }

  render () {
    return (
      <Video
        videoId={this.getVideoId()}
        stats={this.props.search.viewedVideo.statistics}
        footer={this.footer}
        {...this.props} />
    )
  }

}

const styles = StyleSheet.create({
  footer: {
    padding: 15,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#ddd'
  },
  footerButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold'
  },
  icon: {
    color: 'green',
    width: 25,
    height: 25,
  }
})
