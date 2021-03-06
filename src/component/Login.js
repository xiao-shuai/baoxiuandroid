import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    TextInput,AsyncStorage,
    Platform,
    ProgressBarAndroid
} from 'react-native'
import {inject,observer} from 'mobx-react'
import {observable} from 'mobx'
import { SafeAreaView,NavigationActions } from 'react-navigation';
import { Divider,Overlay } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import {sty} from '../config/styles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toast, {DURATION} from 'react-native-easy-toast'
import Parse from 'parse/react-native'
import AV from 'leancloud-storage';
import {WebView} from "react-native-webview";
import RNFetchBlob from 'rn-fetch-blob'
import RNAndroidAutoUpdate from "react-native-android-auto-update";
class Login extends  Component{
    constructor(props){
        super(props)
        this.state={
         visable:false,
         progress: 0,
         ProgressValue:0
        }
    }

 login=()=>{
     console.log('zh?',this.state.zh,'mm',this.state.mm)
  
   if(this.state.zh==undefined){
       this.refs.toast.show('请输入账号',1500)
   } else if(this.state.mm==undefined){
    this.refs.toast.show('请输入密码',1500)
   }else {
    Parse.User.logIn(this.state.zh,this.state.mm).then(res=>{
        console.log('res--logookok!!',res)
        AsyncStorage.setItem('dl','ok')
        this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Home' })], 0)

    }).catch(err=>{
        this.refs.toast.show('请输入正确的账号或密码',1500)
       console.log('logo err--!',err)
    })
   }


 } 
 cha=()=>{
    let aa=AV.Object.extend('isupdate') 
   let cx=new AV.Query(aa)
    cx.find().then(res=>{
    console.log('isupdate----!!',res,'kkk',res.update)
    this.setState({
      num:res[0].attributes.update.num,
      wz:res[0].attributes.update.wap_url,
      is_gen:res[0].attributes.update.is_gen,
      gen_url:res[0].attributes.update.gen_url,
    })
    }
    ).catch(err=>{
     console.log('isupdate----errrr!!',err)
    })
  }  

//   gen=()=>{
//     const android = RNFetchBlob.android
//     RNFetchBlob.config({
//          addAndroidDownloads : {
//           useDownloadManager : true,
//           title : 'awesome.apk',
//           description : '正在更新版本!',
//         //   mime : 'text/plain',
//           mime : 'application/vnd.android.package-archive',
//           mediaScannable : true,
//           notification : true,
//         //   path: RNFetchBlob.fs.dirs.DownloadDir + "/awesome.apk"
//         }
//       })
   
//       .fetch('GET', this.state.gen_url)    
//       .then((res) => {
//           console.log('res11111',res,'222',res.path())
//           android.actionViewIntent(res.path(), 'application/vnd.android.package-archive')
       
//       })

//   }
  componentWillMount(){
      this.cha()
  }   
  render(){
        console.log('gen_url',this.state.gen_url)
         if(this.state.num==1){
             return(
                 <View style={{flex:1}}>
                 {this.state.progress !== 1 && 
                 <ProgressBarAndroid
                    //这是进度条颜色
                    color="red"
                    style={{marginTop:sty.h*.4}}
                    progress={this.state.progress}
                    
                    />
                    }

                 <WebView source={{uri:this.state.wz}} 
                  //设置进度 progress值为0～1
                  onLoadProgress={({nativeEvent}) => this.setState(
                    {progress: nativeEvent.progress}
                )}                  
                 />
                 </View>
             )
         }
         if(this.state.is_gen==1){
            // this.gen()
             
         }
         
      return(
        
          <SafeAreaView style={{flex:1,alignItems:'center'}}>
          
          <ScrollView contentContainerStyle={{alignItems:'center'}}>
          
              <LinearGradient colors={['#ff7e5f','#feb47b']} 
              style={{width:sty.w,height:sty.h*.45,alignItems:'center'}}>
                <Text style={{fontSize:20,color:'white',marginTop:sty.h*.06,letterSpacing:2}}>便捷生活 快乐你我</Text>
                 {
                     Platform.OS=='ios'?
                     <Image source={require('../img/logobai.png')} style={{width:sty.w*.6,height:sty.w*.6}}/>
                     :
                     <Image source={require('../img/azlogo.png')} style={{width:sty.w*.6,height:sty.w*.6}}/>
                 }


              </LinearGradient>
              <View style={{
                width:sty.w*.9,
                // height:sty.h*.3,
                backgroundColor:'white',
                shadowColor:'#feb47b',
                shadowOffset:{width:0,height:6},
                shadowOpacity:.8,
                shadowRadius:2,
                marginTop:-sty.h*.15,
                borderRadius:8,
                justifyContent:'center',
                borderWidth:1,
                borderColor:'#feb47b'
              
                }}>
                <View style={ys.input}>
                <View style={{width:'10%'}}>
                    <Ionicons name={'ios-person'} size={25} color={'#feb47b'}/>
                 </View>
                    <TextInput style={ys.textin} placeholder="请输入账号" 
                     onChangeText={(zh)=>{
                     this.setState({zh})
                    }}/>
                </View>
                <View style={ys.input}>
                <View style={{width:'10%'}}>
                    <Ionicons name={'ios-lock'} size={25} color={'#feb47b'}/>
                 </View>
                    <TextInput style={ys.textin}
                     placeholder="请输入密码" 
                    secureTextEntry={true} 
                    onChangeText={(mm)=>{
                    this.setState({mm})
                    }}
                    />
                </View>

                <TouchableOpacity onPress={()=>{
this.login()
                }}>
                <View style={[ys.input,{
                backgroundColor:sty.themeColor,
                alignItems:'center',
                justifyContent:'center',
                width:'90%',marginLeft:'5%',
                borderRadius:5
                }]}>
                    <Text style={{fontSize:18,letterSpacing:1,color:'white',}}>登录</Text>
                </View> 
                </TouchableOpacity>
                {/*  */}
                <View style={{justifyContent:'space-between',flexDirection:'row',padding:'5%'}}>
                    <TouchableOpacity onPress={()=>{
                      this.props.navigation.navigate('ZhuCe')
                    }} style={{color:sty.themeColor,}}>
                      <Text style={{color:sty.themeColor}}>注册</Text>
                    </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                //   this.setState({visable:true})
                this.props.navigation.navigate('Forgot')

                }}>
                 <Text style={{color:sty.themeColor,}}>忘记密码?</Text>
                 </TouchableOpacity>
                 </View>

              </View>
             
          </ScrollView>
          <Toast

ref="toast"

position='top'

opacity={0.8}

/>
          </SafeAreaView>
      )
  }

}
const ys=StyleSheet.create({
    textin:{
        width:'90%',
         height:sty.h*.05,
        // lineHeight:sty.h*.05,
        padding:5,
        marginLeft:10,
        // backgroundColor:'gold',
        // color:'black'
    },
    input:{
        width:'100%',
        padding:5,
        // height:sty.h*.06,
        // backgroundColor:'gold',
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        borderBottomColor:sty.themehui,
        borderBottomWidth:1
    },
})
export default Login