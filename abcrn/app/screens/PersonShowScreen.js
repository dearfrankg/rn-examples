import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ListView, TouchableOpacity } from 'react-native';
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class PersonShowScreen extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <ViewContainer style={{backgroundColor: 'dodgerblue'}}>
        <StatusBarBackground style={{backgroundColor: 'mistyrose'}} />
        <Text style={{marginTop: 100, fontSize: 20}}>{'PERSON SHOW SCREEN'}</Text>
        <Text style={styles.personName}>{`${this.props.person.firstName} ${this.props.person.lastName}`}</Text>
      </ViewContainer>
    );
  }

}

const styles = StyleSheet.create({

  personName: {
    marginLeft: 25
  }

});
