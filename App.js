import React from "react";
import { SafeAreaView,TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "./src/Navigation/DrawerNavigator";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import { currencyReducer } from "./src/Reducer/currencyReducer";
import CartContainer from "./src/Container/CartContainer";
import ArrowLeft from './src/Assets/Svg/arrow-left.svg'
import SigninContainer from "./src/Container/SignInContainer";
export default function App() {
    const stack = createNativeStackNavigator();
    const store = configureStore({
        reducer: {
            currency: currencyReducer
        }
    })
    const HeaderLeft = ({ navigation }) => {
        return (
            <TouchableOpacity 
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <ArrowLeft width={30} height={30}/>
            </TouchableOpacity>
        )
    }
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <NavigationContainer>
                    <stack.Navigator
                        screenOptions={{ headerShown: false }}
                    >
                        <stack.Screen
                            name="DrawerNavigator"
                            component={DrawerNavigator}
                        />
                        <stack.Screen
                            name="CartContainer"
                            component={CartContainer}
                            options={({ navigation }) => ({
                                headerShown:true,
                                headerLeft:props=><HeaderLeft navigation={navigation}/>,
                                headerTitle: "BAG",
                                headerTintColor: '#854b25',
                                headerTitleAlign: 'center',
                                
                            })}
                        />
                        <stack.Screen
                            name="SignIn"
                            component={SigninContainer}
                            options={({ navigation }) => ({
                                headerShown:true,
                                headerLeft:props=><HeaderLeft navigation={navigation}/>,
                                headerTitle: "SIGN IN",
                                headerTintColor: '#854b25',
                                headerTitleAlign: 'center',
                                
                            })}
                        />
                    </stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </Provider>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});