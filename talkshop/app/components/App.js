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
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import ShoppingCart from './ShoppingCart'
import Detail from './Detail'
import Home from './Home'

export default class App extends React.Component {

  renderPage() {
    const { page } = this.props
    switch (page) {
      case 'shoppingCart':
        return <ShoppingCart/>
      case 'detail':
        return <Detail/>
      default:
        return <Home/>
    }
  }

  render() {
    return (
      <View>
       {this.renderPage()}
      </View>
    )
  }

}

export default connect(
  (state) => ({
    page: state.UI.page
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(App)
