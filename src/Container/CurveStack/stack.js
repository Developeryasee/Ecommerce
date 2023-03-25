import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CurveDasboard from "./Dashboard";
export default function CurveStack(){
    const stack=createNativeStackNavigator();
    return(
        <stack.Navigator
        screenOptions={{headerShown:false}}
        >
            <stack.Screen
            name="CurveDasboard"
            component={CurveDasboard}
            />
        </stack.Navigator>
    )

}