import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Home from './Home'
import SearchScene from './SearchScene'
import PlaylistScene from './PlaylistScene'

export default class App extends Component {

  renderScene () {
    const {scene} = this.props.UI
    switch (scene) {
      case 'PlaylistScene':
        return <PlaylistScene {...this.props} />

      case 'SearchScene':
        return <SearchScene {...this.props} />

      default:
        return <Home {...this.props} />
    }

  }

  render () {
    return (
      <View style={styles.container}>
        {this.renderScene()}
      </View>
    )
  }
}

export default connect(
  (state) => ({
    search: state.search,
    playlist: state.playlist,
    UI: state.UI
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
})
