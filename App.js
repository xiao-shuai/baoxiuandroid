
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,YellowBox,AsyncStorage} from 'react-native';
import  AllStack from './src/config/navigation'
import {Provider} from 'mobx-react'
import store from './src/mobx/index'
import Parse from 'parse/react-native'
function setup() {
  Parse.setAsyncStorage(AsyncStorage)
  Parse.initialize('psjfapp');
  Parse.serverURL =  'http://jinfeng.ANDCORPTEACH.COM:10018/parse'
}
setup()
console.disableYellowBox=true
export default class App extends Component<Props> {

  render() {
    return (
      <Provider {...store}>
<AllStack />
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  
});
