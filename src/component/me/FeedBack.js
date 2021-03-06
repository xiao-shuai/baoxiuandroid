import React,{Component} from 'react'
import {View,Text,TouchableOpacity,Image,TextInput
    ,ScrollView,StyleSheet,ActivityIndicator} from 'react-native'
import {inject,observer} from 'mobx-react'
import {observable} from 'mobx'
import { SafeAreaView } from 'react-navigation'
import { Divider } from 'react-native-elements'
import {sty} from '../../config/styles'
import TouchableScale from 'react-native-touchable-scale';
import Toast, {DURATION} from 'react-native-easy-toast'
class FeedBack extends  Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

 sbmt=()=>{
    if(this.state.text==undefined){
        this.refs.toast.show('Please enter the content',1000)
    }else{
        fetch('https://easy-mock.com/mock/5ca20f900aa7bf50eb36bcb0/baoxiu/order',{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            
           }).then(res=>res.json()).then(res=>{
              this.refs.toast.show('Feedback success',1000)
              this.setState({text:undefined})
           }).catch(err=>{
                console.log('err--!',err)
           })
    }
 }
  render(){
      return(
          <SafeAreaView style={sty.contain}>
          <ScrollView contentContainerStyle={{alignItems:'center'}}>
          <View style={{width:sty.w*.95,height:sty.h*.25,backgroundColor:'#E6E6FA',marginTop:10,borderRadius:5,padding:10}}>
          <TextInput placeholder={'请输入完整的信息'} 
          style={{fontSize:18,height:'100%'}}
           multiline={true}
           onChangeText={(text)=>{
              this.setState({text})
           }}
           />
          </View>
          <TouchableScale activeScale={0.7} onPress={()=>{
             this.sbmt()
          }} style={ys.btn} >  
         <Text style={{fontSize:18,color:'white',}}>提 交</Text>
          </TouchableScale>
         
          </ScrollView>
    <Toast
ref="toast"

position='top'

opacity={0.6}

/>
          </SafeAreaView>
      )
  }

}
const ys=StyleSheet.create({
    btn:{
        width:'100%',
        backgroundColor:sty.themeColor,
        height:sty.h*.05,
        marginTop:15,
        alignItems:'center',
        justifyContent:'center',borderRadius:5
    }
})
export default FeedBack