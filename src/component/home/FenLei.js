import React,{Component} from 'react'
import {
    View,Text,
    TouchableOpacity,
    Image
    ,ScrollView,StyleSheet,
    ActivityIndicator} from 'react-native'
import {observable} from 'mobx'
import { SafeAreaView } from 'react-navigation';
import { Divider } from 'react-native-elements'
import {inject,observer} from 'mobx-react'
import {sty} from '../../config/styles'
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

@inject(["homeStore"])
@observer // 监听当前组件
class FenLei extends Component{
   constructor(props){
       super(props)
       this.state={

       }
   }


   render(){
       return(
       <SafeAreaView style={{flex:1,alignItems:'center'}}>

       </SafeAreaView>
       )
   }
}
export default  FenLei