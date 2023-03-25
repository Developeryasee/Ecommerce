import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import HomeCarousel from "../../Component/Carosel";
import Category from "../../Component/Category";
import ComingSoon from "../../Component/Coming Soon";
import DailyDrops from "../../Component/DailyDrops";
import FlashSales from "../../Component/FlashSales";
import OfferBanner from "../../Component/OfferBanner";
import SubCategory from "../../Component/SubCategory";
import { CategoryData, FlashSalesData, subCategory } from "../../DATA/MenData";
import CustomFonts from "../../Themes/CustomFonts";
import { globalstyle } from "../../Themes/GlobalStyle";
export default function MenDasboard() {
    const [show, setShow] = useState(false);
    
    const moveSubCategory = () => {
        setShow(true)
    }
    const hideModal = () => {
        setShow(false)

    }
    return (
        <View style={globalstyle.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <SubCategory data={subCategory} moveSubCategory={moveSubCategory} />

                <OfferBanner />

                <Text style={[CustomFonts.SIZES.h7, CustomFonts.COLORS.black, globalstyle.mt15, globalstyle.mb15]}>Shop By Category</Text>

                <Category data={CategoryData} HumanWear={true} />

                <Text style={[CustomFonts.SIZES.h7, CustomFonts.COLORS.black, globalstyle.mt10, globalstyle.mb15]}>FLASH SALES</Text>

                <FlashSales data={FlashSalesData} />

                <Text style={[CustomFonts.SIZES.h7, CustomFonts.COLORS.black, globalstyle.mt15, globalstyle.mb15]}>#dailydrops</Text>

                <DailyDrops image={"https://img.ltwebstatic.com/images3_ach/2023/03/10/1678430521815e55eee9660056fd49ba78311a7efa_thumbnail_1920x.webp"} />
            </ScrollView>
            {
                show ? <ComingSoon hideModal={hideModal} /> : null
            }
        </View>

    )
}