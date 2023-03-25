import React, { memo } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import CustomFonts from "../../Themes/CustomFonts";
import { styles } from "./styles";

const SubCategory = ({ data,moveSubCategory }) => {
    return (
        <View style={[styles.subCategoryView]}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    data.map((item, index) => (
                        <TouchableOpacity style={[styles.categoryItem,(data.length-1)===index?styles.marginEmpty:styles.margin]} key={index}
                        onPress={moveSubCategory}
                        >
                            <Text style={[CustomFonts.SIZES.h8, item.id===2?CustomFonts.COLORS.red:CustomFonts.COLORS.black3]}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>

        </View>
    )
}
export default memo(SubCategory)