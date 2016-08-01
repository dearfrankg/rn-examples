import React from 'react'
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'

export default class Home extends React.Component {
  handleSearchTermChange = (event) => {
    this.props.actions.setSearchTerm(event.nativeEvent.text.trim())
  }

  handleSubmit = (event) => {
    this.props.actions.search(this.props.search.searchTerm)
  }

  showPlaylist = () => {
    this.props.actions.setScene('PlaylistScene')
  }

  renderSpinner = () => (
    <ActivityIndicator
      style={styles.preloader}
      animating={true}
      color="#111"
      size="large"/>
  )

  renderError = () => (
    <View>
      {this.props.error
        ? <Text style={styles.error}>{this.props.error}</Text>
        : null
      }
    </View>
  )

  renderInstructions = () => (
    <View>
      <Text style={styles.info}>
        <Text style={{fontWeight: 'bold'}}>Playlist</Text>
        {' '}lets you search for youtube videos and edit a playlist in 3 easy steps:
      </Text>
      <Text style={styles.step}>1. Search for videos</Text>
      <Text style={styles.step}>2. Add to playlist</Text>
      <TouchableOpacity
        onPress={this.showPlaylist}>
        <Text style={[styles.step, styles.enjoyButtonText]}>3. Enjoy your playlist!</Text>
      </TouchableOpacity>
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../images/youtube-logo.png')} />

        {this.props.UI.isLoading
          ? this.renderSpinner()
          : <TextInput
              style={styles.searchInput}
              value={this.props.search.searchTerm}
              onChange={this.handleSearchTermChange}
              onSubmitEditing={this.handleSubmit}
              placeholder="Search for videos" />
        }
        {this.renderError()}
        {this.renderInstructions()}
      </View>
    )
  }
}

Home.propTypes = {
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F1F1F1',
    padding: 20,
    paddingTop: 100,
  },
  logo: {
    width: 250,
    height: 150,
    alignSelf: 'center'
  },
  searchInput: {
    height: 60,
    padding: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    marginBottom: 20
  },
  info: {
    marginBottom: 10
  },
  step: {
    marginBottom: 5
  },
  enjoyButtonText: {
    color: '#4078C0',
    fontWeight: 'bold'
  },
  preloader: {
    paddingBottom: 44,
  },
  error: {
    fontSize: 15,
    color: 'red',
    marginBottom: 20,
    alignSelf: 'center'
  }
})
