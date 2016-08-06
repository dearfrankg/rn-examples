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

export default class Home extends React.Component {

  componentWillMount () {
    this.props.actions.fetchBeers(this.props.products)
  }

  renderNavBar () {
    return (
      <View style={styles.navBar}>
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

  renderCard () {
    const {productIndex} = this.props.products
    const currProd = this.props.products.data[productIndex]
    const uri = { uri: currProd.labels.medium }

    return (
      <View style={styles.card}>
        {this.renderSpacer()}
        <Image
          style={styles.logo}
          source={uri} />
        <Text style={styles.title}>{currProd.nameDisplay}</Text>
        {this.renderSpacer()}
        <View style={styles.info}>
          {this.renderSpacer()}
          <TouchableOpacity>
            <Icon name='info-circle' size={15} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderButtons () {
    const {products} = this.props
    return (
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.passButton}
          onPress={() => this.props.actions.pass(products)} >
          <Text style={styles.btnText} >Pass</Text>
        </TouchableOpacity>
        {this.renderSpacer()}
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.btnText} >Buy</Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderContent () {
    return (
      <View style={styles.content}>
        {this.renderSpacer()}
        {this.renderCard()}
        {this.renderButtons()}
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
    const isLoading = (
      !('error' in this.props.products) || this.props.UI.isLoading
    )
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

  navBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 30,
    paddingBottom: 10
  },

  navBarIcons: {
    paddingRight: 20
  },

  card: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0
    },
    width: 290,
    height: 290,
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 290,
  },

  btnText: {
    color: '#fff'
  },

  passButton: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#f2f',
    borderRadius: 5
  },

  buyButton: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#2f2',
    borderRadius: 5
  },

  logo: {
    width: 250,
    height: 150,
    borderColor: 'grey',
    borderWidth: 0.5
  },

  title: {
    padding: 5,
  },

  info: {
    flexDirection: 'row',
    padding: 5,
  }

})
