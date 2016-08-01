import React, { Component } from 'react'
import {
  Navigator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import SearchSceneResult from './SearchSceneResult'
import SearchSceneVideo from './SearchSceneVideo'

export default class SearchScene extends Component {

  componentWillReceiveProps(nextProps) {
    let routes = []
    if (this.refs.navigator) { // if navigator is in the dom
      routes = this.refs.navigator.getCurrentRoutes()
    }
    const onVideoDetailsPage = routes.length === 2

    const {page} = nextProps.UI
    switch (page) {
      case 'VideoDetails':
        if (onVideoDetailsPage) return
        this.refs.navigator.push({
          id: 'VideoDetails',
          title: nextProps.search.viewedVideo.snippet.title.substring(0, 20) + '...',
          index: 1
        })
    }
  }

  renderScene = (route, navigator) => {
    switch (route.id) {
      case 'VideoDetails':
        return (
          <View style={styles.scene}>
            <SearchSceneVideo
              {...this.props} />
          </View>
        )

      default:
        return (
          <View style={styles.scene}>
            <SearchSceneResult
              {...this.props} />
          </View>
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{
          id: 'SearchResults',
          title: `'${this.props.search.searchTerm}'`,
          index: 0
        }}
        ref="navigator"
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navBar}
            routeMapper={NavigationBarRouteMapper} />
        }
        setScene={this.props.actions.setScene} />
    )
  }
}

const NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if (index === 0) {
      return (
        <TouchableOpacity
          onPress={navigator.props.setScene}
          style={styles.navBarLeftButton}>
          <Text style={[styles.navBarText, styles.navBarButtonText]}>
            <Icon name='arrow-left' size={15} style={styles.icon} />
            {' '}Search
          </Text>
        </TouchableOpacity>
       )
    }

    const previousRoute = navState.routeStack[index - 1]
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          <Icon name='arrow-left' size={15} style={styles.icon} />
          {' '}{(index === 1)  ? 'Result' : 'Back'}
        </Text>
      </TouchableOpacity>
    )
  },

  RightButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity
        onPress={navigator.props.setScene}
        style={styles.navBarRightButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          <Icon name='search' size={15} style={styles.icon} />
        </Text>
      </TouchableOpacity>
    )
  },

  Title(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </Text>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center'
  },
  navBar: {
    backgroundColor: 'white',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  scene: {
    flex: 1,
    paddingTop: 63,
  }

});
