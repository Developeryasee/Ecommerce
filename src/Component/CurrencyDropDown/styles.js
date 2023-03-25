import { Dimensions, StyleSheet } from "react-native";
const {width}=Dimensions.get('window')
const style=StyleSheet.create({
    backDrop:{
        flex: 1, 
        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-end',
        top:0,
        left:0,
        right:0,
        bottom:0,
        position:'absolute',marginTop:50,padding:20
    },
    currencypopup:{
        backgroundColor:'#fff',
        marginRight:10,paddingTop:10,paddingBottom:10,
        borderRadius:5
        
    }
});
export {style};