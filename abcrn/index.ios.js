import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TabBarIOS, Text } from 'react-native';
import AppNavigator from './app/navigation/AppNavigator'

class abcrn extends Component {

  constructor (props) {
    super(props)
    this.state = {
      selectedTab: 'tab1'
    }
  }


  render () {
    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}>

        <TabBarIOS.Item
          title='TAB 1'
          selected={this.state.selectedTab === 'tab1'}
          onPress={() => this.setState({selectedTab: 'tab1'})}>
          <AppNavigator initialRoute={{ident: 'PeopleIndex'}} />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title='TAB 2'
          selected={this.state.selectedTab === 'tab2'}
          onPress={() => this.setState({selectedTab: 'tab2'})}>
          <AppNavigator initialRoute={{
            ident: 'PersonShow',
            person: {firstName: 'Frank', lastName: 'Gutierrez', roomNumber: 1}
          }} />
        </TabBarIOS.Item>

      </TabBarIOS>
    )
  }
}

const styles = StyleSheet.create({

  navigatorStyles: {

  }

});

AppRegistry.registerComponent('abcrn', () => abcrn);




    <AppNavigator initialRoute={{
      ident: 'PersonShow',
      person: {firstName: 'Frank', lastName: 'Gutierrez', roomNumber: 1}
    }} />
