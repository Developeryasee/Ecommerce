import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { style } from "./styles";
import Xsquare from '../../Assets/Svg/x-square.svg'
import CustomFonts from "../../Themes/CustomFonts";
import { globalstyle } from "../../Themes/GlobalStyle";
export default function ComingSoon({hideModal}) {
    return (
        <View style={style.backDrop}>
            <View style={style.Card}>
                <View style={style.Content}>
                    <Text style={[CustomFonts.SIZES.h3, CustomFonts.COLORS.black, globalstyle.mt5]}>Coming Soon...</Text>
                    <TouchableOpacity onPress={hideModal}>
                        <Xsquare />
                    </TouchableOpacity>

                </View>

                <View style={style.LogoContainer}>
                    <Image
                        source={require('../../Assets/Images/logo.png')}
                        style={style.LogoImage}
                    />
                </View>
            </View>
        </View>
    )
}