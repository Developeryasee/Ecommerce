import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import { View, Image, Text, TouchableOpacity} from "react-native";
import CustomFonts from "../../Themes/CustomFonts";
import Bag from '../../Assets/Svg/bag-3.svg'
import Signin from '../../Assets/Svg/signin.svg'

export default function CustomDrawer(props) {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <DrawerContentScrollView
                {...props}
            >
                <View style={{ width: "100%", height: 160, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' }}>
                    <Image
                        source={require('../../Assets/Images/logo.png')}
                        style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                    />
                </View>
                <View style={{flex:1,backgroundColor:'#fff',paddingTop:10}}>
                <DrawerItemList
                {...props}
                />
                </View>
                
            </DrawerContentScrollView>

            <View style={{ padding:20,borderTopWidth:1, borderTopColor:'#F0F0F0'}}>
                <TouchableOpacity style={{paddingVertical:15,flexDirection:'row',alignItems:'center'}}
                onPress={()=>{
                    props.navigation.navigate("CartContainer")
                }}
                >
                        <Bag/>
                        <Text style={[CustomFonts.SIZES.h6,CustomFonts.COLORS.black,{marginLeft:5}]}>
                            Bag
                        </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingVertical:15,flexDirection:'row'}}
                onPress={()=>{
                    props.navigation.navigate('SignIn')
                }}
                >
                        <Signin/>
                        <Text style={[CustomFonts.SIZES.h6,CustomFonts.COLORS.black,{marginLeft:5}]}>
                            Sign In
                        </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


