import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Category from "../../Component/Category";
import OfferBanner from "../../Component/OfferBanner";
import CustomFonts from "../../Themes/CustomFonts";
import { globalstyle } from "../../Themes/GlobalStyle";
import FlashSales from "../../Component/FlashSales";
import Recommended from "../../Component/RecommendedOne";
import HomeCarousel from "../../Component/Carosel";
import SubCategory from "../../Component/SubCategory";
import DailyDrops from "../../Component/DailyDrops";
import ComingSoon from "../../Component/Coming Soon";
import { carouselImages, CategoryData, FlashSalesData, subCategory } from "../../DATA/HomeData";

export default function HomeDasboard() {
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

                <Category data={CategoryData} HumanWear={false} />

                <Text style={[CustomFonts.SIZES.h7, CustomFonts.COLORS.black, globalstyle.mt15, globalstyle.mb15]}>#AMZAAsales</Text>

                <DailyDrops image={"https://img.ltwebstatic.com/images3_ach/2023/03/15/1678847135265cd3bbfc2e2174480ff6dadbbd6e2b_thumbnail_1920x.webp"} />

                <Text style={[CustomFonts.SIZES.h7, CustomFonts.COLORS.black, globalstyle.mt15, globalstyle.mb15]}>FLASH SALES</Text>

                <FlashSales data={FlashSalesData} />

                <Text style={[CustomFonts.SIZES.h7, CustomFonts.COLORS.black, globalstyle.mt15, globalstyle.mb15]}>#AMZAAcampaigns</Text>

                <HomeCarousel carouselImages={carouselImages} />

                <Text style={[CustomFonts.SIZES.h7, CustomFonts.COLORS.black, globalstyle.mt15, globalstyle.mb15]}>Recommended For You</Text>

                <Recommended />

            </ScrollView>
            {
                show ? <ComingSoon hideModal={hideModal} /> : null
            }
        </View>
    )
}