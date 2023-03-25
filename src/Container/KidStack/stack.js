import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import KidsDasboard from "./Dashboard";
export default function KidStack(){
    const stack=createNativeStackNavigator();
    return(
        <stack.Navigator
        screenOptions={{headerShown:false}}
        >
            <stack.Screen
            name="KidsDasboard"
            component={KidsDasboard}
            />
        </stack.Navigator>
    )

}