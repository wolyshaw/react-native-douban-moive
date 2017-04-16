import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import { StackNavigator } from 'react-navigation'

const AppMenu = StackNavigator({
  Home: { screen: HomeScreen }
})
