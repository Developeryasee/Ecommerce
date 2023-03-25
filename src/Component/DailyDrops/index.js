import React, { memo, useState } from "react";
import { View,Image, StyleSheet } from "react-native";
import LoadingCard from "../LoadingCard";

function DailyDrops({image}){
    const [load, setload] = useState(false) 
    return(
        <View style={style.Container}>
                <Image
                onLoadEnd={() => {
                    setTimeout(() => {
                    setload(false)
                    }, 500);
                }}
                onLoadStart={() => {
                    setload(true)
                }}
                style={style.image}
                source={{uri:image}}
                />
                {
                    load?<LoadingCard/>:null
                }
        </View>
    )
}
const style=StyleSheet.create({
    Container:{
        width:'100%',
        height:100,
        backgroundColor:'#fff'
    },
    image:{
        width:'100%',
        height:'100%',
        resizeMode:'cover'
    }
})
export default memo(DailyDrops);