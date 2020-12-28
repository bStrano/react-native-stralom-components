import React from 'react';
import {StyleSheet, TextInput, View, Text} from "react-native";
import Icon, {ICON_CLASS} from "../Icon";
import ITextInputWI from '../interfaces/TextInput/ITextInputWI';


function TextInputWI(props: ITextInputWI) {
    const styles = Styles(props);
    const {icon: Teste} = props
    console.log(Teste)
    return (
      <View style={[styles.container, props.styles.container]}>
          {
              props.label &&
              <Text style={[styles.label, props.styles.label ]}>{props.label}</Text>
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
                placeholderTextColor={props.placeholderTextColor}
                onChangeText={props.onChangeText}
                style={[styles.inputContainer, styles.textContainer, props.styles.textInput]}
              />
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
            margin: 8,
        },
        inputContainer: {
            backgroundColor: 'rgba(52,52,52,0.8)',
            opacity: 1,
            borderColor: '#585858',
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
            flex: 1,
            width: props.width,
            borderTopRightRadius: 10,
            padding: 10,
            color: 'white',
            borderBottomRightRadius: 10,
        },
        label: {
            fontSize: 15, paddingLeft: 10, color: "#696969"
        },
        container: {

        }
    });
};
