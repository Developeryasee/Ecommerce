import React, { memo, useState } from "react";
import { View, Image, StyleSheet, } from "react-native";
import LoadingCard from "../LoadingCard";

const OfferBanner = () => {
    const [load, setload] = useState(false)
    const [load1, setload1] = useState(false)
    return (
        <View>
            <View style={Styles.Banner1}>
            <Image
                    onLoadEnd={() => {
                        setTimeout(() => {
                        setload(false)
                        }, 500);
                    }}
                    onLoadStart={() => {
                        setload(true)
                    }}
                    source={require('../../Assets/Images/offer.gif')}
                    style={Styles.BannerImg}
                />
                {
                    load?<LoadingCard/>:null
                }
            </View>

            <View style={Styles.Banner2}>
                <Image
                    onLoadEnd={() => {
                        setTimeout(() => {
                        setload1(false)
                        }, 500);
                    }}
                    onLoadStart={() => {
                        setload1(true)
                    }}
                    source={require('../../Assets/Images/offer1.gif')}
                    style={[Styles.BannerImg]}
                    resizeMode='cover'
                />
                {
                    load1?<LoadingCard/>:null
                }
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    Banner1: {
        width: '100%', height: 150,
    },
    Banner2: {
        width: '100%', height: 100, marginTop: 10
    },
    BannerImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
});
export default memo(OfferBanner);