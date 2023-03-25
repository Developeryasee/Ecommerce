import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import HomeCarousel from "../../Component/Carosel";
import Category from "../../Component/Category";
import ComingSoon from "../../Component/Coming Soon";
import FlashSales from "../../Component/FlashSales";
import ImageCard from "../../Component/ImageCard";
import OfferBanner from "../../Component/OfferBanner";
import SubCategory from "../../Component/SubCategory";
import { BrandData, carouselImages, CategoryData, FlashSalesData, Gallery, subCategory } from "../../DATA/CurveData";
import CustomFonts from "../../Themes/CustomFonts";
import { globalstyle } from "../../Themes/GlobalStyle";
export default function CurveDasboard() {
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

                <Text style={[CustomFonts.SIZES.h7, CustomFonts.COLORS.black, globalstyle.mt15, globalstyle.mb15]}>BRANDS WE LOVE</Text>

                <ImageCard data={BrandData} />

                <Text style={[CustomFonts.SIZES.h7, CustomFonts.COLORS.black, globalstyle.mt15, globalstyle.mb15]}>#AMZAAcampaigns</Text>

                <HomeCarousel carouselImages={carouselImages} />

                <Text style={[CustomFonts.SIZES.h7, CustomFonts.COLORS.black, globalstyle.mt15, globalstyle.mb15]}>Lookbook</Text>

                <ImageCard data={Gallery} />

            </ScrollView>
            {
                show ? <ComingSoon hideModal={hideModal} /> : null
            }
        </View>

    )

}