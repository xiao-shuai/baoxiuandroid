import React,{Component} from 'react'
import {View,Text,TouchableOpacity,Image
    ,ScrollView,StyleSheet,ActivityIndicator,Linking} from 'react-native'

import {observable} from 'mobx'
import { SafeAreaView } from 'react-navigation';
import { Divider ,ListItem} from 'react-native-elements'
import {inject,observer} from 'mobx-react'
import {sty} from '../../config/styles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

class MyOrder extends Component {
  
    constructor(props){
        super(props)
        this.state={

        }
    }


    render(){
        return(
            <SafeAreaView style={sty.contain}>
                <ScrollView contentContainerStyle={{}}>
                 <Text>MyOrder</Text>
                </ScrollView>
            </SafeAreaView>
            
        )
    }

}

export default MyOrder