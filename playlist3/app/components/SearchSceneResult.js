import React from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import List from './List'

export default class SearchSceneResult extends React.Component {

  handleRowPress = (rowData) => {
    if (this.props.isViewingVideo) return
    this.props.actions.videoFetch(rowData.id.videoId)
  }

  handleMore = () => {
    this.props.actions.search(this.props.search.searchTerm, this.props.search.result.nextPageToken)
  }

  renderSpinner = () => (
    <View style={styles.footer}>
      <ActivityIndicator
        animating
        color="#ffffff"
        size="small"/>
    </View>
  )

  renderShowMoreButton = () => (
    <TouchableHighlight
      style={styles.footer}
      underlayColor="#991111"
      onPress={this.handleMore}>
      <Text style={styles.moreButtonText}>Show more</Text>
    </TouchableHighlight>
  )

  footer = () => {
    const isLoading = this.props.UI.isLoading
    return (
      <View>
        {isLoading
          ? this.renderSpinner()
          : this.renderShowMoreButton()
        }
      </View>
    )
  }

  render() {
    return (
      <List
        datasource={this.props.search.result.items}
        handleRowPress={this.handleRowPress}
        footer={this.footer} />
    )
  }

}

const styles = StyleSheet.create({
  footer: {
    padding: 15,
    flexDirection: 'row',
    backgroundColor: '#E62117',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  moreButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold'
  }
})
