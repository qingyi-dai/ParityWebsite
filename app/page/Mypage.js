import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image
} from 'react-native';

export default class Mypage extends Component<{}> {
    static navigationOptions = {
      tabBarLabel: '我的',
    }
    render() {
      return (
        <ScrollView>
          <Text>!!!我的</Text>
        </ScrollView>
      );
    }
  }
