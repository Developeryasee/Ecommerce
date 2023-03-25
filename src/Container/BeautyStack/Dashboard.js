import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import HomeCarousel from "../../Component/Carosel";
import Category from "../../Component/Category";
import ComingSoon from "../../Component/Coming Soon";
import DailyDrops from "../../Component/DailyDrops";
import FlashSales from "../../Component/FlashSales";
import ImageCard from "../../Component/ImageCard";
import OfferBanner from "../../Component/OfferBanner";
import SubCategory from "../../Component/SubCategory";
import { CategoryData, FlashSalesData, Gallery, subCategory } from "../../DATA/BeautyData";
import CustomFonts from "../../Themes/CustomFonts";
import { globalstyle } from "../../Themes/GlobalStyle";
export default function BeautyDasboard() {
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

                <Text style={[CustomFonts.SIZES.h7, CustomFonts.COLORS.black, globalstyle.mt10, globalstyle.mb15]}>Shop By Occasion</Text>

                <ImageCard data={Gallery} />

                <Text style={[CustomFonts.SIZES.h7, CustomFonts.COLORS.black, globalstyle.mt15, globalstyle.mb15]}>Discover More</Text>

                <DailyDrops image={"https://img.ltwebstatic.com/images3_ccc/2023/03/22/167948282705210289da01d9bdc45fe1f007538bd8_thumbnail_1920x.jpg"} />

                <Text style={[CustomFonts.SIZES.h7, CustomFonts.COLORS.black, globalstyle.mt15, globalstyle.mb15]}>FLASH SALES</Text>

                <FlashSales data={FlashSalesData} />

            </ScrollView>
            {
                show ? <ComingSoon hideModal={hideModal} /> : null
            }
        </View>

    )

}