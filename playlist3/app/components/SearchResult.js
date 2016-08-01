import React from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  ListView,
  Image,
  StyleSheet,
  ActivityIndicator
} from 'react-native'

export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.search.result.items),
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.ds.cloneWithRows(nextProps.search.result.items)
    })
  }

  handleRowPress = (rowData) => {
    if (this.props.isViewingVideo) return
    this.props.actions.videoFetch(rowData.id.videoId)
  }

  handleMore = () => {
    this.props.actions.search(this.props.search.searchTerm, this.props.search.result.nextPageToken)
  }

  renderRow = (rowData) => {
    return (
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.rowButton}
          onPress={() => this.handleRowPress(rowData)} >
          <View style={styles.rowWrapper}>
            <Image
              style={styles.thumbnail}
              source={{uri: rowData.snippet.thumbnails.default.url}} />
            <Text style={styles.title}>{rowData.snippet.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
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


  renderFooter = () => {
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
      <View style={styles.container}>
        <ListView
          style={styles.items}
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow} />

        {this.renderFooter()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  items: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    padding: 10,
  },
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
  },
  row: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginBottom: 10
  },
  rowWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowButton: {
    padding: 10,
  },
  title: {
    flex: 1,
    marginLeft: 10,
    color: '#4078C0',
    fontWeight: 'bold'
  },
  thumbnail: {
    width: 120,
    height: 90
  }
})
