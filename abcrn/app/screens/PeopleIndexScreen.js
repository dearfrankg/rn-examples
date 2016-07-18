import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ListView, TouchableOpacity, Navigator } from 'react-native';
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'
import Icon from 'react-native-vector-icons/FontAwesome'

const people = [
  {firstName: 'Marek', lastName: 'Zwick', roomNumber: 0},
  {firstName: 'Frank', lastName: 'Gutierrez', roomNumber: 1}
]

export default class PeopleIndexScreen extends Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      peopleDataSource: ds.cloneWithRows(people)
    }
  }

  render() {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <ListView
          style={{marginTop: 100}}
          dataSource={this.state.peopleDataSource}
          renderRow={(person) => this._renderPersonRow(person)} />
      </ViewContainer>
    );
  }

  _renderPersonRow = (person) => (
    <TouchableOpacity style={styles.personRow} onPress={(event) => this._navigateToPersonShow(person)}>
      <Text style={styles.personName}>{`${person.firstName} ${person.lastName}`}</Text>
      <View style={{flex:1}} />
      <Icon name='chevron-right' size={10} style={styles.personMoreIcon} />
    </TouchableOpacity>
  )

  _navigateToPersonShow (person) {
    this.props.navigator.push({
      ident: 'PersonShow',
      person,
      sceneConfig: Navigator.SceneConfigs.FloatFromBottom
    })
  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  personRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50
  },

  personName: {
    marginLeft: 25
  },

  personMoreIcon: {
    color: 'green',
    width: 10,
    height: 10,
    marginRight: 25
  }

});
