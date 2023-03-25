import React, { useEffect, useState, useRef, useCallback } from 'react';
import { ScrollView, View, Dimensions, Image } from 'react-native';
import LoadingCard from '../LoadingCard';
const HomeCarousel = ({carouselImages}) => {
    const [dimension, setDimension] = useState(Dimensions.get('window'));
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [load, setload] = useState(false) 
    const scrollRef = useRef();
    let intervalId = null;

    const onChange = () => {
        setDimension(Dimensions.get('window'));
    };

    useEffect(() => {
        var lisetner = Dimensions.addEventListener('change', onChange);
        return () => {
            lisetner.remove();
        };
    });

    const onSlideChange = useCallback(() => {
        const newIndex =
            selectedIndex === carouselImages.length - 1 ? 0 : selectedIndex + 1;

        setSelectedIndex(newIndex);

        scrollRef?.current?.scrollTo({
            animated: true,
            y: 0,
            x: dimension.width * newIndex,
        });
    }, [selectedIndex]);

    const startInterval = useCallback(() => {
        intervalId = setInterval(onSlideChange, 3000);
    }, [onSlideChange]);

    useEffect(() => {
        startInterval();
        return () => {
            clearInterval(intervalId);
        };
    }, [onSlideChange]);
    const setIndex = event => {
        let viewSize = event.nativeEvent.layoutMeasurement.width;
        let contentOffset = event.nativeEvent.contentOffset.x;
        let carouselIndex = Math.floor(contentOffset / viewSize);
        setSelectedIndex(carouselIndex);
    };

    return (
        <View style={{ width: dimension.width }}>
            <ScrollView
                horizontal
                ref={scrollRef}
                onMomentumScrollEnd={setIndex}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            >
                {carouselImages.map((value, key) => (
                    <Image
                    onLoadEnd={() => {
                        setTimeout(() => {
                        setload(false)
                        }, 500);
                    }}
                    onLoadStart={() => {
                        setload(true)
                    }}
                        key={key}
                        source={{ uri: `${value.url}` }}
                        style={{ width: dimension?.width, height: 160, resizeMode: 'cover' }}
                    />
                ))}
                
            </ScrollView>
            {
                    load?<LoadingCard/>:null
                }
        </View>
    );
};


export default HomeCarousel;