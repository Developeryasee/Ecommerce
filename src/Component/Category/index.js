import React, { memo } from "react";
import { Dimensions, StyleSheet, View, Text, Image } from "react-native";
import CustomFonts from "../../Themes/CustomFonts";
import { globalstyle } from "../../Themes/GlobalStyle";

const { width } = Dimensions.get('window');
const Category = ({ data,HumanWear }) => {
    return (
        <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>

            {data.map((item, index) => (
                <View style={[globalstyle.contentCenter, Styles.categoryLayout,HumanWear?(index + 1) % 2 === 0 ? { marginRight: 0 } : { marginRight: 10 }:(index + 1) % 3 === 0 ? { marginRight: 0 } : { marginRight: 10 },{width:HumanWear?(width - 50) / 2:(width - 60) / 3}]} key={index}>
                    {
                        HumanWear?
                        <>
                        <View style={{width:40,height:40,borderRadius:40,overflow:'hidden',backgroundColor:'#e5e5e5'}}>
                        <Image
                        source={{uri:item.image}}
                        style={{width:"100%",height:"100%",resizeMode:'cover'}}
                        />
                        </View>
                     
                        </>:<>
                        {item.image}
                        </>
                    }
                    <Text style={[CustomFonts.SIZES.h12, CustomFonts.COLORS.black, globalstyle.mt5]}>{item.categoryName}</Text>
                </View>
            ))}
        </View>
    )
}
const Styles = StyleSheet.create({
    categoryLayout: {
        width: (width - 60) / 3,
        padding: 10,
        backgroundColor: '#ece8e5',
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default memo(Category);


