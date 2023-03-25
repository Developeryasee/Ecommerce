import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    LogoContainer:{
        width: 160,
        height: 160,
    },
    LogoImage:{
        width:'100%',
        height:'100%',
        resizeMode:'contain'
    },
    TextInputContainer:{
        width:'100%',
        height:50,
        backgroundColor:'#e5e5e5',
        borderRadius:5,
        justifyContent:'center'
    },
    SubmitButton:{
        width:'100%',
        backgroundColor:'#000',
        height:50,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    SocialButton:{
        width:'100%',
        height:50,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#787C85',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
    ,
    borderLine:{
        borderWidth:1,width:'38%',height:1,borderColor:'#e5e5e5'
    }
})

export {styles};