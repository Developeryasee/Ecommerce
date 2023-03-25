import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Womenstack from "../../Container/WomenStack/stack";
import Menu from '../../Assets/Svg/menu.svg'
import Globe from '../../Assets/Svg/globe.svg'
import Men from '../../Assets/Svg/male.svg'
import Female from '../../Assets/Svg/female.svg'
import Home from '../../Assets/Svg/home.svg'
import Beauty from '../../Assets/Svg/beauty.svg'
import Curve from '../../Assets/Svg/curve.svg'
import Kid from '../../Assets/Svg/kid.svg'
import CustomDrawer from "./customDrawer";
import CustomFonts from "../../Themes/CustomFonts";
import CurveStack from "../../Container/CurveStack/stack";
import MenStack from "../../Container/MenStack/stack";
import KidStack from "../../Container/KidStack/stack";
import BeautyStack from "../../Container/BeautyStack/stack";
import HomeStack from "../../Container/HomeStack/stack";
import Currency from "../../Component/CurrencyDropDown";
function DrawerNavigator() {
    const [currencyPopup,setcurrencyPopup]=useState(false)
    const Drawer = createDrawerNavigator();
    const HedaerIcon = ({ navigation }) => {
        return (
            <TouchableOpacity style={{ marginLeft: 20, }}
                onPress={() => {
                    if (currencyPopup) {
                        setcurrencyPopup(false)
                    }
                    navigation.openDrawer();
                }}
            >
                <Menu width={30} height={30}/>
            </TouchableOpacity>
        )
    }
    const HedaerRightIcon = ({ navigation }) => {
        return (
            <TouchableOpacity style={{ marginRight: 20 }}
                onPress={() => {
                    setcurrencyPopup(true)
                }}
            >
                <Globe width={30} height={30}/>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <Drawer.Navigator
                drawerContent={props => <CustomDrawer {...props} />}
                defaultStatus={"open"}
                screenOptions={({ navigation }) => ({
                    headerLeft: props => <HedaerIcon navigation={navigation} />,
                    headerRight: props => <HedaerRightIcon />,
                    drawerActiveBackgroundColor: "#f6da87",
                    drawerActiveTintColor: '#854b25',
                    drawerInactiveTintColor: '#000',
                    drawerInactiveBackgroundColor: '#fff',
                    drawerLabelStyle: [CustomFonts.SIZES.h6,{marginLeft:-25,marginTop:3}],
                    headerTitle: "A M Z A A",
                    headerTintColor: '#854b25',
                    headerTitleAlign: 'center',
                })}
            >
                <Drawer.Screen
                    name="HOME"
                    component={HomeStack}
                    options={{
                        drawerIcon:({focused})=>(
                            <Home stroke={focused?'#854b25':'#000'}/>
                        )
                    }}
                    
                />
                <Drawer.Screen
                    name="WOMEN"
                    component={Womenstack}
                    options={{
                        drawerIcon:({focused})=>(
                            <Female   stroke={focused?'#854b25':'#000'}/>
                        )
                    }}
                />
                <Drawer.Screen
                    name="CURVE + PLUS"
                    component={CurveStack}
                    options={{
                        drawerIcon:({focused})=>(
                            <Curve fill={focused?'#854b25':'#000'} stroke={focused?'#854b25':'#000'}/>
                        )
                    }}
                />
                <Drawer.Screen
                    name="MEN"
                    component={MenStack}
                    options={{
                        drawerIcon:({focused})=>(
                            <Men stroke={focused?'#854b25':'#000'}/>
                        )
                    }}
                />
                <Drawer.Screen
                    name="KIDS"
                    component={KidStack}
                    options={{
                        drawerIcon:({color,focused})=>(
                            <Kid fill={focused?'#854b25':null} stroke={focused?'#854b25':null}/>
                        )
                    }}
                />
                <Drawer.Screen
                    name="BEAUTY"
                    component={BeautyStack}
                    options={{
                        drawerIcon:({color,focused})=>(
                            <Beauty fill={focused?'#854b25':null}/>
                        )
                    }}
                />
            </Drawer.Navigator>
            {
                currencyPopup?<Currency close={()=>{
                    setcurrencyPopup(false)
                }}/>:null
            }
            
        </>

    )
}
export default DrawerNavigator;