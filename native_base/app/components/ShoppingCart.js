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

  handleBackButton = () => {
    this.props.actions.setPage('')
  }

  renderNavBar () {
    return (
      <View style={styles.navBar}>
        <TouchableOpacity onPress={this.handleBackButton}>
          <Icon style={styles.navBarLeftIcon} name='arrow-left' size={15} />
          <Text>   Back</Text>
        </TouchableOpacity>
        {this.renderSpacer()}
        <Text>Shopping Cart</Text>
        {this.renderSpacer()}
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
    const invoice = this.convertInvoiceStructure()
    return (
      <View style={styles.cart}>
        {invoice.lineItems.map((item, i) => (
          this.renderLineItem(item, i)
        ))}
        {this.renderSpacer()}
        <View style={styles.info}>
          {this.renderSpacer()}
          <Text style={{fontWeight: 'bold'}}>Total: ${invoice.grandTotal}</Text>
        </View>
      </View>
    )
  }

  renderLineItem (item, i) {
    return (
      <View style={styles.lineItem} key={i}>
        <Text>{item.name}</Text>
        {this.renderSpacer()}
        <Text>{item.quantity}</Text>
        {this.renderSpacer()}
        <Text>{item.subtotal}</Text>
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

  convertInvoiceStructure = () => {
    const items = this.props.invoice.items
    const invoiceStructure = {}
    items.forEach((item) => {
      if (item.name in invoiceStructure) {
        invoiceStructure[item.name][0]++
      } else {
        invoiceStructure[item.name] = [1, item.abv]
      }
    })
    const lineItems = Object.keys(invoiceStructure).map((name) => {
      return {
        name,
        quantity: invoiceStructure[name][0],
        subtotal: (invoiceStructure[name][0] * invoiceStructure[name][1]).toFixed(2)
      }
    })
    const grandTotal = lineItems.reduce((a, c) => a + parseFloat(c.subtotal), 0)
    console.log(64, grandTotal)
    return {
      lineItems,
      grandTotal: grandTotal.toFixed(2)
    }
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
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  spacer: {
    flex: 1,
    // backgroundColor: '#ff2'
  },

  cart: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 0.2,
    width: 290,
    height: 290,
  },

  lineItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
    paddingLeft: 5,
    paddingRight: 5
  },

  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 10
  },

  navBarLeftIcon: {
    paddingLeft: 20
  },

  navBarRightIcon: {
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
