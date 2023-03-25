import React from "react";
import { View,Text} from "react-native";
import CustomFonts from "../../Themes/CustomFonts";
import { globalstyle } from "../../Themes/GlobalStyle";
import Bag from '../../Assets/Svg/bag.svg'

export default function CartContainer(){

    return(
        <View style={[globalstyle.container,globalstyle.contentCenter]}>
            

            <Bag width={170} height={170}/>
            <Text style={[CustomFonts.SIZES.h12,CustomFonts.COLORS.black,globalstyle.mt30,{textAlign:'center'}]}>
            Welcome back! If you had items in your shopping bag, we have saved them for you. You can SIGN IN now to see them, or whenever you're ready to check out.
            </Text>

        </View>
    )
}