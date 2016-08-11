/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TakeMoney from './TakeMoney';

class checkout extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TakeMoney
          name="Three Comma Co."
          description="Big Data Stuff"
          image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
          ComponentClass="div"
          panelLabel="Give Money"
          amount={1000000}
          currency="USD"
          locale="zh"
          email="info@vidhub.co"
          // Note: Enabling either address option will give the user the ability to
          // fill out both. Addresses are sent as a second parameter in the token callback.
          shippingAddress
          billingAddress={false}
          // Note: enabling both zipCode checks and billing or shipping address will
          // cause zipCheck to be pulled from billing address (set to shipping if none provided).
          zipCode={false}
          alipay
          bitcoin
          allowRememberMe
          token={this.onToken}
          // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
          // you are using multiple stripe keys
          reconfigureOnUpdate={false}
          // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
          // useful if you're using React-Tap-Event-Plugin
          triggerEvent="onTouchTap"
          >
          <button className="btn btn-primary">
            Use your own child component, which gets wrapped in whatever
            component you pass into as "ComponentClass" (defaults to span)
          </button>
        </TakeMoney>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('checkout', () => checkout);
