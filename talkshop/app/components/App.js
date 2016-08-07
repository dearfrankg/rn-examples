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
    const { page } = this.props.UI
    switch (page) {
      case 'shoppingCart':
        return <ShoppingCart {...this.props} />
      case 'detail':
        return <Detail {...this.props} />
      default:
        return <ShoppingCart {...this.props} />
        return <Home {...this.props} />
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
       {this.renderPage()}
      </View>
    )
  }

}

export default connect(
  (state) => ({
    UI: state.UI,
    products: state.products
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(App)
