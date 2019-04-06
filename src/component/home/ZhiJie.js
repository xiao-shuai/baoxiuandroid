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
   getdate=()=>{
    const date = new Date();

    const year = date.getFullYear().toString();
    const month = (date.getMonth()+1).toString();
    const day = date.getDate().toString();
    // var hour =  date.getHours().toString();
    // var minute = date.getMinutes().toString();
    const final=year+'-'+month+'-'+day
    this.setState({date:final})
   
   }
componentWillMount(){
  this.getdate()

}
choosePicker = () => {
  ImagePicker.showImagePicker(this.option, (response) => {
    console.log('Response = ', response);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    }
    else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }
    else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    }
    else {
      console.log('source--!!')
      let source = response.uri;
      // this.props.oneStore.change_tx(source)
      this.setState({
        iscover: true,
        bximg:source,
      })
    }
  });
}
choosePicker2 = () => {
  ImagePicker.showImagePicker(this.option, (response) => {
    console.log('Response = ', response);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    }
    else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }
    else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    }
    else {
      console.log('source--!!')
      let source = response.uri;
      // this.props.oneStore.change_tx(source)
      this.setState({
        iscover2: true,
        bximg2:source,
      })
    }
  });
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
        <View style={{padding:10,backgroundColor:'#F0F8FF',marginTop:10,borderRadius:8}}>
         <TextInput multiline={true} style={{height:sty.h*.25,fontSize:16}} 
         placeholder={'请输如需要保修的信息'} placeholderTextColor={'red'} />
        </View>
        <Divider style={{backgroundColor:sty.themehui,height:1,marginTop:10}}/>
        {/* image */}
        <Text style={{marginTop:10,fontSize:18,}}>上传图片</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
        <TouchableOpacity onPress={()=>{
         this.choosePicker()
        }} style={styles.touimg}>
{
  this.state.iscover?
  <Image source={{uri:this.state.bximg}} style={{width:'100%',height:'100%'}}/>
  :
  <View style={styles.v_jia}>
  <Text style={styles.v_text}>+</Text>
  </View>
}
        </TouchableOpacity>
         
        <TouchableOpacity onPress={()=>{
  this.choosePicker2()
}} style={styles.touimg}>
{
this.state.iscover2?
<Image source={{uri:this.state.bximg2}} style={{width:'100%',height:'100%'}}/>
:
<View style={styles.v_jia}>
  <Text style={styles.v_text}>+</Text>
  </View>
}
</TouchableOpacity>
</View>
<Divider style={{backgroundColor:sty.themehui,height:1,marginTop:10}}/>
{/*  */}
 <View style={{flexDirection:'row',marginTop:10}}>
            <Text style={{fontSize:18,}}>所在城市 :</Text>
            <Text style={{fontSize:18,marginLeft:10}}>北京市</Text>
   </View>
        
        </ScrollView>
       </SafeAreaView>
       )
   }
}
const styles = StyleSheet.create({
  v_text:{
    fontSize:sty.w*.25,color:sty.themehui,fontWeight:'300'
  },
  v_jia:{
    alignItems:'center',justifyContent:'center',width:'100%',height:'100%'
  },
  touimg:{
    width:sty.w*.45,height:sty.w*.45,backgroundColor:'#F0F8FF'
  },
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