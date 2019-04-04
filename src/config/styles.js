import {Dimensions} from 'react-native'
const { width, height } = Dimensions.get('window')

export const sty={
    w:width,
    h:height,   
    themeColor:"#FFA500",
    themehui:'#D3D3D3',
    themehui2:'#808080',
    contain:{
        flex:1,
        width:width,
        alignItems:'center',
        // backgroundColor:'#D3D3D3'
    }
}
