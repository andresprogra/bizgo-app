/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ListView,
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';
import HomeView from './src/HomeView';
import CommerceDetailView from './src/CommerceDetailView';
class Bizgo extends React.Component {
  render() {
    return <Router>
      <Scene key="root">
        <Scene key="home" title="Lugares" component={HomeView}  navigationBarStyle={{ backgroundColor: '#f8c521' }} />
        <Scene key="commerceDetailView" component={CommerceDetailView} navigationBarStyle={{ backgroundColor: '#f8c521' }} title="Bizgo"/>
      </Scene>
    </Router>
  }
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

AppRegistry.registerComponent('Bizgo', () => Bizgo);
