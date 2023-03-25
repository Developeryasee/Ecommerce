import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BeautyDasboard from "./Dashboard";
export default function BeautyStack(){
    const stack=createNativeStackNavigator();
    return(
        <stack.Navigator
        screenOptions={{headerShown:false}}
        >
            <stack.Screen
            name="BeautyDasboard"
            component={BeautyDasboard}
            />
        </stack.Navigator>
    )

}