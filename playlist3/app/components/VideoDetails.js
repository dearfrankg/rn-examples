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

export default class VideoDetails extends React.Component {
  // componentWillUnmount() {
  //   this.props.actions.videoFetchUnload()
  // }

  getVideoId() {
    return this.props.search.viewedVideo.id
  }

  getPlayer() {
    const {height, width} = Dimensions.get('window');
    const videoId = this.getVideoId()
    return {
      html: `<iframe
              width="${width-15}"
              height="280"
              src="https://www.youtube.com/embed/${videoId}"
              frameborder="0">
            </iframe>`
    }
  }

  handleAddToPlaylist = () => {
    this.props.actions.addToPlaylist(this.props.search.viewedVideo)
  }

  formatStat(count) {
    return parseInt(count, 10).toLocaleString()
  }

  renderFooter = (props) => {
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

  render() {
    const player = this.getPlayer()
    const stats = this.props.search.viewedVideo.statistics

    return (
      <View style={styles.container}>
        <View style={styles.webview}>
          <WebView
            source={player} />
        </View>
        <View style={styles.statistics}>
          <Text style={styles.stats}>
            * <Text style={{fontWeight: 'bold'}}>{this.formatStat(stats.viewCount)}</Text> Views
          </Text>
          <Text style={styles.stats}>
            * <Text style={{fontWeight: 'bold'}}>{this.formatStat(stats.likeCount)}</Text> Likes
          </Text>
          <Text style={styles.stats}>
            * <Text style={{fontWeight: 'bold'}}>{this.formatStat(stats.commentCount)}</Text> Comments
          </Text>
        </View>
        {this.renderFooter(this.props)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    height: 290
  },
  statistics: {
    padding: 10,
    flex: 1
  },
  stats: {
    fontSize: 16
  },
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
