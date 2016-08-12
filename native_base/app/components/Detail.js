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

  handleBackButton = () => {
    this.props.actions.setPage('')
  }

  renderCardItem () {
    const {productIndex} = this.props.products
    const currProd = this.props.products.data[productIndex]
    const uri = { uri: currProd.labels.medium }

    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{marginLeft: 20, marginRight: 20, marginTop: 20}}
          onPress={this.handleBackButton}>
          <Image
            style={styles.logo}
            source={uri} />
        </TouchableOpacity>
        <Title style={{marginTop: 5}}>{currProd.nameDisplay}</Title>
        <Text style={styles.description}>{currProd.description}</Text>
      </View>
    )
  }

  renderCard () {
    return (
      <View style={{flex: 1}}>
        <View style={styles.card}>
          {this.renderCardItem()}
        </View>
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
      <Header>
          <Button
            onPress={this.handleBackButton}
            transparent>
            <FontAwesome name="arrow-left" size={20}/>
          </Button>
          <Title>Detail</Title>
          <Button transparent>
            <Text> </Text>
          </Button>
      </Header>
    )
  }

  render() {
    return (
      <Container>
        {this.renderHeader()}
        <Content contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          {this.renderCard()}
        </Content>
      </Container>
    )
  }

}

const styles = StyleSheet.create({

  spacer: {
    flex: 1,
    // backgroundColor: '#ff2'
  },

  logo: {
    width: 250,
    height: 150,
    borderColor: 'grey',
    borderWidth: 0.5
  },

  description: {
    margin: 5,
    padding: 5,
    fontSize: 12,
    color: '#333'
  },

  card: {
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

})
