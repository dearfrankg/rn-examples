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
import Icon from 'react-native-vector-icons/FontAwesome'

export default class ShoppingCart extends React.Component {

  componentWillMount () {
    // this.props.actions.fetchBeers(this.props.products)
  }

  renderNavBar () {
    return (
      <View style={styles.navBar}>
        <Text>{'       '}</Text>
        <Text>Shopping Cart</Text>
        <Icon style={styles.navBarIcons} name='cog' size={15} />
      </View>
    )
  }

  renderSpacer () {
    return (
      <View style={styles.spacer}>
        {/*<Text>spacer</Text>*/}
      </View>
    )
  }

  renderCart () {
    return (
      <View style={styles.cart}>
        <Text>Cart</Text>
        <View style={styles.lineItems}>

            <View style={{flexDirection: 'row'}}>
              <Text>Fort Worth Beer</Text>
              {this.renderSpacer()}
              <Text>$111.00</Text>
              <Text>$111.00</Text>
            </View>


          {/*{this.renderLineItem()}
          {this.renderLineItem()}*/}
        </View>
        {this.renderSpacer()}
        <View style={styles.info}>
          {this.renderSpacer()}
          <Text style={{fontWeight: 'bold'}}>Total: $500.00</Text>
        </View>
      </View>
    )
  }

  renderLineItem () {
    return (
      <View style={styles.lineItem}>
        <Text>Fort Worth Beer</Text>
        {this.renderSpacer()}
        <Text>$100.00</Text>
      </View>
    )
  }

  renderContent () {
    return (
      <View style={styles.content}>
        {this.renderCart()}
        {this.renderSpacer()}
      </View>
    )
  }

  renderSpinner () {
    return (
      <View style={styles.content}>
        {this.renderSpacer()}
        <ActivityIndicator
          style={styles.preloader}
          animating={true}
          color="#111"
          size="large"/>
        {this.renderSpacer()}
      </View>
    )
  }

  render() {
    const isLoading = false
    return (
      <View style={styles.container}>
        {this.renderNavBar()}
        { isLoading
          ? this.renderSpinner()
          : this.renderContent()
        }
      </View>
    )
  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'pink'
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f22',
  },

  spacer: {
    flex: 1,
    // backgroundColor: '#ff2'
  },

  cart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
    // borderColor: 'black',
    // borderRadius: 5,
    // borderWidth: 0.2,
    // width: 290,
    // height: 290,
    backgroundColor: '#22f'
  },

  lineItems: {
    flexDirection: 'column',
    backgroundColor: '#ff2'
  },

  lineItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
    padding: 0,
    backgroundColor: '#f2f',
  },

  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 10
  },

  navBarIcons: {
    paddingRight: 20
  },

  title: {
    margin: 1,
    padding: 5,
  },

  info: {
    flexDirection: 'row',
    padding: 5,
  }

})
