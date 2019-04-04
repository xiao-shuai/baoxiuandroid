import React,{Component} from 'react'
import {
    View,Text,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
    StyleSheet,
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
import ImagePicker from 'react-native-image-picker'
import Picker from 'react-native-picker';
import DatePicker from 'react-native-datepicker'

@inject(["homeStore"])
@observer // 监听当前组件
class ZhiJie extends Component{
   constructor(props){
       super(props)
       this.state={
        iscover:false,
        date:""
       }

       this.option={

        title: '选择图片',
        
        cancelButtonTitle: '取消',
        
        takePhotoButtonTitle:'拍照',
        
        chooseFromLibraryButtonTitle:'图库',
        
        allowsEditing:true,
        
        quality: 0.8,
        
        noData: false,
        
        storageOptions: {
        
        skipBackup: true,
        
        path: 'images'
        
        }
        
        }
   }

   render(){
       return(
       <SafeAreaView style={{flex:1,alignItems:'center'}}>
        <ScrollView style={{width:sty.w*.95,}}>

        {/* city */}
        <View style={{marginTop:15,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:18,}}>所在城市 :</Text>
            <Text style={{fontSize:18,marginLeft:10}}>北京市</Text>
        </View>
        <Ionicons name={'ios-arrow-forward'} size={25} color={sty.themehui2}/>
        </View>
        <Divider style={{backgroundColor:sty.themehui,height:1,marginTop:10}}/>
        <Text style={{textAlign:'center',marginTop:5,color:sty.themehui2}}>(目前仅支持北京市,后续开放其他城市)</Text>
         {/* time */}
         <View style={{marginTop:15,flexDirection:'row',alignItems:'center'}}>
        
            <Text style={{fontSize:18,}}>所在城市 :</Text>
            <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2018-05-01"
        maxDate="2020-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />

        </View>
        <Divider style={{backgroundColor:sty.themehui,height:1,marginTop:10}}/>
        {/* input */}
        <View style={{padding:10,backgroundColor:sty.themehui,marginTop:10,borderRadius:8}}>
         <TextInput multiline={true} style={{height:sty.h*.25,fontSize:18}} 
         placeholder={'请输如需保修的信息'} placeholderTextColor={'red'} />
        </View>

        </ScrollView>
       </SafeAreaView>
       )
   }
}
const styles = StyleSheet.create({
    textStyle:{
      fontSize:18,
    },
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    content:{
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-around'
    }
   
  })
  
export default  ZhiJie