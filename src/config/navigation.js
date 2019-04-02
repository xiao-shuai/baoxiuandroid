import React,{Component} from 'react'
import {Home,Me,HomeDetail,Message} from '../component/index'
import { 
     createBottomTabNavigator,
     createAppContainer,
     createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {sty} from './styles'

const BottomTab=createBottomTabNavigator(
    {
      home:Home,
    //   manage:Manage,
    //   remote:Remote,
      me:Me
    },
    {
     initialRouteName: 'home',
     defaultNavigationOptions:({ navigation })=>({
         tabBarIcon:({focused, horizontal, tintColor})=>{
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'home') {
                iconName ='ios-home';
              } else if (routeName === 'manage') {
                iconName = 'ios-bookmarks';
              }else if(routeName==='remote'){
               iconName='ios-contacts'
              }else{
                  iconName='ios-person'
              }
              return <Ionicons name={iconName} size={horizontal ? 20 : 25} 
          color={focused?sty.themehui:sty.themeColor} />;
         }
     }),
     tabBarOptions: {
        activeTintColor:sty.themehui,
        inactiveTintColor:sty.themeColor,
      },
    }
)
const AllStack=createStackNavigator({
    //  Btm:{
    //     screen:BottomTab,
    //     navigationOptions:()=>({
    //         header:null,
    //         headerBackTitle:null,
    //     })
    //  },

     Home:{
        screen:Home,
        navigationOptions:()=>({
            header:null,
            headerBackTitle:null,
        })
     },
     HomeDetail:{
       screen:HomeDetail,
       navigationOptions:()=>({
        title:'我的',
        headerTintColor:'white',
         headerStyle: {
          backgroundColor:sty.themeColor,
        },
    })
     },
     Message:{
      screen:Message,
      navigationOptions:()=>({
         title:'我的消息',
         headerTintColor:'white',
         headerStyle: {
          backgroundColor:sty.themeColor,
        },
   })
    }
    
})

export default createAppContainer(AllStack)