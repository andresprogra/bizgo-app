/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, 
  Image,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CommerceCard extends Component {
  render() {
    const myIcon = (<Icon name="clock-o" size={15} color="#FFF" />)
    const {name, address, num_ext, phone, status, img} = this.props.commerce
    return (    
      <View style={styles.commerceCard}>
        <View style={styles.bannerCommerce}>
          <Image style={styles.img} source={{uri: img}}/>    
        </View>
        <View style={styles.infoCommerce}>
          <Text style={styles.titleCard}>{(<Icon name="map" size={15} color="#f7ca00" />)}  {name}</Text>
          <Text>{(<Icon name="address-card-o" size={15} color="#000000" />)} {address} #{num_ext}</Text>
          <Text>Tel: {phone}</Text>
          <Text style={styles.statusCommerce}>{myIcon} {status}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  bannerCommerce: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  img: {
    width: 130,
    height: 130,
    resizeMode: 'cover',
  },
  commerceCard: {
    flexDirection: 'row',
    elevation: 2,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 2,
  },
  infoCommerce: {
    marginHorizontal: 10,
    marginVertical: 20,
    flex: 1,
    flexDirection: 'column',
  },
  titleCard: {
    fontSize: 15,
    color: 'black',
    fontWeight: '900',    
    backgroundColor: 'rgba(0,0,0,0)',

    
  },
  statusCommerce: {
    color: 'white',
    backgroundColor: 'rgba(94,181,149,0.90)',
    padding: 5,
    marginVertical: 5,
  }
});
