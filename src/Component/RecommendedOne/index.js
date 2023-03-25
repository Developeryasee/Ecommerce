import React from "react";
import { Image, View } from "react-native";

export default function Recommended() {
    return(
        <View style={{width:'100%',height:300,backgroundColor:'#fff'}}>
                <Image
                source={{uri:'https://img.ltwebstatic.com/images3_ach/2023/03/10/1678428782f906a49660f41d2f514894df27565cd8_thumbnail_1350x.webp'}}
                style={{width:'100%',height:"100%",resizeMode:'cover'}}
                />
        </View>
    )
}