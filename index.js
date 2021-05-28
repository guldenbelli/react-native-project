import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


import AdvertList from './components/AdvertList';
import Advert from './components/Advert';


const screens = {
  AdvertList: {
    screen: AdvertList,
  },

  Advert: {
    screen: Advert,
  },
};


export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const HomeStack = createStackNavigator(screens);
const AppContainer = createAppContainer(HomeStack)
