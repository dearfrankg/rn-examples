import React, { Component } from 'react'
import {
  Image, StyleSheet, TouchableOpacity
} from 'react-native'
import {
  Container, Content, Header, Button, Title, Icon, Spinner,
  Card, CardItem, View, Text
} from 'native-base'
import Auth0Lock from 'react-native-lock'


let credentials = require('../../auth0-credentials')
let lock = new Auth0Lock(credentials)

console.log(lock)


export default class Welcome extends Component {

  handleLoginButton = () => {

    console.log('handle login')

    lock.show({ closable: true, }, function (err, profile, token) {

    })

  }

  render () {
    return (
      <Container style={styles.container}>
        <Header />
        <Content>
          <Image
            style={styles.badge}
            source={require('../images/badge.png')} />
          <Text style={styles.title}>Cart</Text>
          <Text style={styles.subtitle}>To infinity and beyond...</Text>

          <Button block
            onPress={this.handleLoginButton}>login
          </Button>

        </Content>
      </Container>
    )
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#15204C',
  },
  badge: {
    alignSelf: 'center',
    height: 169,
    width: 151,
  },
  title: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 8,
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 4,
    color: '#FFFFFF',
  },
})





// {/* <View style={styles.container}>
//   <View style={styles.messageBox}>
//     <Image
//       style={styles.badge}
//       source={require('./img/badge.png')}
//     />
//     <Text style={styles.title}>Auth0 Example</Text>
//     <Text style={styles.subtitle}>Identity made simple for Developers</Text>
//   </View>
//   <TouchableHighlight
//     style={styles.signInButton}
//     underlayColor='#949494'
//     onPress={this._onLogin}>
//     <Text>Log In</Text>
//   </TouchableHighlight>
// </View> */}
