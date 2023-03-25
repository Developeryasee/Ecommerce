import React from "react";
import { View,Text, Image, TextInput, TouchableOpacity} from "react-native";
import CustomFonts from "../../Themes/CustomFonts";
import { globalstyle } from "../../Themes/GlobalStyle";
import { styles } from "./styles";
import Google from '../../Assets/Svg/google.svg'
import FaceBook from '../../Assets/Svg/FacebookIcon.svg'
export default function SigninContainer(){

    return(
        <View style={[globalstyle.container,{alignItems:'center'}]}>
                <View style={[styles.LogoContainer,globalstyle.mt10]}>
                    <Image
                    source={require('../../Assets/Images/logo.png')}
                    style={styles.LogoImage}
                    />
                </View>

                <View style={[styles.TextInputContainer,globalstyle.mt30]}>
                    <TextInput
                    placeholder="Mobile number or email address"
                    placeholderTextColor={"#838997"}
                    style={[CustomFonts.SIZES.h12,CustomFonts.COLORS.black,{marginLeft:10,width:'100%'}]}
                    />
                </View>

                <TouchableOpacity style={[styles.SubmitButton,globalstyle.mt30]}>
                        <Text style={[CustomFonts.COLORS.white,CustomFonts.SIZES.h5]}>CONTINUE</Text>
                </TouchableOpacity>

                <Text style={[CustomFonts.SIZES.h11,CustomFonts.COLORS.gray,globalstyle.mt15]}>Forgot your password?</Text>

                <View style={{flexDirection:'row',alignItems:'center',marginTop:15}}>
                    <View style={styles.borderLine}/>
                    <Text style={[CustomFonts.SIZES.h11,CustomFonts.COLORS.gray,{marginHorizontal:10}]}>OR</Text>
                    <View style={styles.borderLine}/>
                </View>

                <TouchableOpacity style={[styles.SocialButton,globalstyle.mt30]}>
                            <Google/>
                            <Text style={[CustomFonts.COLORS.black,CustomFonts.SIZES.h5,{alignSelf:'center',marginLeft:20}]}>SIGN IN WITH GOOGLE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.SocialButton,globalstyle.mt15]}>
                            <FaceBook/>
                            <Text style={[CustomFonts.COLORS.black,CustomFonts.SIZES.h5,{alignSelf:'center',marginLeft:20}]}>SIGN IN WITH FACEBOOk</Text>
                </TouchableOpacity>
        </View>
    )
}