import React from 'react'
import { StyleSheet, } from 'react-native'
import { View, Text } from 'native-base';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Welcome from './Welcome'

export default class App extends React.Component {

  // renderPage() {
  //   const { page } = this.props.UI
  //   switch (page) {
  //     case 'cardForm':
  //       return <CardForm {...this.props} />
  //     case 'shoppingCart':
  //       return <ShoppingCart {...this.props} />
  //     case 'detail':
  //       return <Detail {...this.props} />
  //     default:
  //       return <Home {...this.props} />
  //   }
  // }

  render() {
    return (
      <View style={{flex: 1}}>
       <Welcome />
      </View>
    )
  }

}

// export default connect(
//   (state) => ({
//     UI: state.UI,
//     products: state.products,
//     invoice: state.invoice
//   }),
//   (dispatch) => ({
//     actions: bindActionCreators(actions, dispatch)
//   })
// )(App)
