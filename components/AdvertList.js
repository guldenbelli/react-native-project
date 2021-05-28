import React, { Component, useState } from 'react';
import {StyleSheet, View, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import adverts from '../assets/adverts.json';
import Constants from 'expo-constants';
import Divider from 'react-native-paper';


export default class AdvertList extends Component {
  rendItem = listItem => {
    let item = listItem.item;
    const onPress = () => onPress();

    return (
      <TouchableOpacity 
      style={styles.button}
      onPress={() => this.AdvertSelected(item)}>
    
        <Text>
          {item.id}{'    '}{item.title}{' '}
        </Text>
      </TouchableOpacity> 
    );
  };

  AdvertSelected = (item)=>{
    this.props.navigation.navigate("Advert",{Advert:item})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> IT in the Valley: Adverts</Text>
        <Text style={styles.subTitle}>Adverts submitted by readers of the magazine</Text>
        <FlatList
          style={styles.list}
          data={adverts}
          renderItem={this.rendItem}
        />
      </View>
      
    );
  }
}

const styles = StyleSheet.create(
  {
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    padding: 30,
    color: 'blue'
  },
  title: {
    paddingTop: 50,
    paddingBottom: 3,
    fontSize: 26,
    color: '#4682B4',
    textAlign: 'center'
  },
  subTitle: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 18,
    fontStyle: 'italic',
    color: '#4682B4',
    textAlign: 'center'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#87CEFA",
    padding: 30,
    borderRadius: 50,
    marginBottom: 30,
    paddingTop: 30,
    paddingBottom: 30

  }
});