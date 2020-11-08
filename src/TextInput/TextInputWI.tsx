import React from 'react';
import {StyleSheet, TextInput, View} from "react-native";
import Icon, {ICON_CLASS} from "../Icon";
import Dimensions from "../Constants/Dimensions";
import IIcon from '../interfaces/IIcon';

interface ITextInputWI {
    icon: IIcon,
    value: string,
    height: number,
    onChangeText: Function,
    textColor: string
}

function TextInputWI(props: ITextInputWI) {
    const styles = Styles(props);
    return (
      <View style={styles.mainContainer}>
          <View style={[styles.inputContainer, styles.iconContainer]}>
              <Icon
                class={props.icon.class}
                name={props.icon.name}
                color={props.icon.color}
                size={props.icon.size}
              />
          </View>
          <TextInput
            {...props}
            value={props.value}
            placeholderTextColor={props.textColor}
            onChangeText={text => props.onChangeText(text)}
            style={[styles.inputContainer, styles.textContainer]}
          />
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
            margin: 8,
        },
        inputContainer: {
            backgroundColor: 'rgba(52,52,52,0.8)',
            opacity: 1,
            borderColor: 'grey',
            borderWidth: 1,
        },
        iconContainer: {
            width: 22 * 3,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            justifyContent: 'center',
            borderRightWidth: 1,
            alignItems: 'center',
        },
        textContainer: {
            width: Dimensions.width * 0.7,
            borderTopRightRadius: 10,
            padding: 10,
            color: 'white',
            borderBottomRightRadius: 10,
        },
    });
};
