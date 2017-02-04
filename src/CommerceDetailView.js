/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  ListView,
  Image,
  Text,
  ToastAndroid,
  TouchableOpacity,
  Alert,
} from 'react-native';


import Communications from 'react-native-communications';

export default class ComnerceDetailView extends Component {


  callPhone(phone){
    //ToastAndroid.show('La siguiente llamada puede generar cargos dependiendo de su operador teléfonico.', ToastAndroid.LONG)
    Alert.alert(
      '¡Ey!',
      "La siguiente acción puede generar cargos según su operador.",
      [
        {text: 'Cancelar'},
        {text: 'Ok', onPress: () => Communications.phonecall(phone, true)},
      ]
    )
    
  }
  render() {
    
    //const commerce = this.props.commerce
    const {name, address, num_ext, phone, status, img, portada} = this.props.commerce

    return (
        
        


      <ScrollView style={styles.commerceCard}>
        <View style={styles.bannerCommerce}>   
          <Image style={styles.banner} source={{uri: portada}} />          
        </View>
        <View style={styles.profileCard}>
          <Image style={styles.img} source={{uri: img}} />
        </View>
        <View style={styles.nameCommerce}>
          <Text style={styles.titleCard}>{name}</Text>
        </View>
        <View style={styles.infoCommerce}>
          <TouchableOpacity onPress={() => this.callPhone(phone)}>
            <View style={styles.btn}>
              <Text style={styles.btnPhone}>LLAMAR</Text>
            </View>
          </TouchableOpacity>
          <Text> {address} #{num_ext}</Text>
          <Text style={styles.statusCommerce}>{status}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bannerCommerce: {
    height: 150,
  },
  profileCard: {
    alignItems: 'center',
  },
  img: {
    width: 130,
    height: 130,
    borderRadius: 130,
    marginTop: -70,
    borderWidth: 5,
    borderColor: '#fff',
  },
  banner:{
    flex: 1,
  },
  commerceCard: {
    flexDirection: 'column',
    flex:1,
    backgroundColor: 'white',
    marginTop: 54,
  },
  infoCommerce: {
    marginHorizontal: 10,
    marginVertical: 20,
    flex: 1,
    flexDirection: 'column',
  },
  titleCard: {
    fontSize: 23,
    color: 'black',
    fontWeight: '900',    
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  statusCommerce: {
    color: 'white',
    backgroundColor: 'rgba(94,181,149,0.90)',
    padding: 5,
    marginVertical: 5,
  },
  nameCommerce: {
    
  },
  btnPhone: {
    backgroundColor: '#41bd9a',
    padding: 10,
    textAlign: 'center',
    fontSize: 15,
    borderRadius: 10,
    color: 'white',
    width: 100,
  },
  btn:{
    alignItems: 'center',
    justifyContent: 'center'
  }
});