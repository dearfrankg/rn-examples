import React, { Component } from 'react';
import {StyleSheet, View } from 'react-native';

export default class StatusBarBackground extends Component {
  render() {
    return (
      <View style={[styles.statusBarBackground, this.props.style || {}]}>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  statusBarBackground: {
    backgroundColor: 'white',
    height: 20
  }

});
