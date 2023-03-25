import React, { memo, useState } from "react";
import { View, ScrollView, Image } from "react-native";
import LoadingCard from "../LoadingCard";
import { styles } from "./styles";

const ImageCard = ({data}) => {
    const [load, setload] = useState(false) 
    return (
        <View style={styles.ItemContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                    data.map((item, index) => (
                        <View style={[styles.ImageCard,(data.length-1)===index?styles.marginEmpty:styles.margin]} key={index}>
                            <Image
                            onLoadEnd={() => {
                                setTimeout(() => {
                                setload(false)
                                }, 500);
                            }}
                            onLoadStart={() => {
                                setload(true)
                            }}
                            source={{uri:item.image}}
                            style={{width:'100%',height:'100%',resizeMode:'cover',}}
                            />
                            {
                                load?<LoadingCard/>:null
                            }
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}
export default memo(ImageCard);