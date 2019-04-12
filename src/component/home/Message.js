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

class Message extends Component {
    constructor(props){
        super(props)
        this.state={
             info:undefined,
             load:true,
        }

    }
componentWillMount(){
    fetch('https://easy-mock.com/mock/5ca20f900aa7bf50eb36bcb0/baoxiu/message')
    .then(res=>res.json())
    .then(Response=>{
        console.log('response',Response)
        this.setState({load:false,info:Response})
        
    }).catch(err=>{
        console.log('err--!',err)
    })
}
    render(){
        if(this.state.load){
            return(
              <View style={{ height:sty.h*.6,justifyContent:'center'}}>
                <ActivityIndicator size={"large"} color={sty.themeColor}/>
              </View>
            )
          }
        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
           <View  style={{
               width:sty.w*.95,
               height:sty.h*.04,
            backgroundColor:sty.themehui,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:5,marginTop:8
            
            }}>
<Text style={{fontSize:16,}}>历史消息</Text>
           </View>
           {/* info */}

           <View style={{width:'90%'}}>
          <Text style={{fontSize:18,marginTop:8}}>{this.state.info.data.time}</Text>
          <Text style={{fontSize:18,marginTop:8}}>{this.state.info.data.info}</Text>
           </View>
         <Divider style={{height:1,backgroundColor:sty.themehui,width:'95%',marginTop:10}}/>
            </SafeAreaView>
        )
    }
}

export default Message
