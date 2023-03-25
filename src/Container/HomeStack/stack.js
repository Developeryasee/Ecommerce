import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeDasboard from "./Dashboard";

export default function HomeStack(){
    const stack=createNativeStackNavigator();
    return(
        <stack.Navigator
        screenOptions={{headerShown:false}}
        >
            <stack.Screen
            name="HomeDasboard"
            component={HomeDasboard}
            />
        </stack.Navigator>
    )

}