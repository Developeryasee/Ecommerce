import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MenDasboard from "./Dashboard";
export default function MenStack(){
    const stack=createNativeStackNavigator();
    return(
        <stack.Navigator
        screenOptions={{headerShown:false}}
        >
            <stack.Screen
            name="CurveDasboard"
            component={MenDasboard}
            />
        </stack.Navigator>
    )

}