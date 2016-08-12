import React from 'react'
import {
  Image, StyleSheet, TouchableOpacity
} from 'react-native'
import {
  Container, Content, Header, Button, Title, Icon, Spinner,
  Card, CardItem, View, Text
} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Col, Row, Grid } from "react-native-easy-grid"

export default class Home extends React.Component {

  componentWillMount () {
    this.props.actions.fetchBeers(this.props.products)
  }

  handleCartButton = () => {
    if (this.props.UI.isLoading) return
    this.props.actions.setPage('shoppingCart')
  }

  handleInfoButton = () => {
    if (this.props.UI.isLoading) return
    this.props.actions.setPage('detail')
  }

  handlePassButton = () => {
    if (this.props.UI.isLoading) return
    this.props.actions.pass(this.props.products)
  }

  handleBuyButton = () => {
    if (this.props.UI.isLoading) return
    this.props.actions.addItemToInvoice(this.props.products.currentProduct)
  }

  renderCardItem () {
    const getContent = () => {
      const {productIndex} = this.props.products
      const currProd = this.props.products.data[productIndex]
      const uri = { uri: currProd.labels.medium }
      const price = (parseFloat(currProd.abv) || 4.0).toFixed(2)
      return (
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={this.handleInfoButton}>
            <Image
              style={styles.logo}
              source={uri} />
          </TouchableOpacity>
          <Title style={{marginTop: 5}}>{currProd.nameDisplay}</Title>
          <Title>${price}</Title>
        </View>
      )
    }

    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        { this.props.UI.isLoading
            ? <Spinner />
            : getContent()
        }
      </View>
    )
  }

  renderCard () {
    return (
      <View style={{flex: 1}}>
        <Card style={{height: 275, margin: 10}}>
          {this.renderCardItem()}
        </Card>
        {this.renderButtons()}
      </View>
    )
  }

  renderButtons () {
    const {products} = this.props
    return (
        <Grid style={{padding: 10}}>
          <Col>
            <Button info
              onPress={this.handlePassButton}>Pass
            </Button>
          </Col>
          <Col></Col>
          <Col style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Button success
              onPress={this.handleBuyButton}>Buy
            </Button>
          </Col>
        </Grid>
    )
  }

  renderHeader () {
    return (
      <Header style={{flex: 1}}>
          <Button transparent>
            <FontAwesome name="cog" size={20}/>
          </Button>
          <Title>Native Base</Title>
          <Button
            onPress={this.handleCartButton}
            transparent>
            <FontAwesome name="shopping-cart" size={20}/>
          </Button>
      </Header>
    )
  }

  render() {
    return (
      <Grid>
          <Row style={{}} size={1}>
            {this.renderHeader()}
          </Row>
          <Row style={{}} size={3}>
            {this.renderCard()}
          </Row>
          <Row style={{}} size={1}></Row>
      </Grid>
    )
  }

}

const styles = StyleSheet.create({

  logo: {
    width: 250,
    height: 150,
    borderColor: 'grey',
    borderWidth: 0.5
  },

})
