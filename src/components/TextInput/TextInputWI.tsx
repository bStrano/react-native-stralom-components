import React, {useCallback, useState} from 'react';
import {StyleSheet, TextInput, View, Text, Pressable} from "react-native";
import Icon, {ICON_CLASS} from "../Icon";
import ITextInputWI from '../../interfaces/TextInput/ITextInputWI';


function TextInputWI(props: ITextInputWI) {
    const [showPassword, setShowPassword] = useState(false)
    const styles = Styles(props);

    const renderPasswordIcon = useCallback(() => {
        if(props.isPassword){
            return (
                <Pressable onPress={() =>  setShowPassword(!showPassword)} style={[ styles.iconRightContainer]}>
                    <Icon
                        class={"Ionicons"}
                        name={showPassword ? 'eye-off' : 'eye'}
                        color={props.iconPasswordColor ? props.iconPasswordColor : props.borderColor }
                        size={20}
                    />
                </Pressable>
            )
        }
    },[props.isPassword,showPassword])

    return (
      <View style={[styles.container, props?.styles?.container]}>
          {
              props.label &&
              <Text style={[styles.label, props?.styles?.label ]}>{props.label}</Text>
          }
          <View style={styles.mainContainer}>
              {
                  props.icon &&
                  <View style={[styles.inputContainer, styles.iconContainer]}>
                      <Icon
                        class={props.icon.class}
                        name={props.icon.name}
                        color={props.icon.color}
                        size={props.icon.size}
                      />
                  </View>
              }

              <TextInput
                {...props}
                value={props.value}
                secureTextEntry={showPassword}
                placeholderTextColor={props.placeholderTextColor}
                onChangeText={props.onChangeText}
                style={[styles.inputContainer, styles.textContainer, props?.styles?.textInput]}
              />

              {
                  renderPasswordIcon()
              }
          </View>
      </View>

    );
}

export default TextInputWI;


TextInputWI.defaultProps = {
    color: 'white',
    height: 60,
    iconClass: ICON_CLASS.MaterialIcons,
};

const Styles = (props: ITextInputWI) => {
    return StyleSheet.create({
        mainContainer: {
            height: props.height,
            flexDirection: 'row',
            margin: 6,
        },
        inputContainer: {
            backgroundColor: props.backgroundColor,
            opacity: 1,
            borderColor: props.borderColor,
            borderWidth: 1,
            borderRightWidth: props.isPassword ? 0 : undefined
        },
        iconContainer: {
            width: 22 * 3,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            justifyContent: 'center',
            borderRightWidth: 1,
            alignItems: 'center',
        },
        iconRightContainer: {
            width: 22 * 2,
            backgroundColor: props.backgroundColor,
            borderTopRightRadius: 22,
            borderBottomRightRadius: 22,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            opacity: 1,
            borderLeftWidth: 0,
            borderColor: props.borderColor
        },
        textContainer: {
            flex: 1,
            width: props.width,
            borderTopRightRadius: props.isPassword ? 0 : 10,
            padding: 10,
            color: 'black',
            borderBottomRightRadius: props.isPassword ? 0 : 10,
        },
        label: {
            fontSize: 15, paddingLeft: 10, color: "#8c8c8c"
        },
        container: {

        }
    });
};

TextInputWI.defaultProps = {
    backgroundColor: 'rgba(52,52,52,0.8)',
    borderColor: '#585858',
}
