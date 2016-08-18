import React from 'react'
import {
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import {
  Container, Content, Header, Button, Title, Icon, Spinner,
  Card, CardItem, View, Text
} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid"
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import getInvoiceData from '../utils/InvoiceUtils'

export default class ShoppingCart extends React.Component {

  handleBackButton = () => {
    this.props.actions.setPage('')
  }

  handleBuyButton = () => {
    this.props.actions.setPage('cardForm')
  }

  renderSpacer () {
    return (
      <View style={styles.spacer}>
        {/*<Text>spacer</Text>*/}
      </View>
    )
  }

  renderHeader () {
    return (
      <Header style={{}}>
          <Button
            onPress={this.handleBackButton}
            transparent>
            <FontAwesome name="arrow-left" size={20}/>
          </Button>
          <Title>Shopping Cart</Title>
          <Button
            transparent>
            <Text> </Text>
          </Button>
      </Header>
    )
  }

  renderLineItem (item, i) {
    return (
      <View style={styles.lineItem} key={i}>
        <Text style={{flex: 6}} >{item.name}</Text>
        <Text style={{flex: 1, textAlign: 'right'}} >{item.quantity}</Text>
        <Text style={{flex: 2, textAlign: 'right'}} >${item.subtotal}</Text>
      </View>
    )
  }


  renderCart () {
    const invoice = getInvoiceData(this.props.invoice.items)
    return (
      <View style={{flex: 1}}>
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
        <View style={{flexDirection: 'row', justifyContent: 'flex-end', padding: 20}}>
          <Button onPress={this.handleBuyButton}>Buy</Button>
        </View>

        {this.renderSpacer()}
      </View>
    )
  }

  render() {
    return (
      <Container>
        {this.renderHeader()}
        <Content>
          {this.renderCart()}
        </Content>
      </Container>
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
    margin: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 0.2,
    width: 290,
    minHeight: 290,
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
