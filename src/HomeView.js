/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  ActivityIndicator,
  Text,
} from 'react-native';

import CommerceList from './CommerceList';
import { getCommerces } from './api-client';
export default class HomeView extends Component {
  state = {
    commerces: null
  }

  componentDidMount(){
    getCommerces()
      .then(data => this.setState({ commerces: data }))
  }

  render() {
    
    const commerces = this.state.commerces

    if (!commerces){
      return (
        <View style={styles.containerLoad} >
          <ActivityIndicator size="large" />
          <Text style={styles.title}>Estamos cargando los mejores lugares a los que puedes visitar.</Text>
          <Text style={styles.subTitle}>¿Nos tendrías un poco de paciencia? :)</Text>
        </View>
      );
    }
    return (
      <View style={styles.container} >
        <CommerceList commerces={commerces} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    marginTop: 54,
  },
  containerLoad:{
    flex: 1,
    marginTop: 54,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  title:{
    fontWeight: '900',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  subTitle:{
    fontSize: 13,
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 5,
  }
});
