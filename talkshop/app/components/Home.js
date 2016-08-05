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

  renderStatusBar() {
    <View style={styles.statusBar}>
    <Text>statusBar</Text>
    </View>
  }

  // renderNavigationButtons = () => (
  //   <View>
  //     <Icon name='search' size={15} />
  //   </View>
  // )
  //
  render() {
    return (
      <View>
        {this.renderStatusBar()}
        <Text>Hello Home</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },

  statusBar: {
    height: 20
  }
})


// {this.renderNavigationButtons()}
