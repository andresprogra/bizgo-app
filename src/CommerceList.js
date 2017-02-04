/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  TouchableOpacity,
} from 'react-native';
import CommerceCard from './CommerceCard'
import {Actions} from 'react-native-router-flux'
export default class ArtistList extends Component {
  
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds
    }
  }

  componentDidMount(){
    this.updateDataSource(this.props.commerces)
  }
  componentWillReceiveProps(newProps) {
    if (newProps.commerces !== this.props.commerces) {
      this.updateDataSource(newProps.commerces)
    }
  }

  updateDataSource = data => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    })
  }
  
  handlePress(commerce) {
    Actions.commerceDetailView({commerce})
  }
  render() {
    return (
      <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={(commerce) => {
          return (
            <TouchableOpacity 
              onPress={() => this.handlePress(commerce)}>
              < CommerceCard commerce={commerce}/>
            </TouchableOpacity>
          )
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
});


