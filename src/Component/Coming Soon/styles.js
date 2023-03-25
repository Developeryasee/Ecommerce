import { Dimensions, StyleSheet } from "react-native";
const {width}=Dimensions.get('window')
const style=StyleSheet.create({
    backDrop:{
        flex: 1, 
        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
        justifyContent: 'center', 
        alignItems: 'center',
        top:0,
        left:0,
        right:0,
        bottom:0,
        position:'absolute'
    },
    Card:{
        backgroundColor: '#fff',
         padding: 10, 
         width:width-40,
         alignItems: 'center', borderRadius: 10,
    },
    LogoContainer:{
        width:150,
        height:150,
    },
    LogoImage:{
        width:'100%',
        height:'100%',
        resizeMode:'cover'
    },
    Content:{
       flexDirection:'row',width:'100%',justifyContent:'space-between'
    }
});
export {style};