import React, { memo } from "react";
import { View,Text } from "react-native";
import CustomFonts from "../../Themes/CustomFonts";

const LoadingCard=()=>{
    return(
        <View style={{width:'100%',height:'100%',backgroundColor:'#e5e5e5',top:0,left:0,right:0,bottom:0,position:'absolute',justifyContent:'center',alignItems:'center'}}>
                <Text style={[CustomFonts.SIZES.h4,CustomFonts.COLORS.gray]}>
                    A M Z A A
                </Text>
        </View>
    )
}
export default memo(LoadingCard);