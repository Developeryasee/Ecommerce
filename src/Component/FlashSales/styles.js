import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    ImageContainer: {
        width: 150,
        height: 170,
        borderRadius: 5,
        overflow: 'hidden',
    },

    ItemImage: {
        width: '100%', height: '100%', resizeMode: 'cover'
    },
    FlashView: {
        padding: 7,
        backgroundColor: '#facf19',
        top: 0,
        left: 0,
        position: 'absolute',
    },
    priceView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    progressLoader: {
        height: 6,
        borderRadius: 10,
        backgroundColor: '#ece8e5',
        marginTop: 5,
    }
});
export { Styles };
