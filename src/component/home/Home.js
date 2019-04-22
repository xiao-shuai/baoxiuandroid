import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    AsyncStorage,
    Platform,
    ProgressBarAndroid
  } from 'react-native'
import {observable} from 'mobx'
import { SafeAreaView ,NavigationActions} from 'react-navigation';
import { Divider } from 'react-native-elements'
import {inject,observer} from 'mobx-react'
import {sty} from '../../config/styles'
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import Parse from 'parse/react-native'
import AV from 'leancloud-storage';
import {WebView} from "react-native-webview";
@inject(["homeStore"])
@observer // 监听当前组件
class Home extends  Component{
    constructor(props){
        super(props)
        this.state={
           isloading:true,
           update:[],
        }
    }

 cha=()=>{
   let aa=AV.Object.extend('isupdate') 
  let cx=new AV.Query(aa)
   cx.find().then(res=>{
   console.log('isupdate----!!',res,'kkk',res.update)
   this.setState({
     num:res[0].attributes.update.num,
     wz:res[0].attributes.update.wap_url
   })
   }
   ).catch(err=>{
    console.log('isupdate----errrr!!',err)
   })
 }   
componentWillMount(){
  let branch=Parse.Object.extend('branch')
  let  data = new Parse.Query(branch)
   data.find().then(res=>{
       console.log('res---ooo!',res)
       this.setState({isloading:false})    
   }).catch(err=>{
     console.log('err--!',err)
   })

  AsyncStorage.getItem('dl').then(res=>{
   console.log('qqqq!!',res)
   if(res==null){
    this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Login' })], 0)
   }
  }
  ).catch(err=>{
   console.log('err!!',err)
  })

  this.cha()
}
  render(){
      console.log('666---!',this.props.homeStore.text,
      'update',this.state.num,
      'wa---!!',this.state.wz
      )
      if(this.state.isloading){
        return (
          <View style={{
            width:sty.w,height:sty.h*.8,
            alignItems:'center',
            justifyContent:'center',
          }}>
            <ActivityIndicator size={"large"} color={sty.themeColor}/>
          </View>
        )
      }
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

      return(
          <SafeAreaView style={sty.contain}>
          {/* top */}
          {
            // this.state.update.map((item,index)=>{
            //     console.log('item',item.update)
            // })
          }
           <View style={styles.top}>
           <TouchableOpacity onPress={()=>{
             this.props.navigation.navigate('HomeDetail')
            // this.props.navigation.openDrawer()
           }}>
            <Ionicons name={'ios-options'} size={30}/>
          </TouchableOpacity >
           
           <TouchableOpacity onPress={()=>{
            //  AsyncStorage.removeItem('dl')
           }}>
            <Text style={{fontSize:25,color:sty.themeColor}}>
            {
              Platform.OS=='ios'?
              "Fast Repair"
              :
              "牛牛快修"
            }
            
            </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
              this.props.navigation.navigate('Message')
            }}>
            <Ionicons  name={'ios-notifications-outline'} size={30} />
            </TouchableOpacity>
        </View>
        <Divider style={{backgroundColor:sty.themehui,height:10,width:'100%'}}/>
        {/*  */}
            
          <ScrollView contentContainerStyle={{}}>
           {/* <Text style={{fontSize:16,textAlign:'center',color:sty.themehui2,marginTop:5}}>北京市昌平区科星西路龙跃小区</Text> */}
          {/*  */}
          
          <Swiper style={{marginTop:10}} autoplay={true} loop={true} height={200}> 
         
          <View style={styles.slide}>
          {
            Platform.OS=='ios'?
            <Image source={require('../../img/2.png')} style={styles.image} resizeMode='stretch'/>
            :
            <Image source={require('../../img/22.png')} style={styles.image} resizeMode='stretch'/>
          }

          </View>
           <View style={styles.slide}>
           {
             Platform.OS=='ios'?
             <Image source={require('../../img/1.png')} style={styles.image} resizeMode='stretch'/>
             :
             <Image source={require('../../img/11.png')} style={styles.image} resizeMode='stretch'/>
           }
         
           </View>
           
          </Swiper>

           <View style={{width:sty.w*.95,flexDirection:'row',justifyContent:'space-between',marginTop:10,marginLeft:sty.w*0.025}}>
           <TouchableOpacity style={{
          width:'48%',height:sty.h*.5,
          }} onPress={()=>{
            this.props.navigation.navigate('ZhiJie',{name:'直接下单'})
          }}>
           <LinearGradient 
          colors={['#FDC830', '#F37335']} 
          >
          <View style={{alignItems:'center',justifyContent:'center',height:'100%'}}>
            <Ionicons  name={'ios-construct'} size={50} color={'white'}/>
            <Text style={{fontSize:24,color:'white',fontWeight:'500',marginTop:5}}>直接下单预约</Text>
            <Text style={{fontSize:15,color:'white',marginTop:5}}>简单快速,无需选择类别</Text>
          </View>
          </LinearGradient>
          </TouchableOpacity>

          {/*  */}
          <View style={{width:'48%',height:sty.h*.5,justifyContent:'space-between'}}>
      <TouchableOpacity style={{height:sty.h*.24}} onPress={()=>{
        this.props.navigation.navigate('FenLei')
      }}>
  <LinearGradient colors={['#a8ff78','#78ffd6']} >
     <View style={{alignItems:'center',justifyContent:'center',height:'100%'}}>
            <Ionicons  name={'ios-grid'} size={50} color={'white'}/>
            <Text style={{fontSize:24,color:'white',fontWeight:'500',marginTop:5}}>分类下单</Text>
            <Text style={{fontSize:15,color:'white',marginTop:5}}>选择类别进行保修</Text>
      </View>

</LinearGradient>
</TouchableOpacity>
<TouchableOpacity style={{height:sty.h*.24,}} onPress={()=>{
  this.props.navigation.navigate('ZhiJie',{name:'家电清洗'})
}}>
<LinearGradient colors={['#7F7FD5','#86A8E7','#91EAE4']} >
 <View style={{alignItems:'center',justifyContent:'center',height:'100%'}}>
            <Ionicons  name={'ios-megaphone'} size={50} color={'white'}/>
            <Text style={{fontSize:24,color:'white',fontWeight:'500',marginTop:5}}>家电清洗</Text>
            <Text style={{fontSize:15,color:'white',marginTop:5}}>发布清洗保养信息</Text>
 </View>
</LinearGradient>
</TouchableOpacity>
     </View>

     </View>
          
           
        </ScrollView>
          </SafeAreaView>
      )
  }

}
const styles=StyleSheet.create({
  image: {
     width:sty.w,
    flex: 1
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
    top:{
        width:sty.w, 
        // backgroundColor:sty.themehui,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        padding:5
    },
    linearGradient: {
        // flex: 1,
        height:200,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
})
export default Home