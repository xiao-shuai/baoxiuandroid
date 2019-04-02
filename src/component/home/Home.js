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
@inject(["homeStore"])
@observer // 监听当前组件
class Home extends  Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

  render(){
      console.log('666---!',this.props.homeStore.text)
      return(
          <SafeAreaView style={sty.contain}>
          {/* top */}
           <View style={styles.top}>
           <TouchableOpacity onPress={()=>{
             this.props.navigation.navigate('HomeDetail')
           }}>
            <Ionicons name={'ios-options'} size={30}/>
          </TouchableOpacity>
         
            <Text style={{fontSize:25,color:sty.themeColor}}>标题</Text>
      
            <TouchableOpacity onPress={()=>{
              this.props.navigation.navigate('Message')
            }}>
            <Ionicons  name={'ios-notifications-outline'} size={30} />
            </TouchableOpacity>
        </View>

          <ScrollView contentContainerStyle={{}}>
           
        </ScrollView>
          </SafeAreaView>
      )
  }

}
const styles=StyleSheet.create({
    top:{
        width:sty.w*.95, 
        backgroundColor:sty.themehui,
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