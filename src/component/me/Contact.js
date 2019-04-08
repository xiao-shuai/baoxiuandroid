import React,{Component} from 'react'
import {View,Text,TouchableOpacity,Image
    ,ScrollView,StyleSheet,ActivityIndicator} from 'react-native'
import {inject,observer} from 'mobx-react'
import {observable} from 'mobx'
import { SafeAreaView } from 'react-navigation';
import { Divider } from 'react-native-elements'
import {sty} from '../../config/styles'
class Contact extends  Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

  render(){
      return(
          <SafeAreaView style={sty.contain}>
          <View style={{}}>
            <Text>Contact</Text>
          </View>
          </SafeAreaView>
      )
  }

}
export default Contact