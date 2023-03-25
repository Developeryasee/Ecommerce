import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeDasboard from "../HomeStack/Dashboard";
import WomenDasboard from "./Dashboard";

export default function WomenStack(){
    const stack=createNativeStackNavigator();
    return(
        <stack.Navigator
        screenOptions={{headerShown:false}}
        >
            <stack.Screen
            name="WomenDasboard"
            component={WomenDasboard}
            />
        </stack.Navigator>
    )

}