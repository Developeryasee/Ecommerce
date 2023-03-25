import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomFonts from "../../Themes/CustomFonts";
import { globalstyle } from "../../Themes/GlobalStyle";
import { style } from "./styles";
import Check from '../../Assets/Svg/check.svg'
export default function Currency({close}) {
    const {currency}=useSelector(state=>state.currency);
    const dispatch=useDispatch();
    const currencyData = [
        {
            name: 'IND',
            currency: 'र',
        },
        ,{
            name: 'GBP',
            currency: 'GBP£',
        },
        {
            name: 'USD',
            currency: '$',
        },
        {
            name: 'EUR',
            currency: '€'
        },
        {
            name: 'NOK',
            currency: 'N.Kr.',
        },
        {
            name:'CHF',
            currency:'CHF'
        }
    ]
    const changeCurrency=(currency)=>{
        dispatch({type:'changeCurrecy',payload:currency})
        close();
    }
    return (
        <View style={style.backDrop}>
            <View style={style.currencypopup}>
                <Text style={[CustomFonts.SIZES.h6, CustomFonts.COLORS.black,globalstyle.mb10,{ marginLeft: 10, marginRight: 70 }]}>Select Currency</Text>

                {
                    currencyData.map((item, index) => (
                        <TouchableOpacity 
                        key={index}
                        style={{ borderTopWidth:index===0?0:1, borderTopColor: '#e5e5e5', justifyContent: 'space-between', marginTop:index===0?0:5,flexDirection:'row',paddingRight:5}}
                        onPress={()=>{
                            changeCurrency(item.currency)
                        }}
                        >
                            <Text style={[CustomFonts.SIZES.h11, CustomFonts.COLORS.black,globalstyle.mt10,{ marginLeft: 10, }]}>{item.name} / {item.currency}</Text>
                            {
                                currency===item.currency? <Check style={{marginTop:5}}/>:null
                            }
                           
                        </TouchableOpacity>
                    ))
                }

            </View>
        </View>
    )
}