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
    return (
      <View style={styles.card}>
        <Image
          style={styles.logo}
          source={require('../images/youtube-logo.png')} />
        <Text>This is the card text</Text>
      </View>
    )
  }

  renderButtons () {
    return (
      <View style={styles.buttons}>
        <View style={styles.passButton}>
          <Text style={styles.btnText} >Pass</Text>
        </View>
        {this.renderSpacer()}
        <View style={styles.buyButton}>
          <Text style={styles.btnText} >Buy</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>

        {this.renderNavBar()}

        <View style={styles.content}>
          {this.renderSpacer()}
          {this.renderCard()}
          {this.renderButtons()}
          {this.renderSpacer()}
        </View>

      </View>
    )
  }

}

// {/*{this.renderProduct()}*/}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    height: 520
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  spacer: {
    flex: 1,
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
    borderColor: 'red',
    borderWidth: 1
  },

})
