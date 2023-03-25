import React, { memo, useState } from "react";
import { View, Image, Text, ScrollView, Animated, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Flash from '../../Assets/Svg/flash.svg'
import CustomFonts from "../../Themes/CustomFonts";
import { globalstyle } from "../../Themes/GlobalStyle";
import LoadingCard from "../LoadingCard";
import { Styles } from "./styles";
const FlashSales = ({ data }) => {
    const {currency}=useSelector(state=>state.currency);
    const [load,setload]=useState(false);
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                data.map((item, index) => (
                    <View style={{marginRight: (data.length) === item.id ? 0 : 20}} key={index}>
                        <View style={[Styles.ImageContainer]}>
                            <Image
                                onLoadStart={()=>{
                                    setload(true)
                                }}
                                onLoadEnd={()=>{
                                    setTimeout(() => {
                                    setload(false)
                                        
                                    }, 500);
                                }}
                                source={{ uri: item.image }}
                                style={Styles.ItemImage}
                            />
                            {load?<LoadingCard/>:null}
                            <View style={[Styles.FlashView, globalstyle.contentCenter]}>
                                <Flash />
                                <Text style={[CustomFonts.SIZES.h5, CustomFonts.COLORS.black, globalstyle.mt5]}>-5%</Text>
                            </View>
                        </View>
                        <View style={[Styles.priceView,globalstyle.mt10]}>
                            <Text style={[CustomFonts.SIZES.h11,CustomFonts.COLORS.black]}>{currency} {item.price}</Text>
                            <Text style={[CustomFonts.SIZES.h11,CustomFonts.COLORS.gray,{textDecorationLine:'line-through'}]}>{currency} {item.oldprice}</Text>
                        </View>
                        <View style={Styles.progressLoader}>  
                        <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: '#f59842', width:item.TotalSold, borderRadius: 10 }]} />
                        </View>
                        <Text style={[CustomFonts.SIZES.h10,globalstyle.mt5]}>
                            {item.TotalSold} Sold
                        </Text>
                    </View>


                ))
            }

        </ScrollView>

    )
}
export default memo(FlashSales);
